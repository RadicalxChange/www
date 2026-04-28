#!/usr/bin/env node
/**
 * One-shot Mailchimp newsletter backfill into src/site/updates/announcements/.
 *
 * Subcommands:
 *   list  — fetch the archive index, filter, print campaigns, exit.
 *   run   — for each filtered campaign, fetch, convert to markdown,
 *           rehost images, write a markdown file.
 *
 * This is a one-time tool. Going forward, newsletters are authored
 * directly in the repo — do not wire this into the build.
 */

const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const cheerio = require("cheerio");
const TurndownService = require("turndown");

const ARCHIVE_URL =
  "https://us19.campaign-archive.com/home/?u=43120a1fed800e11539c2e78d&id=2e47820582";
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const ANNOUNCEMENTS_DIR = path.join(
  REPO_ROOT,
  "src",
  "site",
  "updates",
  "announcements"
);
const IMAGES_BASE_DIR = path.join(
  REPO_ROOT,
  "src",
  "site",
  "_images",
  "announcements",
  "newsletters"
);
const IMAGES_URL_PREFIX = "/images/announcements/newsletters";
const MIN_DATE = "2025-04-30";
const EXCLUDE_TITLE_PATTERN = /combinations/i;
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

// ---------- HTTP ----------

async function httpGet(url, { asBuffer = false } = {}) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "User-Agent": USER_AGENT, Accept: "*/*" },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  return asBuffer ? Buffer.from(await res.arrayBuffer()) : await res.text();
}

// ---------- Archive parsing ----------

function parseArchive(html) {
  const $ = cheerio.load(html);
  const campaigns = [];
  $("li.campaign").each((_, el) => {
    const $el = $(el);
    const text = $el.text();
    const dateMatch = text.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (!dateMatch) return;
    const [, mm, dd, yyyy] = dateMatch;
    const date = `${yyyy}-${mm}-${dd}`;
    const $a = $el.find("a").first();
    const eepurl = $a.attr("href");
    const title = ($a.attr("title") || $a.text() || "").trim();
    if (!eepurl || !title) return;
    campaigns.push({ date, title, eepurl });
  });
  return campaigns;
}

function filterCampaigns(campaigns) {
  return campaigns.filter(
    (c) => c.date >= MIN_DATE && !EXCLUDE_TITLE_PATTERN.test(c.title)
  );
}

// ---------- Resolve eepurl → canonical archive URL ----------

async function resolveEepurl(eepurl) {
  const res = await fetch(eepurl, {
    redirect: "follow",
    headers: { "User-Agent": USER_AGENT },
  });
  return res.url;
}

// ---------- Title cleaning + slugging ----------

function cleanTitle(raw) {
  // Strip leading emoji/symbols and decorative whitespace.
  return raw
    .replace(
      /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}\u{2B00}-\u{2BFF}\u{1F000}-\u{1F2FF}⚡✨⭐]/gu,
      ""
    )
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(s) {
  return s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .replace(/[‘’‚‛′]/g, "") // smart single quotes
    .replace(/[“”„‟″]/g, "") // smart double quotes
    .replace(/&[a-z]+;/gi, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function buildSlug(date, cleanedTitle) {
  const ym = date.slice(0, 7); // YYYY-MM
  return `${ym}-${slugify(cleanedTitle)}`;
}

function buildFilename(date, cleanedTitle) {
  // Match existing convention: YYYY-MM-DD_<slug-without-date-prefix>.md
  return `${date}_${slugify(cleanedTitle)}.md`;
}

// ---------- HTML cleanup before turndown ----------

function isTrackingPixel(src, $img) {
  if (!src) return true;
  if (/list-manage\.com\/track\/open\.php/i.test(src)) return true;
  if (/\/open\.php\?/i.test(src)) return true;
  const w = parseInt($img.attr("width") || "0", 10);
  const h = parseInt($img.attr("height") || "0", 10);
  if (w && h && w <= 2 && h <= 2) return true;
  // Mailchimp social-block icons live on cdn-images.mailchimp.com.
  // We strip these along with the footer block, but guard here too.
  if (/cdn-images\.mailchimp\.com\/icons\/social-block/i.test(src)) return true;
  return false;
}

function isMailchimpContentImage(src) {
  if (!src) return false;
  return /^https?:\/\/(mcusercontent|gallery)\.com\//i.test(src) ||
    /^https?:\/\/mcusercontent\.com\//i.test(src) ||
    /^https?:\/\/gallery\.mailchimp\.com\//i.test(src);
}

function extractContent($) {
  // Drop the preheader (often "view in browser" + preview text),
  // template footer (unsubscribe, address, social icons), and tracking
  // pixel containers. Keep templateHeader (the masthead image) plus
  // everything inside templateBody.
  $("#templatePreheader, #templateFooter").remove();

  // Some campaigns also have a separate footer table outside templateFooter.
  $("center > br + table").each((_, el) => {
    const txt = $(el).text();
    if (
      /unsubscribe from this list|update your preferences|Want to change how you receive/i.test(
        txt
      )
    ) {
      $(el).remove();
    }
  });

  // Drop common Mailchimp wrapper attributes/classes that turndown might
  // otherwise carry into the markdown.
  $("*").each((_, el) => {
    const $el = $(el);
    $el.removeAttr("style");
    $el.removeAttr("align");
    $el.removeAttr("valign");
    $el.removeAttr("bgcolor");
    $el.removeAttr("border");
    $el.removeAttr("cellpadding");
    $el.removeAttr("cellspacing");
    $el.removeAttr("class");
    $el.removeAttr("width");
    $el.removeAttr("height");
  });

  // Use the email body wrapper if present; otherwise, the whole body.
  const $body = $("#bodyTable").length
    ? $("#bodyTable")
    : $("body").length
      ? $("body")
      : $.root();
  return $body;
}

// ---------- Image rehosting ----------

async function downloadImage(url, destDir) {
  const u = new URL(url);
  const baseName = path.basename(u.pathname);
  // Mailchimp filenames are typically <uuid>.<ext>; safe to use directly.
  // Sanitize anyway.
  const safeName = baseName.replace(/[^a-zA-Z0-9._-]+/g, "_");
  const destPath = path.join(destDir, safeName);
  await fsp.mkdir(destDir, { recursive: true });
  if (!fs.existsSync(destPath)) {
    const buf = await httpGet(url, { asBuffer: true });
    await fsp.writeFile(destPath, buf);
  }
  return safeName;
}

async function rehostImages($, $scope, slug) {
  const subDir = path.join(IMAGES_BASE_DIR, slug);
  const urlPrefix = `${IMAGES_URL_PREFIX}/${slug}`;
  const results = { downloaded: 0, skipped: 0, failed: [] };

  const $imgs = $scope.find("img").toArray();
  for (const el of $imgs) {
    const $img = $(el);
    const src = $img.attr("src");
    if (isTrackingPixel(src, $img)) {
      $img.remove();
      results.skipped += 1;
      continue;
    }
    if (!isMailchimpContentImage(src)) {
      // Foreign image (e.g. a third-party hosted image embedded in the email).
      // Leave the remote URL in place rather than failing the whole post.
      continue;
    }
    try {
      const fileName = await downloadImage(src, subDir);
      $img.attr("src", `${urlPrefix}/${fileName}`);
      results.downloaded += 1;
    } catch (err) {
      results.failed.push({ src, error: err.message });
    }
  }
  return results;
}

// ---------- Turndown setup ----------

function makeTurndown() {
  const td = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
  });

  // Drop scripts, styles, comments, and the residual mailchimp utility
  // tables that survived attribute stripping.
  td.remove(["script", "style", "noscript"]);

  // Keep images straightforwardly; turndown handles them by default but
  // we want to ensure we don't emit empty alt descriptors as broken syntax.
  td.addRule("safeImage", {
    filter: "img",
    replacement(_, node) {
      const src = node.getAttribute("src") || "";
      const alt = (node.getAttribute("alt") || "").replace(/\s+/g, " ").trim();
      if (!src) return "";
      return `![${alt}](${src})`;
    },
  });

  // Wrap centered "button" anchors as plain links.
  td.addRule("buttonLinks", {
    filter(node) {
      return (
        node.nodeName === "A" &&
        /mcnButton|button|btn/i.test(node.getAttribute("class") || "")
      );
    },
    replacement(content, node) {
      const href = node.getAttribute("href") || "";
      const text = (content || node.textContent || "").trim();
      if (!href) return text;
      return `[${text}](${href})`;
    },
  });

  return td;
}

function postProcessMarkdown(md) {
  return md
    // Collapse 3+ blank lines
    .replace(/\n{3,}/g, "\n\n")
    // Drop "view this email in your browser" leftovers
    .replace(/^.*view this email in your browser.*$/gim, "")
    // Drop residual unsubscribe/preferences lines if they leaked through
    .replace(/^.*unsubscribe from this list.*$/gim, "")
    .replace(/^.*update your preferences.*$/gim, "")
    .replace(/^.*Want to change how you receive these emails.*$/gim, "")
    // Drop bare tracking-pixel image stubs
    .replace(/^!\[\]\(\)\s*$/gm, "")
    // Trim leading/trailing whitespace
    .trim()
    .replace(/\n{3,}/g, "\n\n");
}

function deriveSummary(md) {
  // First non-empty paragraph, capped at 2 sentences.
  const paragraphs = md
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(
      (p) =>
        p &&
        !p.startsWith("#") &&
        !p.startsWith("![") &&
        !/^\[!\[/.test(p) &&
        !/^[-*]\s/.test(p)
    );
  const first = paragraphs[0] || "";
  const sentences = first.match(/[^.!?]+[.!?]+/g) || [first];
  return sentences.slice(0, 2).join(" ").trim();
}

// ---------- Frontmatter + writing ----------

function escapeYamlString(s) {
  // Wrap in double quotes; escape backslashes and double quotes.
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function buildFrontmatter({ date, cleanTitle, slug }) {
  const lines = [
    "---",
    'layout: "layouts/announcement.njk"',
    `date: ${escapeYamlString(date)}`,
    `slug: ${escapeYamlString(slug)}`,
    `title: ${escapeYamlString(cleanTitle)}`,
    `postHeader: ${escapeYamlString(cleanTitle)}`,
    "---",
    "",
  ];
  return lines.join("\n");
}

async function uniquePath(targetPath) {
  if (!fs.existsSync(targetPath)) return { path: targetPath, suffixed: false };
  const dir = path.dirname(targetPath);
  const ext = path.extname(targetPath);
  const base = path.basename(targetPath, ext);
  let i = 2;
  while (true) {
    const candidate = path.join(dir, `${base}-${i}${ext}`);
    if (!fs.existsSync(candidate)) {
      return { path: candidate, suffixed: true, original: targetPath };
    }
    i += 1;
  }
}

// ---------- Per-campaign processing ----------

async function processCampaign(campaign, { dryRun }) {
  const { date, title, eepurl } = campaign;
  const cleaned = cleanTitle(title);
  const slug = buildSlug(date, cleaned);
  const fileName = buildFilename(date, cleaned);
  const targetPath = path.join(ANNOUNCEMENTS_DIR, fileName);

  console.log(`\n→ ${date}  ${cleaned}`);
  console.log(`  slug: ${slug}`);
  console.log(`  file: src/site/updates/announcements/${fileName}`);

  const archiveUrl = await resolveEepurl(eepurl);
  console.log(`  archive: ${archiveUrl}`);

  const html = await httpGet(archiveUrl);
  const $ = cheerio.load(html);
  const $body = extractContent($);

  // Rehost images BEFORE turndown so the markdown points at local paths.
  const imgResults = await rehostImages($, $body, slug);
  console.log(
    `  images: ${imgResults.downloaded} downloaded, ${imgResults.skipped} skipped` +
      (imgResults.failed.length
        ? `, ${imgResults.failed.length} failed`
        : "")
  );
  if (imgResults.failed.length) {
    for (const f of imgResults.failed) {
      console.warn(`    ! image fail ${f.src}: ${f.error}`);
    }
  }

  const td = makeTurndown();
  const bodyHtml = $body.html() || "";
  const md = postProcessMarkdown(td.turndown(bodyHtml));
  const summary = deriveSummary(md);
  console.log(
    `  summary: ${summary.slice(0, 160)}${summary.length > 160 ? "…" : ""}`
  );

  const frontmatter = buildFrontmatter({ date, cleanTitle: cleaned, slug });
  const fileContents = `${frontmatter}${md}\n`;

  if (dryRun) {
    console.log(`  [dry-run] would write ${fileContents.length} bytes`);
    return { ok: true, path: targetPath, dryRun: true };
  }

  const { path: writePath, suffixed, original } = await uniquePath(targetPath);
  if (suffixed) {
    console.warn(
      `  ! slug collision; writing to ${path.basename(writePath)} (was ${path.basename(original)})`
    );
  }
  await fsp.writeFile(writePath, fileContents, "utf8");
  console.log(`  ✓ wrote ${path.relative(REPO_ROOT, writePath)}`);
  return { ok: true, path: writePath };
}

// ---------- Main ----------

async function main() {
  const subcommand = process.argv[2] || "list";
  if (!["list", "run", "dry-run"].includes(subcommand)) {
    console.error("Usage: backfill.js [list|dry-run|run]");
    process.exit(1);
  }

  console.log(`Fetching archive index: ${ARCHIVE_URL}`);
  const archiveHtml = await httpGet(ARCHIVE_URL);
  const all = parseArchive(archiveHtml);
  const filtered = filterCampaigns(all);

  console.log(`\nArchive parsed: ${all.length} total campaigns visible.`);
  console.log(
    `After filter (date >= ${MIN_DATE}, exclude /Combinations/i): ${filtered.length} campaigns.\n`
  );
  console.log("Filtered campaigns (oldest → newest):");
  const ordered = [...filtered].sort((a, b) => a.date.localeCompare(b.date));
  for (const c of ordered) {
    console.log(`  ${c.date}  ${c.title}`);
  }

  if (subcommand === "list") {
    console.log(
      "\nList-only mode. Re-run with `node backfill.js dry-run` for a no-write trial, or `run` to write files."
    );
    return;
  }

  const dryRun = subcommand === "dry-run";
  console.log(
    dryRun
      ? "\nDry run: no files will be written, but images WILL be downloaded."
      : "\nWriting markdown + downloading images…"
  );

  const results = [];
  for (const campaign of ordered) {
    try {
      const r = await processCampaign(campaign, { dryRun });
      results.push({ campaign, ...r });
    } catch (err) {
      console.error(`  ✗ FAILED ${campaign.date} ${campaign.title}: ${err.message}`);
      if (process.env.DEBUG) console.error(err.stack);
      results.push({ campaign, ok: false, error: err.message });
    }
  }

  console.log("\n=== Summary ===");
  const ok = results.filter((r) => r.ok);
  const failed = results.filter((r) => !r.ok);
  console.log(`Success: ${ok.length}`);
  console.log(`Failed:  ${failed.length}`);
  if (failed.length) {
    for (const f of failed) {
      console.log(`  - ${f.campaign.date} ${f.campaign.title}: ${f.error}`);
    }
  }
}

main().catch((err) => {
  console.error(err.stack || err.message);
  process.exit(1);
});

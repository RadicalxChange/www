# Mailchimp Newsletter Backfill

One-time script to import RadicalxChange Mailchimp newsletters as static markdown
files under `src/site/updates/announcements/`.

This is **not** wired into the build. After running, the script's job is done —
future newsletters are authored directly in the repo.

## Usage

```bash
# 1. List filtered campaigns without doing anything else
node scripts/backfill-newsletters/backfill.js list

# 2. (optional) Dry run — fetch + parse + download images, but don't write markdown
node scripts/backfill-newsletters/backfill.js dry-run

# 3. Actually write the files
node scripts/backfill-newsletters/backfill.js run
```

## What it does

1. Fetches the public Mailchimp archive index at
   `https://us19.campaign-archive.com/home/?u=…&id=…`.
2. Parses each `<li class="campaign">` for date, title, and eepurl.
3. Filters to **date ≥ 2025-05-01** AND **title does not contain "Combinations"**
   (case-insensitive — Combinations is a separate publication).
4. For each surviving campaign:
   - Resolves the eepurl shortlink to the canonical campaign archive URL.
   - Fetches the campaign HTML, strips the Mailchimp preheader/footer, drops
     inline styles + presentational attributes.
   - Downloads content images to
     `src/site/_images/announcements/newsletters/<YYYY-MM-slug>/` and rewrites
     `<img src>` to local `/images/...` paths.
   - Skips tracking pixels and social-icon footer images.
   - Converts cleaned HTML to markdown via `turndown`.
   - Writes
     `src/site/updates/announcements/<YYYY-MM-DD>_<slug>.md` with the existing
     announcement frontmatter (`layout`, `date`, `slug`, `title`, `postHeader`).
5. On slug collision, appends `-2`, `-3`, … and warns rather than overwriting.

## Dependencies

`turndown` and `cheerio` are added as devDependencies of the repo so this can
run with no separate install. They can be removed once the backfill is done if
a clean tree is preferred.

# Design Direction — Refining the RadicalxChange Site

**Status:** Proposal for review. No production templates change in this PR — it is the audit
and plan only. Token, component, and template work follows in small, separate PRs once this
direction is agreed.

**Goal (restated):** The brand is right; the *execution* is noisy. Same content, same brand
(black / white / `#EDFF38` yellow, Messer + Suisse Int'l), but calm, ordered, and confident —
a clear hierarchy that guides the eye. This is refinement and tightening, **not** a re-skin.

Reference for the *feel*: [ai-now-institute](https://ainowinstitute.org/) (restraint, generous
whitespace, uniform cards, calm rhythm) and our own deck templates (oversized Messer headlines,
yellow as punctuation, lots of negative space).

---

## 1. The concrete sources of noise — what I found

Audited live via a local build (`npm run build` passes) of the homepage, Updates listing,
Projects, Tools, and a blog article, desktop + mobile, light **and** dark mode. Findings are
grouped from most to least damaging.

### 1.1 Yellow is used as wallpaper, not punctuation — the single biggest offender
The brand book is explicit: yellow is a high-contrast accent ("black lettering on yellow/white
**or** yellow/white on black"). On the site, yellow is the *background of entire screens*:

- **Homepage** — the whole page is `bg-golden-fizz` ([`src/site/index.njk:58`](src/site/index.njk)).
- **Tools** — two full-height yellow blocks ([`src/site/tools/index.njk:67,82`](src/site/tools/index.njk)).
- **The shared `introduction` macro** — `min-h-screen bg-golden-fizz`
  ([`src/site/_includes/components/introduction.njk:4`](src/site/_includes/components/introduction.njk)),
  reused by Projects, About, Vision, Community and more.

When everything is yellow, yellow can no longer *mark* anything. The pages read as loud and
flat, with no figure/ground and nowhere for the eye to rest. This is the root cause of the
"noisy" criticism.

### 1.2 No hierarchy: every section looks identical
The homepage is a single column of stacked blocks, each introduced by the **same** treatment —
bold, uppercase, same size kicker label:

> FROM THEORY TO PRACTICE:  ·  PROOF AT THE NATIONAL SCALE:  ·  OUR ROLE:
> THE MECHANISMS BEHIND THE WORK — THE PLURAL STACK:  ·  WE INVITE YOU TO JOIN US:

Five near-identical labels in a row means nothing is prioritized — the eye gets no signal about
what matters. There are no section rules, no scale contrast, no rhythm; sections are separated
only by inconsistent vertical gaps.

### 1.3 The display font is barely used where it matters most
Messer (our confident, condensed, ALL-CAPS display face — the heart of the brand) is reduced to
the logo and one pull-stat. The **homepage hero headline is set in Suisse Bold, sentence case**
([`src/site/index.njk:75`](src/site/index.njk)) — which is precisely the "incorrect" example in
the brand book (p.12). The deck's whole personality is "oversized Messer headline"; the most
important page on the site doesn't use it.

### 1.4 Link-stuffed paragraphs
Body copy is packed with inline underlined links — the homepage "theory to practice" and "join
us" blurbs are walls of underlines ([`src/site/index.njk:8,18–26`](src/site/index.njk)); 8+
links in two sentences. It reads as clutter and gives the visitor no clear next action.

### 1.5 `min-h-screen` + `content-between` strands content in dead space
The intro macro and homepage wrapper use `min-h-screen … content-between`. On tall viewports
this pushes the headline to the top and the rest to the bottom, leaving a **huge empty yellow
void** in the middle (clearly visible on Projects). Vertical spacing is a side effect of flex
distribution rather than an intentional scale.

### 1.6 A dark-mode contrast failure — black on black (accessibility bug)
`global.css` sets no background or text color; `<body>` is transparent with black text. Pages
that don't paint their own background (Updates, every blog/announcement/paper article, Search,
Wiki, Community lists) inherit the browser's **dark** canvas for visitors whose OS is in dark
mode → **black text on a near-black background, effectively invisible.** Reproduced locally by
emulating `prefers-color-scheme: dark`. This violates the brand's own ADA contrast rule on a
large share of the site.

### 1.7 Palette drift in the config
`tailwind.config.js` defines colors outside the three-color brand: `red #C53030`,
`gray #6C6C6C`, `light-gold #FAFFC3`, `light-black #010101`
([`tailwind.config.js:42–48`](tailwind.config.js)). `text-gray` is in active use (e.g. the
`.see-more-link`). Off-brand greys are a quiet but real source of muddiness.

### 1.8 Too many type sizes, inconsistently applied
13 type tokens (`size--4 … size-4` + four display sizes) with per-page one-off choices: the same
"card title" is `text-size-2` on Updates but `text-size-0/2` on Tools; section labels vary
between `text-size-0`, `font-bold uppercase`, and `text-size--1`. No documented "use this size
for that role."

### 1.9 One-off components instead of a small reusable set
Recurring patterns are re-implemented inline each time rather than shared:

- **Cards**: the Updates card (type · title · author · date · underline) is genuinely good —
  but Projects uses a `border-2` box, the homepage stat uses another bordered box, and Tools
  uses a different concept tile. Four card idioms, no shared macro.
- **Section header + "see all"**: no shared component; each listing re-rolls its own heading,
  rule, and "Load more / Find out more" affordance with different wording and styles.
- **Projects listing** is a hand-rolled `<button class="collapsible">` accordion wrapped in
  invalid markup — `<table><tbody><ol><div>` — with an `<h1>` per item
  ([`src/site/projects/index.njk:84–139`](src/site/projects/index.njk)). Multiple `<h1>`s per
  page is a semantics/a11y problem; the table wrapper is non-semantic.

### 1.10 Heading semantics
On the homepage the only `<h1>` is the logo; the hero statement is an `<h2>`. Listing items use
`<h1>`/`<h2>` inconsistently. Heading level should track document structure, not visual size.

---

## 2. Proposed direction

Five disciplines, each cashed out as tokens/components in later PRs.

### 2.1 Reclaim yellow as punctuation
Default page surface is **white**; primary ink is **black**. Yellow returns to being an accent:
highlight marquees, underlines, the icon circles, number circles, a single key callout per page,
and *occasionally* one deliberate full-bleed yellow "moment" (e.g. a hero or a CTA band) — never
the substrate for whole multi-screen pages. Black sections become the strong counter-note. Net
effect: the same three colors, but with figure/ground restored so the yellow can actually *do*
something.

### 2.2 A tightened type hierarchy (one weight of Messer, few sizes of Suisse)
Only one Messer weight is licensed for web (`MesserV2.0-Condensed`, 400) — so display hierarchy
comes from **size, not weight**. Proposed roles (names illustrative; finalized in the tokens PR):

| Role | Font | Notes |
|---|---|---|
| Display / page title | Messer 400, **ALL CAPS** | `size-lg/display` & up; one per page |
| Hero statement | Messer 400 caps (large) **or** Suisse Bold | pick one convention site-wide; today it's ad-hoc |
| Section header | Suisse Bold | with a hairline rule beneath (see 2.3) |
| Eyebrow / kicker | Suisse Bold uppercase, `size--1`, letter-spaced | small and quiet — a label, not a headline |
| Body | Suisse **Book** | brand body face; today body resolves to Suisse *Regular* (drift to confirm) |
| Meta (author/date/tag) | Suisse Book/Regular, `size--1` | one consistent size |

Goal: collapse from ~13 ad-hoc sizes to a documented set of ~6 roles. No visual change to the
type *scale* mechanism (utopia fluid steps stay) — just disciplined assignment.

### 2.3 A small reusable component library
Build once, in `_includes/components`, and reuse:

1. **Section header** — eyebrow + Suisse Bold title + hairline rule + optional right-aligned
   "See all →". One macro, one rhythm, used by every listing and homepage section.
2. **Content card** — promote the Updates card to the canonical card: `tag · title · author ·
   date`, uniform height, hairline bottom rule, whole-card link. Reused by Updates, Projects,
   related-content, etc.
3. **Buttons** — formalize the existing `action-button` as **primary** (pill, arrow) and add a
   restrained **secondary** (text + underline). Retire ad-hoc "Find out more"/"Load more" styling.
4. **Motifs** (small, documented utilities, not new colors): underline, icon-circle,
   highlight-mark, number-circle, stat-callout. These *are* where yellow lives.

### 2.4 Spacing & grid discipline
Adopt a small documented vertical-rhythm scale (e.g. section gap / block gap / element gap) and
apply it deliberately instead of `min-h-screen + content-between`. Align every block to the
existing 12/16-col grid (the grid system is good and stays). Replace stranded dead space with
intentional, consistent section spacing.

### 2.5 Fix the foundations
- **One line of CSS** closes the dark-mode bug: set an explicit `background` and `color` on
  `body` (and/or `color-scheme: light`) so no page can fall through to a dark canvas. Highest
  value-to-effort fix on the list.
- Remove off-brand palette entries (or quarantine `red` to genuine error states only); drop
  `text-gray` in favor of black/opacity.
- Fix heading semantics (one `<h1>` per page; levels follow structure).

---

## 3. Before / after — homepage

**Before (today):** full-yellow page · logo is the only `<h1>` · hero in Suisse Bold sentence
case · five identical uppercase kicker labels down one column · two link-stuffed paragraphs ·
a floating stat box · large uneven yellow gaps · CTA buried at the bottom.

**After (proposed restructure — same content, same copy):**

```
┌───────────────────────────────────────────────┐
│ White surface. Logo top-left (wordmark).        │
│                                                 │
│ HERO — Messer, ALL CAPS, oversized  (h1)        │
│ "PARTICIPATORY GOVERNANCE FOR THE AGE OF AI"    │
│ Suisse Book standfirst (1 line, ≤1 link):       │
│ the Singularity-vs-Plurality framing.           │
│ [ Primary CTA ]   [ secondary link ]            │
├───────────────────────────────────────────────┤
│ ── From theory to practice ──────── (section    │
│    header: eyebrow + rule)                       │
│ Short body. Inline links thinned to 2–3; the    │
│ city proof-points become a quiet caption row.    │
├───────────────────────────────────────────────┤
│ ▌YELLOW MOMENT — the "11 seats" stat callout,    │
│   the page's single deliberate use of yellow.    │
├───────────────────────────────────────────────┤
│ ── The Plural Stack ─────────── See all →        │
│ 4 uniform concept cards (existing animations).   │
├───────────────────────────────────────────────┤
│ ── Join us ──────────────────────                │
│ The five audiences as a tidy list/cards, each    │
│ with ONE clear destination, not a link thicket.  │
└───────────────────────────────────────────────┘
   Footer (unchanged structurally; tightened).
```

Net: hierarchy goes from flat to three clear levels (hero → sections → cards); yellow appears
once, with intent; the visitor always has an obvious next step.

## 4. Before / after — a content-listing page (Projects)

**Before:** full-screen yellow intro with a giant mid-page void · `border-2` pillar boxes ·
a hand-rolled collapsible accordion inside `<table><tbody><ol>` with an `<h1>` per project ·
separate, differently-styled Proposals list · "Find out more about this project" links.

**After:** white surface · Messer page title (no stranded space — intentional section spacing) ·
the four Strategic Pillars as four uniform **content cards** · Projects and Proposals each under
a shared **section header** (eyebrow + rule + "See all →"), rendered as the **same card grid**
as Updates (tag · title · short description), linking to detail pages. One card idiom, valid
semantics (`<ul><li>`, headings by level), consistent "see all" rhythm. The Updates listing
already works — this brings Projects (and Tools/Events) up to that same bar.

---

## 5. Suggested PR sequence (small, reviewable)

1. **This document.**
2. **Foundations + tokens** — dark-mode/background fix, palette cleanup, documented spacing scale
   and type-role assignments (README updated). Low visual risk, high value.
3. **Reusable components** — section header, content card, button pair, motif utilities.
4. **Global chrome** — nav, footer, base layout/grid polish.
5. **Homepage restructure** (Section 3).
6. **Content templates** — Updates, Projects, Tools, Events, article (Section 4).
7. **Polish** — a11y pass, responsive QA, image/perf cleanup.

Each PR: focused scope, passing `npm run build`, before/after screenshots (desktop + mobile),
and preserving all content, routes, redirects, i18n (`portuguese/`), Fathom, and the newsletter.

---

## 6. Open questions for you

1. **Hero convention** — oversized **Messer ALL CAPS** for the homepage hero (max brand
   confidence), or keep a Suisse Bold sentence-case statement and lead with a Messer page title
   above it? (I lean Messer caps.)
2. **Yellow moments** — comfortable with white as the default surface and yellow reserved for
   accents + *one* deliberate full-bleed moment per page? Any pages that should stay fully yellow
   on purpose (e.g. a landing/donate splash)?
3. **Scope of round one** — should PR #2 include the palette cleanup (removing `gray`/`red`), or
   keep that separate to de-risk review?

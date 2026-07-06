# /geneva-reflections — "Can AI See Me?" results page

Interactive results page for **"Can AI See Me? Human Dignity, Identity, and
Moral Agency in Global AI Governance"** (official virtual side event of the
first UN Global Dialogue on AI Governance, 6 July 2026): the Pol.is
deliberation results and the pipeline to the Geneva Reflection Principles.

This file is excluded from the build via `.eleventyignore`.

## How the page is wired

```
data/                          <- the two Pol.is export CSVs (drop-in replaceable;
                                  gitignored: the vote matrix is participant-level
                                  data and must not be published in this public repo)
scripts/analyze.py             <- computes site-data/results.json from the CSVs
site-data/results.json         <- ALL numbers on the page come from here
site-data/content.json         <- editorial copy; refers to statements by id only
site-data/qv-results.json      <- quadratic-vote results (stub until the vote closes)
src/site/_data/geneva.js       <- Eleventy loader exposing the three JSONs as `geneva`
src/site/geneva-reflections/index.njk        <- the page (renders every number server-side)
src/site/_includes/css/geneva-reflections.css <- page styles (imported by styles.css)
src/site/js/geneva-reflections.js            <- progressive enhancement (table sort/filter)
```

The page is fully readable with JavaScript disabled: every chart is
server-rendered HTML/CSS with visible counts and ARIA labels, expandable
sections are native `<details>`, and the statement explorer is a plain table.
The JS file only adds sorting and preset filters to the table.

## Refreshing the data (final Pol.is export)

1. Replace the two CSVs in `data/` (keep the `*-participant-votes.csv` /
   `*-comment-groups.csv` suffixes; the script globs for them and, if several
   match, uses the lexicographically last — delete the old snapshot).
2. `python3 scripts/analyze.py`
3. `npm run build` (or `npm run serve` to check locally).

Every number on the page — stats bar, tallies, bars, rankings, the explorer
table — re-renders from the new `results.json`. Editorial copy in
`content.json` references statements by id, so it needs no edits unless the
final data changes a *story* (e.g. a within-group split disappearing).

Analysis rules live at the top of `scripts/analyze.py`: junk statements
(22, 72, 75) excluded from rankings and the table; statements 0–19 are
facilitator seeds; group ids map 0→A, 1→B, 2→C, 3→D; Group D (n=1) and the
two unclustered participants count in totals but not group metrics;
consensus = minimum agree rate across A/B/C (≥4 votes per group);
divisiveness = spread of net agreement across A/B/C; per-group tallies on
fewer than 5 votes get the ◔ "thin data" glyph.

**Known gap in the current snapshot:** statements 79–82 have votes in the
matrix but no text (the comment-groups export is an older snapshot); they
render as "text pending the final data export" and will be fixed
automatically by the final export.

## Flipping the quadratic-vote section

Edit `site-data/qv-results.json`:

```json
{
  "status": "final",          // was "pending"
  "voters": <n>,
  "credits_per_voter": <n>,
  "principles": [ { "id": "P1", "votes": <n>, "credits": <n> }, ... ]
}
```

then rebuild. While `status` is `"pending"` the section shows "Voting opens
soon / in progress"; when `"final"` it renders a credits-per-principle bar
chart. Principle ids must match `content.json` → `pipeline.principles`.

## TODO placeholders

1. **Panelist quotes** — two quotes in `content.json` → `panelist_quotes`
   have `"pending_permission": true` and do **not** render. Flip to `false`
   only once the speaker has approved publication.
2. **OG image** — the page uses the site's default logo card; a bespoke
   OG image from the hero question was skipped.

## Ethics / data-integrity rules baked in

- No participant identifiers anywhere: `results.json` and the page contain
  only aggregate tallies and verbatim anonymous statement text.
- Statement text is preserved exactly (typos included); only trailing
  whitespace is trimmed.
- Small-n honesty: thin-data glyphs, visible raw counts everywhere, and the
  Group D / unclustered disclosure are content, not disclaimers — keep them.
  (An "Honest limits" section was removed from the page on request; its text
  is preserved unrendered in `content.json` → `honest_limits` in case it
  comes back.)
- This page carries **no analytics** (it overrides the base layout's
  analytics script) — a condition of publishing deliberation results.

## Page-specific base-layout overrides

`index.njk` overrides `_base.njk` blocks: `metaTags` (custom OG),
`fontPreloads` (only Messer + Suisse regular/bold), `mathStyles` (no KaTeX),
`headScripts` (no analytics, body-scroll-lock deferred). Lighthouse mobile
(local, gzip): performance 95, accessibility 100.

## Deploying

Nothing special: the page builds with the normal site build (`npm run
build`) and ships as static HTML at `/geneva-reflections/`. If it must be
published before the branch merges, the built `dist/geneva-reflections/`
+ `dist/css/styles.css` + `dist/js/geneva-reflections.js` are the only
artifacts it needs beyond the shared site assets.

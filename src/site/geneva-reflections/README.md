# /geneva-reflections — "Can AI See Me?" results page

> **Draft companion page:** `/geneva-reflections/story/` — see
> "The story page" section at the bottom of this file.

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
src/site/geneva-reflections/index.njk        <- the main page (tiered; every number server-side)
src/site/geneva-reflections/data/index.njk   <- /geneva-reflections/data/: full statement table
src/site/files/geneva-reflections-statements.csv <- statement-level CSV (written by analyze.py)
src/site/_includes/css/geneva-reflections.css <- page styles (imported by styles.css)
src/site/js/geneva-reflections.js            <- progressive enhancement (video, table sort/filter)
```

The main page is tiered: Tier 1 reads top-to-bottom with no interaction
(consensus themes with one exemplar card each, the group portraits, the [9]
divide, the bridging centerpiece, the pipeline); Tier 2 is native `<details>`
expanders (supporting statements, group signature cards, divide detail);
Tier 3 is the full table on /geneva-reflections/data/ plus the CSV download.

**Render-once rule:** each statement gets exactly one card on the main page,
assigned in `content.json` (theme `exemplar`/`supporting`, group `cards`,
`split`, `surprise`). Everything else must be a reference — `geneva.js`
builds the `carded` map and **throws at build time if a statement is
assigned two cards**. Reference links resolve to the card anchor (`#s<id>`)
or to the statement's row on the data page. The headline figure is always
"% agree (x/n)" and the only visual is the stacked agree/pass/disagree bar;
full tallies live in tooltips and aria-labels.

The published CSV is the **statement-level aggregate** written by
analyze.py. The raw participant-votes export stays out of the public repo
(participant-level rows; see the gitignore note).

The page is fully readable with JavaScript disabled: every chart is
server-rendered HTML/CSS with visible counts and ARIA labels, expandable
sections are native `<details>`, and the statement explorer is a plain table.
The JS file only adds sorting and preset filters to the table.

## Refreshing the data (final Pol.is export)

1. Place the new CSVs in `data/` and update the `SNAPSHOT` prefix pinned in
   `scripts/analyze.py` (it is deliberately pinned so newer exports in
   `data/` cannot silently change this published page).
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

## The story page (/geneva-reflections/story/) — draft for review

A story-first companion to the data report, built for readers with zero
Pol.is literacy. Progressive disclosure: narrative claim → evidence card
(verbatim statement + tallies) → downloadable raw data. It is `noindex`,
carries a dismissible "draft for review" banner (fill in the
`FEEDBACK_URL` constant at the top of
`src/site/geneva-reflections/story/index.njk`), and must be shared only as
a draft until reviewed.

### Which export governs what

| Page | Export | Pipeline |
|---|---|---|
| `/geneva-reflections/` + `/data/` | **09:00** (2,201 votes) | `scripts/analyze.py` (pinned to the 09:00 files) → `site-data/results.json` |
| `/geneva-reflections/story/` | **15:05** (2,307 votes) | `scripts/story_compute.py` → `site-data/computed.json` |

Never mix them: the published report reflects its snapshot and its tallies
must not silently change. Small tally differences between the two pages
are expected and disclosed on the story page. Both exports' CSVs and
`computed.json` are downloadable from `/files/geneva-reflections/`
(copied there by `story_compute.py`).

### The story page's data rules

- Every number renders from `computed.json`; nothing is hand-typed.
- Blocs: 15:05 group 0 = A (13, includes the facilitator seed account,
  disclosed), group 2 = C (22). Group 1 is an n=2 outlier pair — never
  characterized, folded into "other" in visuals. Cross-bloc claims compare
  A and C only.
- Participant 0 (facilitator; 20 votes, all passes) is excluded from
  participant-level visuals, included in bloc tallies.
- Noise statements 22, 72, 75 excluded everywhere; 83 (2 votes) excluded
  from ranked displays.
- **Axis bundles** (published in `computed.json → method`): remedy axis X
  (+ authorship / − boundaries) = mean signed vote over
  {0+, 35+, 76+, 77+, 15+, 3+, 41+, 9−}; intimacy axis Y (+ comfortable /
  − averse) over {4+, 12+, 1+, 23−, 30−, 55−, 33−}; pass = 0; ≥3 votes in
  the bundle required, else unscored. The axes are analyst-curated, not
  algorithm-discovered — the page's caveat box says so and may not be
  softened or removed.
- Honesty rules: verbatim statement text only (trailing whitespace
  trimmed; spelling preserved); raw counts before percentages; thin-data
  marker under 5 bloc votes; no demographic claims; "consensus" only above
  75% agreement in both blocs; the limits section stays.
- Computed values that differ from the drafting brief (trusted per the
  compute-first rule): split-half reliabilities 0.58 / 0.82 (brief
  expected 0.47 / 0.58); voters 38 (brief "~37"); builders cohort on [15]
  5/0/1 and on [12] 2–3 vs rest-of-C 3–11 (brief 4/0/0 and 3/1/1 vs
  2/10/1).

### Promoting or removing the story page after review

- **Promote:** delete the review banner block (`st-banner`) and the
  `robots noindex` meta from `story/index.njk`; set the real
  `FEEDBACK_URL` or remove the link; optionally cross-link from the main
  page (it deliberately has no link to the draft).
- **Remove:** delete `src/site/geneva-reflections/story/`,
  `src/site/_data/genevaStory.js`, `src/site/js/geneva-story.js`,
  `src/site/_includes/css/geneva-story.css` (+ its import in
  `styles.css`), `scripts/story_compute.py`, `site-data/computed.json`,
  and `src/site/files/geneva-reflections/`.

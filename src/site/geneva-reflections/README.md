# /geneva-reflections — "Can AI See Me?" results page

> **Candidate replacement under comparison:** `/geneva-reflections/story` — see
> "The story candidate" section at the bottom of this file.

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

## The story candidate (/geneva-reflections/story) — under comparison

A candidate **replacement** for the main page, forked from its layout
shell and carrying everything it offers (masthead + UN banner, recording,
stats, full statement table, downloads, RWG sign-up) — restructured as a
story in five acts with every claim one click from its evidence. It is
`noindex`, excluded from the sitemap (`eleventyExcludeFromCollections`),
and has **no draft banner** so the visual comparison is undistorted.
The main page is frozen as the comparison baseline: no link to the
candidate, no data corrections there.

### Which export governs what

| Page | Export | Pipeline |
|---|---|---|
| `/geneva-reflections/` + `/data/` (frozen baseline) | **09:00** (2,201 votes) | `scripts/analyze.py` (pinned) → `site-data/results.json` |
| `/geneva-reflections/story` (candidate) | **15:05** (2,307 votes; single source of truth for tallies) | `scripts/story_compute.py` → `site-data/computed.json` |

The 09:00 export is additionally read by `story_compute.py` for exactly one
computation: the 09:00→15:05 group-assignment crosswalk behind the Act 2
dissolving-groups diagram. Both exports' CSVs + `computed.json` download
from `/files/geneva-reflections/`.

### Honesty rules baked into the candidate

Verbatim statement text only (whitespace runs collapse in HTML rendering;
the CSVs carry the exact text); raw counts with every claim, percentages
secondary; ◔ thin-data marker under 5 bloc votes; passes always rendered
visually distinct from disagreement; no demographic claims; "consensus"
only above 75% agreement in both blocs; bloc A is never "anti-AI" /
"skeptics" / "resistant"; the 2-member leftover group is never a faction;
the clustering-instability note and the limits section may not be cut.
The closeness cohort (disagreed [23] or agreed [4]; n=10: 7 in C, 1 in A,
2 in the pair) is defined by votes, not clustering, so it survives any
future reclustering.

### Stale numbers on the frozen main page (09:00 → 15:05)

Headline: "38 participants" → 38 voters (39 matrix rows incl. the
facilitator seed account); "83 statements" → 84; "3 opinion groups found"
→ 2 blocs + a 2-member statistical leftover. Per-statement totals that
changed (agree/disagree/pass), on `/geneva-reflections/` and
`/geneva-reflections/data/`:

| Statement | 09:00 | 15:05 |
|---|---|---|
| [0] | 14/3/17 | 14/3/18 |
| [1] | 9/13/12 | 9/13/13 |
| [2] | 31/0/1 | 32/0/1 |
| [3] | 23/3/9 | 24/3/9 |
| [4] | 6/20/9 | 6/20/10 |
| [5] | 21/6/4 | 22/6/5 |
| [6] | 28/2/4 | 29/2/4 |
| [7] | 27/0/8 | 28/0/8 |
| [8] | 23/1/8 | 23/1/9 |
| [9] | 9/15/11 | 10/15/11 |
| [10] | 27/2/5 | 28/2/5 |
| [11] | 18/5/9 | 18/5/10 |
| [12] | 8/18/7 | 8/18/8 |
| [13] | 25/2/7 | 26/2/7 |
| [14] | 27/2/5 | 28/2/5 |
| [15] | 23/1/10 | 24/1/10 |
| [16] | 29/2/3 | 30/2/3 |
| [17] | 27/1/5 | 27/1/6 |
| [18] | 23/1/10 | 24/1/10 |
| [19] | 25/2/7 | 26/2/8 |
| [20] | 16/4/12 | 17/4/12 |
| [21] | 28/0/3 | 29/0/3 |
| [23] | 17/7/7 | 17/8/8 |
| [24] | 12/2/17 | 13/2/17 |
| [25] | 22/1/6 | 23/1/7 |
| [26] | 24/2/3 | 25/2/3 |
| [27] | 23/3/5 | 23/3/6 |
| [28] | 14/2/10 | 16/2/10 |
| [29] | 18/2/9 | 18/2/10 |
| [30] | 17/4/5 | 17/5/6 |
| [31] | 16/1/11 | 16/1/12 |
| [32] | 16/1/10 | 16/1/11 |
| [33] | 6/10/12 | 7/10/12 |
| [34] | 10/2/12 | 10/3/12 |
| [35] | 15/3/6 | 15/3/7 |
| [36] | 18/3/4 | 18/3/5 |
| [37] | 18/1/7 | 19/1/7 |
| [38] | 19/0/6 | 20/0/6 |
| [39] | 13/0/14 | 14/0/14 |
| [40] | 18/1/4 | 19/1/4 |
| [41] | 18/3/5 | 19/3/5 |
| [42] | 20/0/4 | 22/0/4 |
| [43] | 10/5/10 | 10/5/11 |
| [44] | 3/12/8 | 3/13/8 |
| [45] | 17/3/4 | 18/3/5 |
| [46] | 17/3/3 | 18/3/4 |
| [47] | 21/0/3 | 22/0/3 |
| [48] | 18/0/5 | 19/0/5 |
| [49] | 20/2/4 | 20/2/5 |
| [50] | 13/1/8 | 13/1/9 |
| [51] | 21/0/6 | 22/0/6 |
| [52] | 19/2/3 | 20/2/3 |
| [53] | 21/1/1 | 21/1/2 |
| [54] | 9/5/11 | 10/5/11 |
| [55] | 10/4/10 | 11/4/11 |
| [56] | 15/3/6 | 15/3/7 |
| [57] | 15/0/10 | 16/0/10 |
| [58] | 17/2/3 | 18/2/3 |
| [59] | 14/2/6 | 15/2/6 |
| [60] | 15/2/7 | 15/2/8 |
| [61] | 12/4/9 | 13/4/9 |
| [62] | 21/0/3 | 22/0/3 |
| [63] | 16/0/9 | 17/0/9 |
| [64] | 10/2/11 | 11/2/12 |
| [65] | 19/1/4 | 20/1/4 |
| [66] | 11/3/9 | 11/3/10 |
| [67] | 20/1/1 | 21/1/2 |
| [68] | 21/0/1 | 23/0/1 |
| [69] | 15/2/7 | 16/3/7 |
| [70] | 16/0/7 | 16/1/8 |
| [71] | 16/0/7 | 16/0/8 |
| [72] | 2/1/22 | 2/1/23 |
| [73] | 12/2/10 | 13/2/10 |
| [74] | 18/3/3 | 20/3/3 |
| [75] | 2/2/17 | 2/2/19 |
| [76] | 13/1/9 | 13/1/10 |
| [77] | 12/3/10 | 12/3/11 |
| [78] | 6/2/14 | 6/3/15 |
| [79] | 5/4/11 | 5/6/11 |
| [80] | 11/0/6 | 11/0/8 |
| [81] | 1/5/5 | 1/5/7 |
| [82] | 5/1/1 | 6/1/2 |

### Promotion (one step, if the candidate wins)

1. `git mv src/site/geneva-reflections/story/index.njk src/site/geneva-reflections/index.njk`
   (overwriting the old main page — a route swap, never a content merge).
2. In the moved file: delete the `robots noindex` meta line and the
   `eleventyExcludeFromCollections: true` front-matter line.
3. Retire `/geneva-reflections/data/` or leave it (it still serves the
   09:00 snapshot; the candidate's table supersedes it) and add a redirect
   from `/geneva-reflections/story` in `src/site/_redirects`.
4. Rebuild. The old page remains recoverable from git history.

### Discard (one step, if the baseline wins)

`git revert` the candidate commits (or restore the prior
`story/index.njk` from git history at the merge before this branch), and
delete `scripts/story_compute.py`, `site-data/computed.json`,
`src/site/_data/genevaStory.js`, `src/site/_includes/css/geneva-story.css`
(+ its import), and `src/site/files/geneva-reflections/`. The main page
is untouched either way.


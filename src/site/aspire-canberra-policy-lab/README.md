# /aspire-canberra-policy-lab — ASPIRE National Forum Policy Lab results

Results page for the **Policy Lab at the ASPIRE National Forum** (Museum of
Australian Democracy at Old Parliament House, Canberra, Monday 10 August
2026): the Pol.is deliberation and the quadratic-vote priorities, convened by
ASPIRE and facilitated by RadicalxChange.

This page is a sibling of `/geneva-reflections` and reuses its machinery:
the `gr-*` component styles (the page's `<main>` carries `class="geneva
aspire-cb"`), the statement-card macros, the data-page table and its
sort/filter JS (`src/site/js/geneva-reflections.js`), and the same
"every number is computed, nothing hand-typed" pipeline. Read
`src/site/geneva-reflections/README.md` first; this file only records what
differs.

This file is excluded from the build via `.eleventyignore`.

## How the page is wired

```
data/aspire-canberra/            <- Pol.is *report* exports (gitignored: the
                                    vote matrix is participant-level data and
                                    must not be published in this repo)
scripts/aspire_analyze.py        <- computes site-data/aspire-results.json
site-data/aspire-results.json    <- ALL Pol.is numbers on the page
site-data/aspire-content.json    <- editorial copy; refers to statements by id
site-data/aspire-qv-results.json <- quadratic-vote AGGREGATES (see below)
src/site/_data/aspire.js         <- Eleventy loader exposing the three JSONs
src/site/aspire-canberra-policy-lab/index.njk      <- the main page
src/site/aspire-canberra-policy-lab/data/index.njk <- full statement table
src/site/files/aspire-canberra-statements.csv      <- statement-level CSV
                                    (written by aspire_analyze.py)
src/site/_includes/css/aspire-canberra.css <- additions over geneva-reflections.css
src/site/_images/aspire-canberra/          <- event photos + venue clip
                                    (EXIF/GPS-stripped web versions only —
                                    never the camera originals)
```

## Where the data comes from

- **Pol.is:** report `r2fdeyrm3xmhrn2e8eekt` CSV export endpoints
  (`https://pol.is/api/v3/reportExport/r2fdeyrm3xmhrn2e8eekt/<name>.csv`,
  names: `summary`, `comments`, `votes`, `participant-votes`). This is a
  different format from the admin exports Geneva uses: statement text lives
  in `comments.csv` and the cluster assignment (`group-id`) comes with the
  vote matrix. The matrix is authoritative for every tally; `comments.csv`
  supplies text, authorship (seed vs live) and moderation status only —
  its own agree/disagree columns are a separate snapshot and differ by ±1
  on a few statements.
- **Quadratic vote:** the event lives on quadraticvote.radicalxchange.org.
  Its details API returns voter-level rows (names) behind the event's
  admin secret; **neither the secret URL nor any voter-level data may enter
  this repo or the page.** `site-data/aspire-qv-results.json` was distilled
  from that response by hand at build time and holds aggregate per-option
  totals only: net votes, credits, backers/against counts, plus voters and
  credits-per-voter. Ask the RadicalxChange QV admin for the event link if
  the vote ever needs re-aggregating.

## Analysis rules (deltas from Geneva)

Rules live at the top of `scripts/aspire_analyze.py`:

- Three clustered groups. Pol.is group ids map **1 → A (31), 0 → B (21),
  2 → C (20)**, one participant unclustered. The letters follow the
  facilitators' read-out; the mapping was verified by matching each
  cluster's defining statements against the read-out (e.g. the
  evidence-split cluster is B, the government-should-pay cluster is C),
  because Pol.is re-clusters as votes arrive and the read-out deck was
  built from an earlier snapshot (A 28 / B 14 / C 30 of 72 voters; the
  final export re-clusters to 31/21/20 of 73). Per-group numbers on the
  page therefore differ from the deck's screenshots.
- Statements 0–48 are facilitator seeds (authored by participant 0, which
  cast only passes and sits inside group B's tallies — disclosed on page).
- Junk ids 49/50/51 ("Testing"/"Testint"/"Test") are excluded from
  rankings and the table; their votes still count in the total.
- Eight moderator-rejected statements (mostly duplicates; 1–2 votes each)
  are excluded from rankings and the table, kept flagged in the CSV.
- Consensus = minimum agree rate across A/B/C (≥4 votes per group);
  divisiveness = spread of net agreement; thin-data glyph below 5 votes.

## Refreshing the data

1. Re-download the four report-export CSVs into `data/aspire-canberra/`.
2. `python3 scripts/aspire_analyze.py`
3. `npm run build` (or `npm run serve`).

## Ethics / data-integrity rules baked in

Same as Geneva: no participant identifiers anywhere; statement text
verbatim (trailing whitespace trimmed); aggregate tallies only; thin-data
honesty; no analytics on this page (it overrides the base layout's head
blocks). The published CSV is statement-level aggregates only — the raw
participant-votes matrix stays out of the repo.

## Known open items (as of the draft PR)

- Group names ("Momentum Makers", "Craft Guardians", "Long-Game
  Reformers") are **proposals** pending sign-off, as is the TL;DR text.
- The closing CTA is a plain get-in-touch line (mailto
  info@radicalxchange.org) inviting readers to run a similar
  deliberation with RadicalxChange's support — no sign-up form, no
  Mailchimp.
- OG image is the room photo; a bespoke card was not designed.

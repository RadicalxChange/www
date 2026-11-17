# /warringah-migration — Warringah community conversation on migration

Standalone single-page microsite presenting the **preliminary** results of the
Warringah community conversation on migration, run by the RadicalxChange
Foundation with Zali Steggall OAM MP, Federal Member for Warringah (online
conversation open since 30 October 2026; priority vote at a community session
on 11 November 2026).

Like `/curtin-migration`, this page shares **nothing** with the rest of the
site: it does not extend `layouts/_base.njk`, and carries its own `<style>`,
inline `<script>`, header and footer, framed by the shared RxC breadcrumb and
footer bars (`.rxc-shell`). `index.njk` is raw HTML wrapped in `{% raw %}`;
the only Eleventy features used are the front matter and the site-wide
posthtml transform. Fonts come from Google Fonts: Poppins for headings (a free
stand-in for the MP's Century Gothic) and Inter for text. The colours follow
the MP's site: cyan `#00b4cd` (large fills only, always behind navy type) and
navy `#13384b`. The two groups use gold and violet, of equal weight and
neither of them the MP's colours. The page has light and dark modes.

Its link-preview image is `src/site/assets/warringah-migration-og.png`
(1200×630, referenced by the `og:image` and `twitter:image` tags). It was
rendered from the page's own fonts and copy: the boxed headline, "452 people
took part", and two of the hero quotes. If the headline, the turnout or those
quotes change, regenerate it.

## While the results are preliminary

- The page carries `<meta name="robots" content="noindex">` and
  `eleventyExcludeFromCollections: true`, which keeps it out of the sitemap.
  Remove both when the results are final.
- It is not linked from /projects, the home page or anywhere else.
- The status line reads "Preliminary results, data to 6am AEDT, 18 November
  2026". Update it with each new export.
- The credit line, the Acknowledgement of Country (a placeholder for now) and
  the "What happens next" line wait for the office's confirmation.

## What is counted

- **Statements:** only the 155 statements people could vote on: 36 starter
  statements, 46 added by the moderators during the conversation, and 73
  written by residents. 331 others were removed by the moderators before
  anyone else voted on them; they are not counted or shown.
- **People:** the 452 people who voted on at least one of those statements,
  casting 23,944 votes. Polis's own count (468) also includes the moderator
  account and 15 accounts whose only votes were on their own removed
  statements.
- **Groups:** Polis's own groups, without the moderator account: Group 1
  "Faster, fairer visas" (246 people) and Group 2 "Fewer people, more slowly"
  (122). 84 people voted on too few statements to be placed.
- **Percentages:** the share of a group who agreed, out of those in the group
  who voted on the statement (passes count as votes). Where fewer than 20 in a
  group voted, the page shows how many.
- **Shared statements:** at least 70% agreement in both groups, with at least
  10 voters in each: 34 statements, all listed in the fold under the pairs.
- **Statements where the groups took opposite sides:** one group's majority
  agreed and the other's majority disagreed, with at least 8 voters in each
  group: 17 statements. The hover cards count each person's votes on these.
- **Group cards:** each shows three of the eight statements that most set the
  group apart (Polis's representativeness measure), chosen from those about
  how the visa system should work. The page's notes say so.
- **Priority vote:** the same rule as the Curtin page. Ballots that used fewer
  than 10 credits are set aside, names are matched ignoring capitals and
  spacing, and the fuller ballot is kept where someone voted twice: 53 voters.
  Net votes are votes for minus votes against. The chart shared after the
  session shows 56 voters because it keeps two ballots of 6 and 7 credits and
  matches names exactly; the order of all 13 changes is the same.

## The map

The map is one row along the main divide: the first principal component of
the vote matrix, computed the way Polis does (centred on each statement's
mean, missing votes left at the mean, and each person's projection scaled up
by how few statements they voted on). Recomputed groups agree with Polis's
for 355 of 368 people. The dots are drawn as rounded heaps: taking people from
left to right, each dot drops near its true place on the line and settles in
the lowest free spot up to three dot widths to its left or 1.25 to its right,
paying for every step it moves sideways (a spot's cost is its height plus 0.9
times its sideways shift). So crowded stretches pile up like sand rather than
standing in columns. Rolling only a little to the right stops early dots
running into empty space and later ones walling up, against the divider most
of all. Maps under 640px wide use smaller dots and let them roll up to six dot
widths to the left at 0.6, so phone piles are less steep. This was chosen over
a dot histogram, a swarm and two packed bubbles (17 November 2026).

## A closer look inside Group 2

The map's labels have two levels, so its colours and names tell one story.
Across the top, each group's name, colour dot and count sit over its own
stretch; Group 2's name sits over a bracket spanning the group. Under that
bracket, a dashed line marks where Group 2's far end begins, and the two parts
are named either side of it: "Fewer, but flexible" (98 people) and "Fewer,
with firm limits" (24). The key under the map follows the same two levels:
Group 1's one-line description (ending "There's no clear split inside this
group"), then Group 2's name and count with its two parts set in beneath it,
each with its own line. They are a
closer look inside Group 2, not new groups: the dots keep their group colours,
and no dot rolls across the line. On maps under 640px wide the group names
shorten to "Group 1" and "Group 2", the two parts become lettered badges (A
and B, so they can't be mistaken for group numbers), and the key shows the
letters.

The far end is found the way the Teals stance analysis looks for stances:
going along Group 2 from its far end, the cut is placed where the most
statements flip (at least 65% agreeing on one side and at most 35% on the
other, at least 10 voters a side, and z of at least 3.3). That gives 24 people
and seven statements, with at least 21 voters a side; both parts voted on a
median of 53 statements, and shuffled orders never produced more than one such
statement. The line sits halfway between the last of the 98 and the first of
the 24 (`DATA.cut`). Inside Group 1 the same search finds only two statements,
too few for a closer look. A test for unlikely allies across the divide (the
ten statements both groups split on at similar rates, paired, with a
Mantel-Haenszel odds ratio across five strata of people's overall agreement)
found no pair that held up. The page's notes give every figure, and the
checker tests each claim in the two descriptions.

Hover-card examples follow the rule used on every Teals results page. Each
person's card shows up to two of their votes: one where they voted like
Group 1 and one where they voted like Group 2. The candidates are the 17
statements where the groups took opposite sides, limited to those the person
voted on the same way as that group. The card prefers, in order: a statement
the person agreed with over one they disagreed with; the one that group most
widely shared (the share of the group on its side, as a 95% Wilson lower bound,
so small samples count for less); the one more of that group voted on; then
the lower statement number. Nothing is chosen or removed by hand. The page's
notes say this in plain words.

`DATA` (the map rows and hover texts, in the `page-data` script tag) and the
`SHARED` list are generated from the export; everything else is edited in the
page directly. The scripts and the frozen export live outside the repository.
Every figure, quote and hover-card value is checked against the export before
each push.

## Layout

The page is built on the Curtin template, including its rem-based width
(`.wrap{max-width:77.5rem}`) and the sticker placement beside the first quote
card (see `src/site/curtin-migration/README.md`, "Layout"). Two things differ:

- The headline is three set lines ("Warringah wants" / "a long-term plan" /
  "for migration"), the middle one boxed in navy like the stepped headlines on
  the MP's site. The longest line is 8.76em wide in Poppins Bold, so the
  headline is sized from its column (`min(10.6cqi, 9vh, 4.6rem)`), and never
  wraps.
- Short windows (under 46em tall, which is 736px at the standard text size
  and 920px at a 20px default) get a smaller headline (`8vh`) and lede, so the
  buttons stay on the first screen. Checked at 16px and 20px text from 901 to
  1728px wide and 650 to 966px tall.
- The map's height follows the highest pile, so it grows on narrow screens,
  where the dots are larger relative to the width.

Check any hero change at 1728×966 with a 20px default text size, 1440×790,
1366×650, 1536×730, 1024×700 and a 375px phone.

This file is excluded from the build via `.eleventyignore`.

# /curtin-migration — Curtin community conversation on migration

Standalone single-page microsite presenting the results of the Curtin
community conversation on migration, run by the RadicalxChange Foundation with
Kate Chaney MP, Federal Member for Curtin (Polis conversation 8–27 October
2026; quadratic vote 14 October 2026).

Like `/density-done-well`, this page shares **nothing** with the rest of the
site: it does not extend `layouts/_base.njk`, and carries its own `<style>`,
inline `<script>`, header and footer. It is framed by the same thin RxC-branded
breadcrumb and footer bars (`.rxc-shell`, Bricolage Grotesque from Google
Fonts) as the other project microsites, and carries the site's Fathom
analytics snippet.

`index.njk` is raw HTML wrapped in `{% raw %}` so Nunjucks passes it through
untouched; the only Eleventy features used are the front-matter `permalink`
and the site-wide posthtml transform. All chart data is embedded in the file.
The only asset it takes from the site is the shared favicon
(`/images/logos/favicon.png`).

The page wears Kate Chaney MP's brand, taken from katechaney.com.au, so her
office can link to it or embed it as its own: teal `#16A1B7` and navy
`#012253`, with Barlow Semi Condensed for headings and Inter for text, both
loaded from Google Fonts. The two groups have their own colours, amber
`#B45309` and violet `#8547F0`, so neither carries the MP's colours. All of
this lives in the `:root` tokens at the top of the style block (with a dark
mode set below them). The RxC breadcrumb and footer bars keep RxC's own look.

Its own link-preview image is `src/site/assets/curtin-migration-og.png`
(1200×630, served at `/assets/curtin-migration-og.png` and referenced by
the `og:image` and `twitter:image` tags). It was rendered from the page's
own fonts and copy: the hero headline, "265 people took part" and the
first two hero quotes. If the hero copy changes, regenerate it.

Data sources: the Polis export of 30 October 2026
(https://pol.is/report/r9fyrr8m6yfmfbwscfvp2) and the quadratic-vote results
for 14 October 2026. Statements are shown verbatim. The opinion map is
recomputed from the published vote matrix with the same PCA method Polis uses.
It shows only the main divide, left to right (the first value in each
`DATA.people` entry), in rounded heaps like the Warringah page's: each dot
drops near its place on the line and rolls up to three dot widths to the
lowest free spot, paying for each step sideways, so crowded stretches pile up
like sand (`swarm()`). The map names each group, with its count, on one line
above the tallest heap, as the Warringah page does. The second value, which used to set an "agreed more often"
height, is no longer drawn: it tracked how often people pressed agree, which
said little about their views, so each card shows that figure instead.

Unlikely allies: the page has no allies section. Statements 33 (cost of
living) and 29 (university housing) have similar support in both groups,
but they don't pass the test every migration results page uses. That test
reads a pass as no signal, so it counts only the 76 people who agreed or
disagreed with both, and it allows for people who agree with most things.
The odds ratio is 6.5, but z is 2.7, where 3.3 is needed: with so few
people, a link that size could be chance. No other pair of Curtin
statements passes either. The notes say so in one line, as the other pages
do.

Hover-card examples: each person's card shows up to two of their votes. The
last four fields of each `DATA.people` entry hold them: the example where they
voted like Group 1 (statement number, then `a` agreed or `d` disagreed), then
the example where they voted like Group 2 (`-1` and an empty string when there
is none). The candidates are the 40 statements where the groups took opposite
sides (one group's majority agreed and the other's disagreed, with at least 8
voters in each group), limited to those the person voted on the same way as
that group. The card prefers, in order: a statement the person agreed with
over one they disagreed with; the one that group most widely shared (the share
of the group on its side, as a 95% Wilson lower bound, so small samples count
for less); the one more of that group voted on; then the lower statement
number. `DATA.texts` holds the wording of every statement the cards use, from
the export, with apostrophes set as ’. Until November 2026 the cards showed
each person's most divisive vote instead (the largest gap between the groups),
which put the bluntest statements on the most cards.

## Common format (November 2026)

Every Teals migration page follows one layout, with the Warringah page as the
reference build. On this page that means:

- **Group order.** Group 1 is the larger group, shown first, in amber, on the
  map's left ("Migration works", 195); Group 2 is the smaller, in violet, on
  the right ("Pace and control", 37). `DATA.people` stores the mirrored line
  position (`1 - x`), the group (0 = Group 1), and the lean counts and
  examples in Group 1, Group 2 order.
- **Wording.** "Two main groups", "Both groups want a plan" and "First choice:
  ..." at a glance; "Most people fit into one of two groups"; natural
  frequencies (5 in 6, 1 in 6); "What sets them apart"; a caveat that says
  the groups describe who took part.
- **Agreement.** Pairs are titled by what both groups back and labelled "They
  disagree on" and "But both back" (`PAIRS`: id, text, Group 1 %, Group 2 %,
  Group 1 voters, Group 2 voters). A fold lists all 18 statements at least 70%
  of each group agreed with, with at least 10 voters in each (`SHARED`).
- **Priorities.** Each card leads with its net votes, with one bar on a shared
  scale (the top change is full width), and backers and opposers in a small
  line. The clear-no card shows its net alone.
- **Counting.** People are those who voted on at least one statement open for
  voting: 265 (Polis counts 266, including one account whose only vote was on
  its own statement, which the moderators held back). 232 were placed in a
  group, 33 not: 32 voted on too few statements, and one voted on 36 but
  passed on every one (see below). 419 statements were open for voting (36
  starters); 118 others were held back, and no one else voted on them; 21,315
  votes.
- **People who only ever passed** aren't placed in a group, on every Teals
  page: a pass doesn't show where someone stands, though Polis places them
  by reading a pass as halfway between agree and disagree. On this page that
  is one person, whom Polis placed in Group 1 near the border, so Group 1 is
  195, not 196, and their dot is gone from both maps. They still count as
  taking part.
- **A closer look inside Group 1.** The stance test used on the Warringah
  page (at a cut along the line, a statement flips when at least 65% agree on
  one side and at most 35% on the other, with 10+ voters a side and z >= 3.3)
  finds 14 flips between the 118 people at the far end of Group 1 and the 77
  nearest Group 2; shuffled orders never give more than 2. (With 195 people
  in Group 1, the test's cuts at every 1% of the group skip 118, but cuts at
  118 and 119 both give 14 flips, so the divider stays where it was.) Inside Group 2 only
  one statement flips, no more than chance. The map draws a dashed divider at
  `DATA.cut` (0.427 on the line, midway between the two parts), names Group
  1's parts under a bracket ("Works" and "Works, but slower", agreed with Jack;
  lettered badges A and B where a name won't fit), and the key under the map
  describes them. No dot rolls across the divider; left of it the dots drop
  from the divider outwards, so they don't wall up against it.
- **Notes**, in order: reading the percentages, reading the map, a closer look
  inside Group 1 (ending with the one line on unlikely allies), the group
  cards, who and what we counted, pairing the statements, the priority vote,
  the data.

The groups are the page's own (from the 30 October export); Polis's current
export assigns two more people to the smaller group, so the figures were
recomputed from the export with the page's groups, recovered by matching each
row's vote count, agree rate, statements written and example votes to a
participant. That matching reproduces every group figure already on the page,
and every alternative matching that also does gives the same 18 shared
statements. The closer look orders Group 1 by each dot's place on the line, so
it also needs each dot's participant: one in the same group with the same
vote count, agree rate, statements written, lean counts and example votes.
Dots that match more than one participant in every respect give the same
closer look whichever way they are matched.

The page supports light and dark mode. To update copy or figures, edit the
HTML directly; every figure on the page has been checked against the exports.

## Layout

- The type is set in rem, so the page's `.wrap` is too (`max-width:77.5rem`,
  which is 1240px at the standard 16px text size). A reader whose browser
  default text size is larger gets a proportionally wider page. With a px
  cap, a 20px default squeezed larger text into columns that did not grow,
  and the hero sticker covered the ends of the first quote's lines.
- In the two-column hero the sticker sits beside the first quote card and
  covers no card, at any text size. Three values do this:
  - `.c1{width:calc(100% - 8.85rem + 22px)}`. The card stops short of the
    sticker. 8.85rem is the sticker's 8.25rem plus a .6rem gap, and 22px is
    how far the sticker hangs past the column's right edge (`right:-22px`).
  - `.sticker{top:0}`. The sticker is level with the top of the cards.
  - `.cards{padding-top:max(10px,calc(3.43rem - 56px))}`. This keeps the
    sticker's lower edge above the second card. The first quote is about 61
    ems long and its card never has room for more than about 25 ems a line,
    so it never sets in fewer than three lines, and the card is at least
    4.82rem + 44px tall (3 lines × 1.2rem × 1.34, plus 44px of padding). The
    padding is the sticker's 8.25rem, less that card, less the 20px gap,
    plus 8px of air. At 16px it is 10px, as it always was.

  If the first quote, the sticker's size or the cards' padding changes, work
  these out again.
- Large text in a narrow window leaves no room beside the first card: wider
  than 900px, but narrower than 56.25em at the reader's text size. The
  sticker then sits under the cards, as it does on phones. This cannot
  happen at the standard 16px, where 56.25em is 900px.
- Between 901px and about 1135px wide at the standard text size, the first
  card is narrower than it used to be, so its quote runs one or two lines
  longer.
- The hero headline is three set lines, like the Warringah page's: "Curtin
  wants", "a long-term plan" (boxed in navy) and "for migration". Each line is
  `white-space:nowrap`, and the size comes from the hero text column
  (`container-type:inline-size`): `min(14cqi,9vh,6.4rem)`. The widest line,
  the boxed one, is about 6.7 times the size, so it always fits the column
  and the lines never rewrap. Phones use `min(14cqi,3.6rem)`.
- Short windows keep the headline, lede and buttons on the first screen. The
  rules are inside `min-width:901px`:
  - `.hero-grid{padding-top:clamp(28px,calc(100vh - 41.5rem),88px)}` shrinks
    the space above the hero.
  - The headline's `9vh` limits it on short windows, and under 47.5em tall it
    takes `min(14cqi,8vh,6.4rem)`.
  - Where the cards run well past the first screen, the headline starts
    level with the first card (`align-items:start`): any window under 43.25em
    tall, and a window under 62.5em wide that is under 53em tall.

  Swept at 143 window sizes from 901×600 to 2560×1080 at 16px, the buttons
  stay on the first screen at every one. The small turnout line under them
  can fall just below it on the shortest windows. If the headline, lede or
  buttons change, sweep again.
- The closing "Thank you, Curtin" circle is sized in rem like its words
  (15rem, and 10.625rem at 900px and below), so the words stay inside it at
  any text size.
- At 900px and below there is one column, with the sticker under the cards.
- Check any hero change at these sizes: 1728×966 with a 20px default text
  size, 1440×790, 1366×650, 1024×700 and a 375px phone. Also 1536×730, a
  1080p screen at 125% scaling, where the headline used to take four lines
  and push the buttons off the first screen. Headless Chrome takes
  `--blink-settings=defaultFontSize=20`.

This file is excluded from the build via `.eleventyignore`.

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
loaded from Google Fonts. The three groups have their own colours, so none
carries the MP's: amber `#B45309` for Group 1, a lighter amber `#E99A2C` for
Group 2 (the two came out of one Polis group) and violet `#8547F0` for Group 3.
Dark mode has its own two ambers, `#9C4806` and `#C58719`. Each set was run
through a palette validator against its map surface: colour-blind separation,
a distinguishability floor for full colour vision, lightness and chroma. The
lighter amber is under 3:1 against white and the dark-mode amber under 3:1
against the dark map, so every group is also named in text wherever its colour
appears. All of this lives in the `:root` tokens at the top of the style block
(with a dark mode set below them). The RxC breadcrumb and footer bars keep
RxC's own look.

Its own link-preview image is `src/site/assets/curtin-migration-og.png`
(1200×630, served at `/assets/curtin-migration-og.png` and referenced by
the `og:image` and `twitter:image` tags). It was rendered from the page's
own fonts and copy: the hero headline, "265 people took part" and two
statements most people in every group agreed with (148 and 76; both are still
among the statements all three groups agreed with). It names no groups. If the
headline or the turnout changes, regenerate it.

Data sources: the Polis export of 30 October 2026
(https://pol.is/report/r9fyrr8m6yfmfbwscfvp2) and the quadratic-vote results
for 14 October 2026. Statements are shown verbatim. The opinion map is
recomputed from the published vote matrix with the same PCA method Polis uses.
It shows only the main divide, left to right (the first value in each
`DATA.people` entry), in rounded heaps like the Warringah page's: each dot
drops near its place on the line and rolls up to three dot widths to the
lowest free spot, paying for each step sideways, so crowded stretches pile up
like sand (`swarm()`). The map names each of the three groups on one line above the tallest heap, as the Warringah page
does: its name, with "Group 1 · 118 people" under it, nudged apart where two
would touch, and "Group 1" with "118 people" under it if the names can't fit
side by side (phones show "Group 1" alone). The map is laid out again once
the web fonts have loaded, so the labels are measured in the font they are
drawn in. The second value, which used to set an "agreed more often"
height, is no longer drawn: it tracked how often people pressed agree, which
said little about their views, so each card shows that figure instead.

No unlikely allies. Until November 2026 the page showed 52 "affordability
allies" who backed both statement 33 (cost of living) and statement 29
(university housing). The pair falls just short of the allies test every
migration results page uses: it counts only the 76 people who agreed or
disagreed with both statements and allows for people who agree with most
things, and gives an odds ratio of 8.5 but z of 3.2, where 3.3 is needed.
With three groups, most of every group backs both statements (62%, 72% and
64%; 64%, 56% and 58%), so statement 33 also misses the test's entry rule
(30 to 70% agreeing in every group): 72% of Group 2 agree, one person over.
That makes the pair common ground that falls short of the 7-in-10 bar for
"Even where they disagree", rather than an alliance, so the section is left
off. No other pair meets the entry rule and passes. The notes say so in one
line, at the end of "How we found three groups", as on the Warringah and
Bradfield pages.

Hover cards: each `DATA.people` entry is the line position, an unused
height, the group (0, 1 or 2), the votes cast, the agree rate and the
statements written, then ten fields for the card: how many of the split
statements the person voted on; how many times they voted like Group 1,
Group 2 and Group 3 (a vote can match two groups, so each count is out of the
same total); and one example for each group they voted like (statement
number, then `a` agreed or `d` disagreed; `-1` and an empty string when there
is none). The split statements are the 50 where one group's majority agreed
and another group's majority disagreed; a group takes a side only when at
least 8 of its people voted. The card shows the person's own group's example
first, and a statement picked for two groups once. For each group it prefers,
in order: a statement the person agreed with over one they disagreed with;
the one that group most widely shared (the share of the group on its side, as
a 95% Wilson lower bound, so small samples count for less); the one more of
that group voted on; then the lower statement number. `DATA.texts` holds the wording of every statement the cards use, from
the export, with apostrophes set as ’. Until November 2026 the cards showed
each person's most divisive vote instead (the largest gap between the groups),
which put the bluntest statements on the most cards.

## Common format (November 2026)

Every Teals migration page follows one layout, with the Warringah page as the
reference build. On this page that means:

- **Three groups** (November 2026). Polis finds two groups. Inside the
  larger one, people split clearly on several questions (see "Three groups"
  below), so the page shows three, numbered left to right along the map:
  Group 1 "Migration works" (118, amber), Group 2 "Works, but slower" (77,
  lighter amber) and Group 3 "Fewer, chosen more carefully" (37, violet).
  The names are the ones every migration results page uses for the same
  positions (November 2026). `DATA.people` stores the mirrored line position
  (`1 - x`) and the group (0, 1 or 2); the map and hover cards take the names
  from `GNAME` in the page script.
- **Section order.** Hero, then the groups section (its heading, the map,
  the "Where would you sit?" block, the group cards, then the caveat),
  agreement, priorities,
  how this worked, the notes, what happens next. There is no at-a-glance
  row: the hero carries the groups and what they share, and the priority
  vote is one click away on the hero's second button.
- **Wording.** "Most people fit into one of three groups"; natural
  frequencies on the group cards (1 in 2, 1 in 3, 1 in 6); a caveat that
  says the groups describe who took part.
- **Group cards.** One above another. Groups 1 and 3 show "What sets them
  apart": three statements most of the group agreed with and far fewer of
  both other groups did. Group 2 sides with one or other of its neighbours on
  most questions, so its card is "Where they stand": two statements where it
  sides with Group 1, two where it sides with Group 3, and one it backed more
  than both, with 20 or more voters in every group. Every statement shows all
  three groups' shares.
- **Agreement.** A statement counts as one all three groups agreed with when
  at least 70% agreed in each group, with at least 10 voters in each. There
  are 15 (`SHARED`: id, text, the three shares, the three voter counts). The
  pairs are titled by what all three back and labelled "They disagree on" and
  "But all three back" (`PAIRS`, the same format). Only pairs whose "But all
  three back" statement clears the rule are shown, so there are four.
- **Priorities.** Each card leads with its net votes, with one bar on a shared
  scale (the top change is full width), and backers and opposers in a small
  line. The clear-no card shows its net alone.
- **Rounding.** Shown percentages round halves up (82.5% shows as 83%),
  hover cards included; Python's `round()` would round halves to even. The
  7-in-10 bar is applied before rounding, and "Reading the percentages" says
  so.
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
  is one person, whom Polis placed in its larger group near the border, so
  that group is 195, not 196, and their dot is gone from the map. They
  still count as taking part.
- **Three groups.** The stance test used on every migration results page (at a
  cut along the line, a statement flips when at least 65% agree on one side
  and at most 35% on the other, with 10+ voters a side and z >= 3.3) finds 14
  flips between the 118 people at the far end of Polis's larger group and the
  77 nearest its smaller one. In 1,000 random orders of the same people
  (`random.Random(11)`), the same search never found more than 3, and 616
  orders found none. (With
  195 people in that group, the test's cuts at every 1% of it skip 118, but
  cuts at 118 and 119 both give 14 flips, so the boundary stays where it
  was.) Inside Polis's smaller group only one statement flips, too few to
  split it; 46 of 1,000 random orders of its 37 people find as many.
  `DATA.cut` (0.427 on the line, midway between Groups 1 and 2) is that
  boundary. The map no longer draws it: the groups' colours show it. No dot
  rolls across it, and left of it the dots drop from it outwards, so they
  don't wall up against it.
- **Notes**, in order: reading the percentages, reading the map, where would
  you sit?, how we found three groups (ending with the line on unlikely
  allies), the group cards,
  who and what we counted, pairing the statements, the priority vote, the
  data.

The groups are the page's own (from the 30 October export); Polis's current
export assigns two more people to the smaller group, so the figures were
recomputed from the export with the page's groups, recovered by matching each
row's vote count, agree rate, statements written and example votes to a
participant. Groups 1 and 2 split Polis's larger group by each dot's place on
the line, so the split also needs each dot's participant: one in the same
group with the same vote count, agree rate, statements written, lean counts
and example votes. Dots that match more than one participant in every respect
give the same three groups whichever way they are matched.

The page supports light and dark mode. To update copy or figures, edit the
HTML directly; every figure on the page has been checked against the exports.

## Where would you sit? (November 2026)

A "Where would you sit?" button in the map card's top row lets a reader
answer ten statements from the conversation and see where they would sit on
the map. It all runs in the reader's browser: the block makes no network
requests and stores nothing (no cookies, local storage or analytics events),
and the result says so.

- **How it works (November 2026 redesign).** The button, solid like the
  hero's first button, takes the place of the old "Show me someone" button,
  which is gone with its code; the touch hint now reads "Tap a dot to see how
  that person voted." (hovering or tapping a dot still shows that person's
  card). The button opens a strip between the button row and the map that
  asks the statements one at a time: a count ("3 of 10"), the statement in
  quotes, Agree, Disagree and Pass, and Back. The strip keeps the height of
  the longest statement, so the map stays put, and on opening the page
  scrolls only as far as it takes to show the strip and the map together
  (at 1728×966 with 20px text the card grows by 159px and fits). After six
  agree-or-disagree answers the reader's dot appears on the map with its
  band, and it moves with each answer after that; a line beside the buttons
  says where it is. After the last statement the strip shows one line
  naming the group ("You’d be closest to Group 2: Works, but slower.", or
  "You’re between …" near a border), the common-ground line, "Start again"
  and the privacy line. A reader who reaches the end with fewer than six
  agrees or disagrees is told so and can go back. The dot shows only while
  the strip is open. On phones the strip sits above the map too, with the
  three answer buttons sharing the full width.

- **Statements.** Ten, in this order: 0, 8, 3, 134, 69, 34, 14, 22, 20, 12.
  Eight are starter statements, which every migration conversation shares;
  134 and 69 were written by people in Curtin, one on each side of the main
  divide. Most of every group agreed with 0 and 12 (70% or more in each, with
  10 or more voters in each), so they come first and last. The texts are
  word for word from the export, with apostrophes curled.
- **Common ground in the result.** If the reader agreed with statement 0,
  the result names the page's main finding in the words of the circle at the
  top: "Like more than 3 in 4 people in every group, you want migration
  planned 10 to 15 years ahead." (More than 3 in 4 agreed with it in each
  group, with 20 or more voters in each.) A reader who disagreed with it or
  passed gets no line.
- **Placement.** A straight-line fit of each person's place on the map's
  line (`DATA.people` x) on their answers to the ten: agree +1, pass 0,
  disagree −1, and a statement they didn't vote on takes its average. It is
  fitted on all 232 people in a group, lightly ridged (λ = 1, intercept not
  penalised). A reader's position is the intercept plus each weight times
  their answer (the average for a statement not answered yet), kept between
  0 and 1.
  Everything the block needs is in
  `<script type="application/json" id="wwys-data">`: the statements, the
  intercept, weights and averages, the boundaries, the margin, the band, the
  minimum number of answers, the group names and descriptions (the same as
  the hero labels), and the common-ground line with its statement
  (`common`).
- **Groups.** The position is read against the boundaries between the
  groups on the map: 0.427 (`DATA.cut`) and 0.679 (midway between the last
  Group 2 dot and the first Group 3 dot). Within 0.06 of a boundary the
  result names both groups.
- **Minimum.** Six agree-or-disagree answers; passes don't count towards it.
- **Accuracy.** Tested by leaving each person out in turn, refitting on
  everyone else and placing them from their own answers. Of the 93 people
  who agreed or disagreed with at least six of the ten, 85 (91%) landed in
  their own group: 44 of 46 in Group 1, 17 of 21 in Group 2 and 24 of 26 in
  Group 3. 24 of the 93 were within 0.06 of a boundary, and for all 24 their
  own group was one of the two named; of the other 69, 66 got their own
  group. The notes quote the 91%.
- **The residents' statements.** They replaced starters 24 and 28. On the 90
  people who answered at least six of both sets, the starters-only set put 83
  in their own group and this set 84, but this set names two groups for 22 of
  them, against 11. Fewer people voted on the residents' statements (71 and
  63 took a side, against 133 and 103 for the starters), so in the test their
  answers are often the average.
- **The band.** The shaded band around the reader's dot is ±0.115 on the
  line, the 80th percentile of the leave-one-out error.
- **Drawing.** Each time the map script lays out the map, it calls every
  function in `window.__mapHooks` with the layout (`window.__mapLayout`: the
  line's ends and vertical position, the scale, the dot radius and the font
  size), so
  the reader's dot follows resizes. The band sits behind the axis and the
  dots, so they keep their colours. "You" goes under the dot unless it would
  touch an axis label, and then above it, with a halo in the card colour.
- **Keyboard and screen readers.** The opening button is a native button with
  `aria-expanded`. Each answer moves focus to the next statement, which
  screen readers read; the answers are native buttons (`aria-pressed` shows
  an earlier answer after Back), labelled by the statement. Progress ("3 of
  10") and the dot's place are announced with `aria-live`, and the result,
  which also says in words where the dot is, takes focus when it appears.
  "Start again" clears the answers and moves focus to the first statement.
- **Updating.** If the groups, the map or the export change, refit and rerun
  the leave-one-out test, then update the JSON and the notes' figure
  together.

## Layout

- The type is set in rem, so the page's `.wrap` is too (`max-width:77.5rem`,
  which is 1240px at the standard 16px text size). A reader whose browser
  default text size is larger gets a proportionally wider page. With a px
  cap, a 20px default squeezed larger text into columns that did not grow,
  and the hero sticker covered the ends of the first quote's lines.
- The hero's right side has one label per group, and the circle (November
  2026, every migration results page). Each label is a link to its group card
  (`#group-1` to `#group-3`): a small "Group 1 · 118 people" line, the
  group's name, and one line from its defining statements, with a left edge
  in its colour. The descriptions (statements 95, 134 and 103 with 20, and
  69): "Migrants aren’t the housing problem; keep helping people in need.",
  "Migration helps, but take longer and get the checks right." and
  "Temporary visas shouldn’t lead to permanent residency." The labels are
  white in both modes, so their quieter text uses a fixed grey (`#4B5B73`),
  not `--muted`, which is pale in dark mode. Each label is wrapped in a
  `role="listitem"` element, so it stays a link for screen readers.
- The circle is a link to the agreement section (`#agree`), with the same
  words for screen readers. It sits against all three labels, on the right
  (absolutely placed, centred on the labels, which stop `9.5rem` short of the
  column's edge). Its ring is in bands like the labels: Group 1's colour on
  top, Group 2's at the sides and Group 3's underneath; `from 12deg` in its
  gradient undoes its tilt, so the bands stay level. Windows 53em tall or
  less use slightly smaller labels. On phones the labels run full width and
  the circle follows them, centred.
- The turnout line also says how many people are in a group: "265 people
  took part · 232 in a group".
- Under the headline, an intro in its own paragraph, styled like the finding
  sentence that follows it (`class="sub intro"`): "Multiculturalism is
  central to Australia’s story, identity and future. As debate over migration
  levels and settings continues, this process offers a more nuanced,
  participatory way for communities to give feedback on immigration policy."
- The hero sentence runs the whole width of its column and ends with the
  priority vote's first choice.
- The hero headline is three set lines, like the Warringah page's: "Curtin
  wants", "a long-term plan" (boxed in navy) and "for migration". Each line is
  `white-space:nowrap`, and the size comes from the hero text column
  (`container-type:inline-size`). The widest line, the boxed one, is about
  6.7 times the size, so at `14cqi` (`--h1-fit` on `.hero-text`) it fills the
  column and the lines never rewrap.
- **One hero standard (November 2026).** The hero's sizes and spacing come
  from the rules every migration results page shares, pasted last in the
  stylesheet; the page sets only `--h1-fit`. Text sizes follow the window's
  height (the headline `min(var(--h1-fit),7.9vh,4.2rem)`, the intro and the
  sentence `clamp(.875rem,2.35vh,1.25rem)`, the turnout line
  `clamp(.8rem,1.95vh,.95rem)`), the hero fills the first screen
  with its content centred, and windows under 43.25em tall start it level
  with the labels. The buttons stay on one row on wide layouts, stepping down
  in size as the text column narrows (`zoom` inside container queries), and
  stack at full width on phones. The page's own hero sizing rules (the
  paddings, the headline and sentence sizes, and the short-window steps) are
  gone; the brand (fonts, colours, the button's shape and the headline's
  box) and the label and circle rules stay.

  Swept with the standard (November 2026), at the same 140 window sizes from
  901×600 to 2560×1200 at 16px and 13 sizes with 20px text, including
  1728×966 (light and dark), 1280×720, 1180×820, 1366×650 and 1024×700. At
  every one, the buttons, the turnout line, all three labels and the circle
  are on the first screen, the buttons are on one row, no line of text falls
  under the circle, the circle's own words stay inside it, and no two labels
  overlap. (With the intro and the page's old rules, the buttons fell below
  the first screen at 60 of the 153 sizes and the turnout line at 83.) If the
  headline, lede, buttons or labels change, sweep again.
- The closing "Thank you, Curtin" circle is sized in rem like its words
  (15rem, and 10.625rem at 900px and below), so the words stay inside it at
  any text size.
- At 900px and below there is one column, with the circle after the three
  labels.
- Check any hero change at these sizes: 1728×966 with a 20px default text
  size, 1440×790, 1366×650, 1024×700 and a 375px phone. Also 1536×730, a
  1080p screen at 125% scaling, where the headline used to take four lines
  and push the buttons off the first screen. Headless Chrome takes
  `--blink-settings=defaultFontSize=20`.

This file is excluded from the build via `.eleventyignore`.

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
navy `#13384b`. The three groups use gold (Group 1), a lighter violet
(Group 2) and violet (Group 3), none of them the MP's colours. Groups 2 and 3
came out of one Polis group, so they share its hue, and Group 2, the part that
split off, is lighter. In dark mode Group 3's violet is deeper (`#6250c1`) so
the three stay apart. Both modes pass the dataviz palette validator; one
colour per mode is under 3:1 against its surface, so every group is also named
in text wherever it appears. The page has light and dark modes.

Its link-preview image is `src/site/assets/warringah-migration-og.png`
(1200×630, referenced by the `og:image` and `twitter:image` tags). It was
rendered from the page's own fonts and copy: the boxed headline, "452 people
took part", and the hero's three group labels and circle, laid out like the
other three-group pages' images. If the headline, the turnout, the groups or
the circle change, regenerate it.

## While the results are preliminary

- The page carries `<meta name="robots" content="noindex">` and
  `eleventyExcludeFromCollections: true`, which keeps it out of the sitemap.
  Remove both when the results are final.
- It is not linked from /projects, the home page or anywhere else.
- The status line reads "Preliminary results, data to 6am AEDT, 18 November
  2026". Update it with each new export.
- The credit line and the "What happens next" line wait for the office's
  confirmation. The Acknowledgement of Country in the footer is the office's own
  wording (20 November 2026, via Jess Scully), word for word in two paragraphs.

## What is counted

- **Statements:** only the 155 statements people could vote on: 36 starter
  statements, 46 added by the moderators during the conversation, and 73
  written by residents. 331 others were removed by the moderators before
  anyone else voted on them; they are not counted or shown.
- **People:** the 452 people who voted on at least one of those statements,
  casting 23,944 votes. Polis's own count (468) also includes the moderator
  account and 15 accounts whose only votes were on their own removed
  statements.
- **Groups:** three, numbered left to right along the map (the rule for
  every results page where one of Polis's groups splits clearly, 19 November
  2026). Polis found two groups, without the moderator account. The larger is
  Group 1 "Migration works" (245 people). The other splits clearly on
  several questions (see "How we found three groups"), so the page shows it as
  Group 2 "Fewer, but flexible" (96) and Group 3 "Fewer, chosen more carefully"
  (24), the people at its far end. 87 people aren't in a group: 84 voted on too few statements to be
  placed, and 3 others never agreed or disagreed with anything (every vote
  they cast was a pass). Polis places those 3, because it reads a pass as
  halfway between agree and disagree, but a pass doesn't show where someone
  stands, so the page leaves them out of the groups (the rule for every
  results page since 18 November 2026). They still count as taking part.
- **Percentages:** the share of a group who agreed, out of those in the group
  who voted on the statement (passes count as votes). Where fewer than 20 in a
  group voted, the page shows how many. Halves round up (62.5% shows as 63%),
  and the 7-in-10 bar is applied before rounding.
- **Statements all three groups agreed with:** at least 70% agreement in every
  group, with at least 10 voters in each: 8 statements, all listed in the fold
  under the pairs. Many statements added later in the conversation fall under
  the floor of 10 voters in Group 3. Five pairs show one of the eight beside a
  related statement the groups disagree on (30+ points apart, on opposite sides
  of 50% agreeing, in at least two groups). Each pair is titled by what all
  three groups back, and its halves are labelled "They disagree on" and "But
  all three back"; every "But all three back" statement has 20+ voters in
  every group.
- **Statements where the groups took opposite sides:** one group's majority
  agreed and another group's majority disagreed; a group needs at least 8
  voters on a statement to take a side: 31 statements. The hover cards count
  each person's votes on these.
- **Group cards:** three, stacked, each with all three groups' shares (its own
  group first, one figure per line). Group 1's shows three statements most of
  Group 1 agreed with and far fewer of both other groups did (under half, and
  30+ points below Group 1), ranked by the gap to the nearer group. Only one
  statement passes that test for Group 3 (72, added by the moderators), so its
  card shows it beside the two statements most of Group 3 disagreed with and
  most of both other groups agreed with, by the widest margins (24 and 10),
  each tagged "Most of them agree" or "Most of them disagree". Group 2 has no
  view that sets it apart from both neighbours, so its card, "Where they
  stand", shows two statements where it sides with Group 1 and two where it
  sides with Group 3, in two columns, and across them one it backed more than
  both (25): the clearest of the 12 statements, with 10+ voters in every group,
  where more of Group 2 agreed than of either neighbour.
  RadicalxChange chose the statements, from those about how the visa system
  should work.
- **Priority vote:** the same rule as the Curtin page. Ballots that used fewer
  than 10 credits are set aside, names are matched ignoring capitals and
  spacing, and where someone voted more than once the last ballot they
  submitted counts (in all five repeats it is also the fuller one): 53 voters.
  Net votes are votes for minus votes against. The chart shared after the
  session shows 56 voters because it keeps two ballots of 6 and 7 credits and
  matches names exactly; the order of all 13 changes is the same.
  Each of the top six cards leads with its net votes, since they set the
  order, with one bar on a shared scale (the top change is full width) and the
  backers and opposers as a small line under it. The clear-no card shows its
  net alone, and the other six in the fold lead with their nets.

## The map

The map is one row along the main divide: the first principal component of
the vote matrix, computed the way Polis does (centred on each statement's
mean, missing votes left at the mean, and each person's projection scaled up
by how few statements they voted on). Recomputed groups agree with Polis's two
for 353 of 365 people. The dots are drawn as rounded heaps: taking people from
left to right, each dot drops near its true place on the line and settles in
the lowest free spot up to three dot widths to its left or 1.25 to its right,
paying for every step it moves sideways (a spot's cost is its height plus 0.9
times its sideways shift). So crowded stretches pile up like sand rather than
standing in columns. Rolling only a little to the right stops early dots
running into empty space and later ones walling up, against the cut between
Groups 2 and 3 most of all. Maps under 640px wide use smaller dots and let them roll up to six dot
widths to the left at 0.6, so phone piles are less steep. This was chosen over
a dot histogram, a swarm and two packed bubbles (17 November 2026). Each
group's label sits above the tallest heap in two lines, its name with its
colour dot and then "Group 1 · 245 people", centred on its own heap (the 10th
to 90th percentile of its dots) and nudged apart where two would touch. Where
the names can't fit side by side, the labels fall back to "Group 1" with the
count under it; maps under 640px wide show "Group 1", "Group 2" and "Group 3"
alone. The labels are measured, so the map is laid out again once the web
fonts load (`document.fonts.ready`). The axis is labelled with the groups at each end.

## How we found three groups

Polis found two groups: principal component analysis places everyone on a
map, and k-means clustering divides it. Inside each of Polis's groups we then
ran the stance test used on every Teals results page. People are lined up
along the map's left-to-right line (the first principal component, from the
group's far end), and the line-up is split at 13 points, from 20% to 80% of
the way through. At each point the test counts the statements where at least
65% of one part agree and at most 35% of the other do, with at least 10
voters in each part and a two-proportion z of at least 3.3 (two-sided
p < .001). The split with the most such statements wins. Inside the smaller
group (Polis's group 0) that gives 24 people (Group 3) and seven statements, with at
least 21 voters in each part; cuts every 1% give the same split. A
permutation test checks for luck: 1,000 random orders of the same 120 people
(`random.Random(2026)` shuffling a list sorted by participant id), searched
the same way, never produced more than two such statements, and 890 produced
none. The typical person in each of Groups 2 and 3 voted on 53 statements. No
dot rolls across the cut (`DATA.cut`, halfway between the last of the 96 and
the first of the 24), and no line is drawn. Inside Group 1 the same search
finds only one statement, and random orders find one or more in 73 of 1,000,
so it isn't split. The test for unlikely allies, with its
entry rule applied across the three groups (10+ voters and 30-70% agreeing in
every group, within 15 points), leaves only one statement, so there is no pair
to test. The page's notes give every figure.

Hover-card examples follow the rule used on every Teals results page, across
three groups. Each person's card shows up to three of their votes: one for
each group they voted like. The candidates are the 31 statements where the
groups took opposite sides, limited to those the person voted on the same way
as that group's majority. The card prefers, in order: a statement
the person agreed with over one they disagreed with; the one that group most
widely shared (the share of the group on its side, as a 95% Wilson lower bound,
so small samples count for less); the one more of that group voted on; then
the lower statement number. A statement picked for two groups is shown once,
labelled with both. The card also counts how often the person voted with each
group's majority, one row per group with a small bar; one vote can match two
groups, so each row is out of all their votes on those statements. A card
taller than the map stays on screen. Nothing is chosen or removed by hand. The page's notes
say this in plain words.

`DATA` (the map rows, hover texts and the groups' names, in the `page-data`
script tag) and the `SHARED` list (the statements all three groups agreed with)
are generated from the export. The groups' names live in one place in the
generator, with each group's one-line description: the inject script writes
them into every `data-gname` and `data-gdesc` span and the map's description,
and the page's script reads the names from `DATA.names`; everything else is edited in the
page directly. The scripts and the frozen export live outside the repository.
Every figure, quote and hover-card value is checked against the export before
each push.

## Layout

The page is built on the Curtin template, including its rem-based width
(`.wrap{max-width:77.5rem}`) (see `src/site/curtin-migration/README.md`,
"Layout").

The hero follows the results pages' common format (19 November 2026): on the
right, one label per group instead of quote cards, and no at-a-glance row
below. Each label gives the group's size ("Group 1 · 245 people"), its name and
one line, under about 10 words, from the group's own defining statements, and
links to its group card (`#group-1` to `#group-3`). Each link sits in its own
list item (`<div role="listitem">`), so it keeps its link role, and the labels'
text uses fixed dark colours (`#13384b`, `#56606a`), because the labels are
white in both modes. The circle follows the list, sits against the labels and
links to the agreement section (`#agree`). It reads "More than 3 in
4 in all three groups want transport, schools and healthcare planned ahead"
(statement 39: 85%, 88% and 77%, with 20+ voters in every group), and its ring
is in bands: Group 1's colour on top, Group 2's at the sides and Group 3's
underneath. The turnout line adds how many people are in a group ("· 365 in a
group"). Under the headline, Jess Scully's intro for every results page (20
November 2026) sits in its own paragraph, word for word, styled like the
finding sentence below it and one paragraph gap above it. Both run the full
width of their column. There is no line
about the priority vote, because the sentence already says what most people
want.

The sections run: hero, the groups (the map first, then the three cards, then
the caveat), agreement, priorities, how this worked with its notes, and what
happens next.

Some things differ from the Curtin page:

- The headline is three set lines ("Warringah wants" / "a long-term plan" /
  "for migration"), the middle one boxed in navy like the stepped headlines on
  the MP's site. The longest line is 8.76em wide in Poppins Bold, so the
  headline is sized from its column (`min(10.6cqi, 9vh, 4.6rem)`), and never
  wraps.
- Short windows (under 46em tall, which is 736px at the standard text size
  and 920px at a 20px default) get a smaller headline (`8vh`) and lede, and
  the hero's labels tighten from 53em down, so all three labels and the
  circle stay on the first screen at 1280×720 with 20px text. Since Jess's
  intro was added (20 November 2026), the buttons fit the first screen at
  1728×966, 1536×730, 1440×790 and 1180×820 with 20px text, but start below
  it at 1366×650, 1280×720, 1280×650 and 1024×700, and on phones. Checked
  at 16px and 20px text from 901 to 1728px wide and 650 to 966px tall.
- The map's height follows the highest pile, so it grows on narrow screens,
  where the dots are larger relative to the width.

Check any hero change at 1728×966 with a 20px default text size, 1440×790,
1366×650, 1536×730, 1280×720, 1180×820, 1024×700 and a 375px phone: the
labels and circle stay on the first screen, the buttons stay where they were
(see above), no line of text falls under the circle, and the labels don't
overlap.

This file is excluded from the build via `.eleventyignore`.

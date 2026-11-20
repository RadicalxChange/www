# /wentworth-migration — Wentworth community conversation on migration

Standalone single-page microsite presenting the **preliminary** results of the
Wentworth community conversation on migration, run by the RadicalxChange
Foundation with Allegra Spender MP, Federal Member for Wentworth (online
conversation open since 2 November 2026; priority vote at a community session
on 2 November 2026).

Like the other migration results pages, this page shares **nothing** with the
rest of the site: it does not extend `layouts/_base.njk`, and carries its own
`<style>`, inline `<script>`, header and footer, framed by the shared RxC
breadcrumb and footer bars (`.rxc-shell`). `index.njk` is raw HTML wrapped in
`{% raw %}`; the only Eleventy features used are the front matter and the
site-wide posthtml transform. Fonts come from Google Fonts: Lora for headings
and Figtree for text, as on the MP's site. The colours follow the MP's site:
the logo teal `#25C8CF` for the hero and the closing section, near-black
`#1D1F2D` for type, the stickers and the clear-no card, the rose `#BF0059` for
the boxed headline line and the main buttons, and the dark teal `#0E788F` for
the section listing where the groups agree. The three groups use gold, a
lighter violet and violet, none of them the MP's colours, with the same values
as the other three-group pages. No red marks a group or the change most voters
opposed. The page has light and dark modes; the hero and the closing section
keep their teal in both, and the hero's white group labels keep their
light-mode text.

Its link-preview image is `src/site/assets/wentworth-migration-og.png`
(1200×630, referenced by the `og:image` and `twitter:image` tags). It was
rendered from the page's own fonts and copy: the boxed headline, "154 people
took part", the three groups with their sizes, and the circle's figure. If the
headline, the turnout, the groups or the circle change, regenerate it.

## While the results are preliminary

- The page carries `<meta name="robots" content="noindex">` and
  `eleventyExcludeFromCollections: true`, which keeps it out of the sitemap.
  Remove both when the results are final.
- It is not linked from /projects, the home page or anywhere else.
- The status line reads "Preliminary results, data to 4:45am AEDT, 20
  November 2026" (the Polis export of 2026-11-19T17:45:15Z). Update it with
  each new export.
- The credit line, the Acknowledgement of Country (a placeholder for now) and
  the "What happens next" line wait for the office's confirmation.
- Two opening lines affirming migrants' contribution are planned for every
  page; they go at the start of the hero, before the sentence.

## What is counted

- **Statements:** only the 195 statements people could vote on: 36 starter
  statements and 159 written by people taking part. The moderators held back
  98 others, and 2 more were waiting for review; no one but their authors
  voted on them, and they are not counted or shown.
- **People:** the 154 people who voted on at least one of those statements,
  casting 11,409 votes. This matches Polis's own count. The starter account
  never voted.
- **Groups (84 / 32 / 15):** Polis found two groups, of 84 and 47 people.
  Inside the smaller one, the stance test below finds a clear split, so the
  page shows three groups, numbered left to right along the map, as on the
  other three-group pages: Group 1 "Migration works" (84), Group 2 "Fewer, but
  flexible" (32) and Group 3 "Fewer, chosen more carefully" (15). The names
  are the ones used on every migration results page, each meaning the same
  position; each group's one-line description in the hero comes from its own
  defining statements. 23 people are not in a group: they voted on too few
  statements (1 to 5) for Polis to place them. Two of them only passed, and
  three people's only votes were the agreements Polis records when someone adds
  a statement. Nobody Polis placed only passed, so the rule that leaves such
  people out of the groups changes nothing here, and nobody in a group passed
  on 9 in 10 or more of their votes.
- **Percentages:** the share of a group who agreed, out of those in the group
  who voted on the statement (passes count as votes). Where fewer than 20 in a
  group voted, the page shows how many; Group 3 has 15 people, so every Group 3
  figure shows it. Shown percentages round halves up, and the 7-in-10 bar for
  shared statements is applied before rounding.
- **Statements all three groups agreed with:** at least 70% agreement in each
  of the three groups, with at least 10 voters in each: 16 statements, all
  listed in the fold under the pairs. (With Polis's two groups it would be
  28.) Each of the five pairs is titled by what all three groups back, and its
  halves are labelled "They disagree on" and "But all three back". The circle's
  figure uses statement 57, the one with the highest lowest share (92% / 96% /
  92%, the last of 13 voters).
- **Statements where the groups took opposite sides:** one group's majority
  agreed and another's majority disagreed, with at least 8 voters in each of
  those groups: 29 statements. The hover cards count each person's votes on
  these.
- **Group cards:** Group 1's and Group 3's each show three statements most of
  the group agreed with and at least 30 points fewer of both other groups did
  (with at least 10 voters in each group); Group 3's are the top three by the
  gap to the nearer group. Group 2 has no view that sets it apart from both
  neighbours, so its card shows two statements where it sides with Group 1,
  two where it sides with Group 3, and one it backed more than both (on 20+
  voters in Group 2). RadicalxChange chose the statements: statements about
  what each group wants, including what it values. The page's notes say so.
- **Priority vote:** 63 ballots using 5,811 credits. Ballots that used fewer
  than 10 credits are set aside (two, both empty), names are matched ignoring
  capitals and spacing, and where someone voted more than once their last
  ballot counts: 54 voters. The voting site stores no times, but its database
  records the order ballots arrived in, which shows each person's last ballot;
  that order was read without copying any names. Net votes are votes for minus
  votes against; no two of the top six have the same net. The chart shared
  after the session also shows 54 voters but keeps each person's fullest
  ballot, so some totals differ by up to 9 votes and the ten-year plan ties
  with the employer ban at +143; the same six changes come top either way. The
  matching conversation statements are the starter statements written on the
  same ideas, and for faster removals a resident's statement about removing
  people whose asylum claims and appeals have failed; close in meaning but not
  identical in wording. A card says "The groups split on this one" only when
  two groups are 30+ points apart, on opposite sides of 50% agreeing, with 10+
  voters in each; where the lower group had at least as many agreeing as
  disagreeing, it says that group was divided. Where any group has fewer than
  10 voters on the matching statement, the card makes neither claim and says
  that few people in that group voted on it (the removals card, where 3 people
  in Group 2 and 2 in Group 3 voted). The employer ban has no close match (the statement
  about sponsored workers changing employers belongs to a different change),
  so its card says so.

## The map

The map is one row along the main divide: the first principal component of
the vote matrix, computed the way Polis does (centred on each statement's
mean, missing votes left at the mean, and each person's projection scaled up
by how few statements they voted on). It explains 17% of the variation in the
votes, against 6% for the next dimension. Recomputed two-way groups agree with
Polis's for 128 of 131 people. Near the border the groups' dots mix, because
Polis places people using more than this one line.

The dots are drawn as rounded heaps: each dot drops near its true place on the
line and settles in the lowest free spot within a few dot widths, paying for
every step it moves sideways, so crowded stretches pile up like sand rather
than standing in columns. No dot rolls across the line where Group 3 begins.
With 131 people in the groups, the dots are drawn larger than on the bigger
seats' pages (7px, or 3.6px in the phone layout).

## How the three groups were found

The stance test used on every page looks inside each of Polis's groups for a
point along the line where answers flip: cuts every 1% from 20% to 80% of the
group, at least 15 people a side, and a statement flips when at least 65%
agree on one side and at most 35% on the other, with at least 10 voters a side
and z of at least 3.3. Inside the smaller group, the 15 people at the far end
part ways with the other 32 on five statements (97, 94, 18, 82 and 24), with
at least 12 voters on each side of every one (the rule asks for 10). In 1,000
random orders of the group's members (a permutation test, seeded so it can be
rerun), the same search never found more than two such statements, and in 805
of the orders it found none. The split is not down to people who mostly
passed: without the three people in the group who passed on at least half
their votes, three of the five statements still split it. Inside the larger
group the best cut gives two such statements, and random orders found two or
more in 7 of 1,000, so it is not split.

The test for unlikely allies, applied across the three groups (statements with
at least 10 voters and 30% to 70% agreeing in each group; only people who
agreed or disagreed with both statements in each pair; a Mantel-Haenszel odds
ratio across five strata of people's overall agreement, counting every vote)
finds no pair that passes, and none that comes close, so the page has no allies
section, and the notes say so in one line.

## Hover cards

Hover-card examples follow the rule used on every results page, across the
three groups. The candidates are the 29 statements where the groups took
opposite sides. For each group a person voted like, the card can show one
statement the person voted on the same way as that group, preferring, in
order: a statement the person agreed with over one they disagreed with; the
one that group most widely shared (the share of the group on its side, as a
95% Wilson lower bound, so small samples count for less); the one more of that
group voted on; then the lower statement number. A statement picked for two
groups is shown once. Nothing is chosen or removed by hand. The page's notes
say this in plain words.

`DATA` (the map rows and hover texts, in the `page-data` script tag), the
content below the map (the pairs, the shared list and the priority vote, in
`PAIRS`, `SHARED` and `QV`) and every figure in the text (each element marked
`data-k`) are generated from the export and the ballot file; the wording
around them is edited in the page directly. The group names and the hero
labels' lines are set in one place in the generator. The scripts and the
frozen export live outside the repository. Every figure, quote and hover-card
value is checked against the export before each push.

## Layout

The page width is in rem (`.wrap{max-width:77.5rem}`), as on the other
migration results pages.

- The hero carries the headline, Jess Scully's intro for every migration
  results page (in its own paragraph, styled like the sentence after it), one
  sentence on the divide and the shared ground (ending with what the priority
  vote put first), the two buttons and the turnout ("… 154 people have taken part · 131 in a group"). On the right
  sits one label per group: its size in people, its name and one plain line
  from its own defining statements, each linking to its group card
  (`#group-1` to `#group-3`). The circle with the headline figure, its ring in
  bands of the groups' colours, sits against the labels and links to where the
  groups agree (`#agree`). It never covers text.
- The groups section opens with the map, then the three group cards, then the
  caveat. The page then runs: where the groups agree, the six changes people
  want most, how this worked (with the notes) and what happens next.
- The headline is three set lines ("Wentworth wants" / "joined-up planning" /
  "for migration"), the middle one boxed in rose. It is sized from its column
  (`min(10.6cqi, 9vh, 4.6rem)`) and never wraps.
- The hero's two paragraphs are long, so short windows get less space above
  the hero, then a smaller headline and smaller paragraphs, in steps (under
  50em, 46em, 38em, 32em and 27em tall, smaller again under 62.5em wide). The
  buttons stay on the first screen at 1728×966, 1280×720, 1180×820 and
  1024×768 with 20px text and at the usual laptop sizes; on narrow, short
  windows (1024×700 and smaller) they fall just below it.
- The map's height follows the highest pile.
- A notes row's paragraphs all sit in its right-hand column.

Check any hero change at 1728×966, 1280×720, 1180×820 and 1024×700 with a
20px default text size, at 1440×790, 1366×650 and 1536×730, and on a 375px
phone.

This file is excluded from the build via `.eleventyignore`.

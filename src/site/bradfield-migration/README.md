# /bradfield-migration — Bradfield community conversation on migration

Standalone single-page microsite presenting the **preliminary** results of the
Bradfield community conversation on migration, run by the RadicalxChange
Foundation with Nicolette Boele MP, Federal Member for Bradfield (online
conversation open since 2 November 2026; priority vote at a community session
on 3 November 2026).

Like the other migration results pages, this page shares **nothing** with the
rest of the site: it does not extend `layouts/_base.njk`, and carries its own
`<style>`, inline `<script>`, header and footer, framed by the shared RxC
breadcrumb and footer bars (`.rxc-shell`). `index.njk` is raw HTML wrapped in
`{% raw %}`; the only Eleventy features used are the front matter and the
site-wide posthtml transform. Fonts come from Google Fonts: Bebas Neue for
headings, as on the MP's site, and Montserrat for text (the site's own
stand-in for its Avenir). The colours follow the MP's site: teal `#125b67`,
dark teal `#0a353c`, a pale grey-teal `#e1e9ea` and a coral accent `#fc6868`.
Coral only appears behind dark teal type (white on coral is too faint), and it
never marks a group or the change most voters opposed. The three groups use
gold, a fainter gold and violet, none of them the MP's colours. Groups 1 and 2
came out of the same Polis group, so they share the gold: Group 1 keeps
`#a97c0c` (`#bb8b1a` in dark mode), Group 2 has the fainter shade (`#dbac4e`,
lighter on white; `#7c5a02`, deeper on the dark card), and Group 3 keeps the
violet. All three pass the dataviz palette check against the map card in both
modes, across all pairs; Group 2's contrast with the card is under 3:1, so
every group is also named in words wherever its colour appears. The page has
light and dark modes.

Its link-preview image is `src/site/assets/bradfield-migration-og.png`
(1200×630, referenced by the `og:image` and `twitter:image` tags). It was
rendered from the page's own fonts and copy: the boxed headline, "422 people
took part", and two of the statements all three groups agreed with
(statements 100 and 136). If the headline, the turnout or those statements change, regenerate
it.

## While the results are preliminary

- The page carries `<meta name="robots" content="noindex">` and
  `eleventyExcludeFromCollections: true`, which keeps it out of the sitemap.
  Remove both when the results are final.
- It is not linked from /projects, the home page or anywhere else.
- The status line reads "Preliminary results, data to 1:37pm AEDT, 18
  November 2026". Update it with each new export.
- The credit line, the Acknowledgement of Country (a placeholder for now) and
  the "What happens next" line wait for the office's confirmation.

## What is counted

- **Statements:** only the 339 statements people could vote on: 36 starter
  statements and 303 written by people taking part. 214 others were held back
  by the moderators before anyone else voted on them; they are not counted or
  shown.
- **People:** the 422 people who voted on at least one of those statements,
  casting 36,371 votes. Polis's own count (425) also includes 3 accounts whose
  only votes were on their own held-back statements. The starter account never
  voted.
- **Groups:** three, numbered left to right along the map. Polis finds two
  groups; inside its larger one, people split clearly on several questions (see
  "How we found three groups"), so the page shows that group as two: Group 1
  "Migration works" (218 people), Group 2 "Works, but slower" (61) and Group 3 "Fewer,
  chosen more carefully" (65, Polis's smaller group). As on the other migration
  results pages, someone whose every vote was a pass is not placed in a group.
  78 people are not in a group: 72 voted on too few statements for Polis to
  place them, and 6 whom Polis placed (2 in its larger group, 4 in its smaller)
  never agreed or disagreed with any statement.
- **Who stays in the groups:** 6 people voted on enough statements for Polis
  to place them but cast nothing but passes. They count as taking part, but a
  pass doesn't show where someone stands, so they are in no group (Polis places
  them because it reads a pass as halfway between agree and disagree). 4 more
  cast only passes, on 1 to 5 statements, too few for Polis to place them. People who passed on most statements but agreed
  or disagreed with at least one stay in their Polis groups: 6 grouped people
  passed on at least 9 in 10 of the statements they voted on (5 in Group 3,
  1 in Group 2), and their passes lower their group's figures; the notes say so
  and give an example. One person wrote 26 statements in one sitting and voted
  only on their own; they are in Group 2. Eight people's only vote was the
  agreement Polis records when someone adds a statement; they count as taking
  part but are not in a group.
- **Percentages:** the share of a group who agreed, out of those in the group
  who voted on the statement (passes count as votes). Where fewer than 20 in a
  group voted, the page shows how many.
- **Shared statements:** at least 70% agreement in all three groups, with at
  least 10 voters in each: 12 statements, all listed in the fold under the
  pairs. Group 2 voted on fewer of the later statements, so many fall below its
  10-voter floor. Each of the five pairs is titled by what all three groups
  back, and its halves are labelled "They disagree on" and "But all three
  back", so the card reads as one sentence. A "They disagree on" statement has
  10+ voters in each group, a 30-point spread and a majority on one side.
- **Statements where the groups took opposite sides:** at least one group's
  majority agreed and another group's majority disagreed (a group needs 8 or
  more voters on a statement to take a side): 71 statements. The hover cards
  count each person's votes on these.
- **Group names:** from the names ladder the migration results pages share,
  so a name means the same position on each of them.
- **Group cards:** one per group, one under another, after the map. Groups 1
  and 3 ("What sets them apart") show three statements most of the group
  agreed with and far fewer of both other groups did (35% or less), ranked by
  the gap to the nearer group, with every group's share, one per line. Only
  four statements set Group 3 apart from both others, and three of them have
  one writer, who also wrote a "But all three back" statement; Group 3's card
  shows its top three, so that writer has three of the statements picked for
  the page (cards, pairs and priority echoes; nobody else has more than two),
  because the third is clearly the next best (a 42-point gap, against 28 for
  the best statement by anyone else). Group 2's card, "Where they stand", has a
  column for each neighbour it sides with (two statements each, 60%+ in both,
  the other group 35% or less) and, across both, the one statement it backs
  more than both other groups on 20+ voters (statement 26). RadicalxChange
  chose them; the page's notes say so.
- **Priority vote:** ballots that used fewer than 10 credits are set aside
  (there were none), names are matched ignoring capitals and spacing, and
  where someone voted more than once their last ballot counts: 49 voters. The
  voting site stores no times, but its database records the order ballots
  arrived in, which shows each person's last ballot; that order was read
  without copying any names. Net votes are votes for minus votes against. The
  chart shared after the session shows 51 voters because it matches names
  exactly and keeps each person's fullest ballot; the top four are the same
  either way, in the same order. Each of the top six cards leads with its net votes,
  since they set the order, with one bar on a shared scale (the top change is
  full width) and the backers and opposers as a small line under it. The
  clear-no card shows its net alone, and the other six in the fold lead with
  their nets. The matching conversation statements are close in meaning, not
  identical in wording; the employer ban has no close match, so its card shows
  none.

## The map

The map is one row along the main divide: the first principal component of
the vote matrix, computed the way Polis does (centred on each statement's
mean, missing votes left at the mean, and each person's projection scaled up
by how few statements they voted on). Recomputed two-way groups agree with
Polis's for 311 of 344 people; the people they differ on sit nearest the
border, inside Polis's larger group. Near that border, Group 2's and Group 3's
dots mix, because Polis places people using more than this one line.

The dots are drawn as rounded heaps: each dot drops near its true place on the
line and settles in the lowest free spot nearby, paying for every step it
moves sideways (a spot's cost is its height plus 0.9 times its shift). No dot
rolls across the cut where Group 2 begins (`DATA.cut`, not drawn), so the two
golds don't mix. Left of the cut the dots drop from it outwards and may roll up
to three dot widths back towards it but only 1.25 further out; right of it they
drop left to right with the same reach. So crowded stretches pile up like sand
rather than standing in columns, and nothing walls up against the cut. Each
group's name, colour dot and count sit over its own heap, all on one line and
kept apart: the name with its dot, and "Group k · N people" under it. Where
the three can't fit side by side, they fall back to "Group k" over "N people";
on maps under 640px wide they show "Group k" only.
Maps under 640px wide use smaller dots and let them roll up to six dot widths
at 0.6, so phone piles are less steep.

## How we found three groups

Polis finds the main divide: two groups. Inside its larger group, people split
clearly on several questions, so the page shows that group as two, Groups 1
and 2, which makes three. The split is found the way the stance analysis looks
for stances: going along Polis's larger group from the border, cuts are tried
every 1% from 20% to 80% of the group, and the cut is placed where the most
statements flip (at least 65% agreeing on one side and at most 35% on the
other, at least 10 voters a side, and z of at least 3.3). That gives 61 people
(Group 2) and 25 statements; Group 2 voted on a median of 34 statements and
Group 1 on 80, and shuffled orders never produced more than one such
statement. Before 19 November the page showed this as a closer look inside one
group, with a dashed line, a bracket and a key; they are gone.

Inside Group 3 the same search does find a split, but all 5 people in Group 3
who passed on at least 9 in 10 of their statements sit near the border, and
the test counts a pass as not agreeing. Without them, only four statements
split the group, too few to show it as two groups. The page's notes give every
figure.

## Unlikely allies

A test for unlikely allies across the groups pairs the statements all three
groups split on at similar rates (10+ voters and 30% to 70% agreeing in each
group, within 15 points), and asks whether the same people back both, allowing
for people who agree with most things (a Mantel-Haenszel odds ratio across five
strata of people's overall agreement; a pair passes with an odds ratio of at
least 4, z of at least 3.3, 10+ backers, and 8+ backers in each of at least two
groups). With three groups, 8 statements qualify, and the only pairs that pass
say one thing in different words (social cohesion mattering more than
migration numbers: statements 76, 227 and 235). None holds up as an alliance,
so the page has no allies section, and the notes say so in one line.

## Hover cards

Hover-card examples follow the rule used on every Teals results page, applied
across three groups. Each person's card shows up to three of their votes: one
for each group they voted like. The candidates are the 71 statements where
the groups took opposite sides, limited to those the person voted on the same
way as that group. The card prefers, in order: a statement the person agreed
with over one they disagreed with; the one that group most widely shared (the
share of the group on its side, as a 95% Wilson lower bound, so small samples
count for less); the one more of that group voted on; then the lower statement
number. A statement picked for two groups is shown once ("Like Group 2 and
Group 3"). The card also shows, as three rows with bars, how often the person
voted like each group; a vote can match two groups. Nothing is chosen or removed by hand. The page's notes
say this in plain words.

`DATA` (the map rows and hover texts, in the `page-data` script tag),
the `SHARED` list and the priority vote (`QV`, `VOTERS` and the clear-no card)
are generated from the export and the ballot file; everything else is edited in
the page directly. The scripts and the frozen export live outside the
repository. Every figure, quote and hover-card value is checked against the
export before each push.

## Layout

The page width is in rem (`.wrap{max-width:77.5rem}`), and the hero has the
same layout as on the other migration results pages.

- No quote cards and no at-a-glance row: the hero's right side has one label
  per group (its number and size, its name and a one-line description in
  plain words from statements most of the group agreed with), each linking
  down to its card (`#group-1` to `#group-3`). Each link sits in its own list
  item; the circle is a separate link whose words are in its label for screen
  readers. The labels are white in both modes, so their small text keeps a
  fixed dark grey. The descriptions rest on
  statements 8 and 22 (Group 1), 30 and 3 (Group 2), and 3 and 177 (Group 3).
  The turnout line adds how many are in a group: "· 344 in a group".
- The circle reads "More than 7 in 10 in all three groups want housing and
  infrastructure to keep pace with population". It cites statement 103
  (governments planning housing and infrastructure for population growth
  before shortages emerge), which at least 73% of each group agreed with, on
  21 or more voters in each; statement 100 says much the same, but its Group 2
  figure rests on 17 people, and the first pair already shows it. It sits
  against the labels on the right and links to the
  agreement section (`#agree`). Its ring is in bands: Group 1's colour on top,
  Group 2's at the sides and Group 3's underneath. On phones it follows the
  labels, centred. It never covers the labels' text.
- The circle's number is set at 2.1rem and its lines at a 1.1 line height, so
  every line stays well inside the coral disc at 16px and 20px text.
- With 20px text the labels fit the first screen at 1728×966, 1280×720,
  1180×820 and 1024×700.
- The hero sentence runs the full width of its column.
- The headline is three set lines ("Bradfield wants" / "homes and services
  planned" / "for migration"), the middle one boxed in teal like the labels on
  the MP's site. The longest line, box included, is 10.05em wide in Bebas Neue,
  so the headline is sized from its column (`min(9.8cqi, 11vh, 6.4rem)`) and
  never wraps.
- Short windows (under 46em tall, which is 736px at the standard text size
  and 920px at a 20px default) get a smaller headline (`9.6vh`) and lede, so
  the buttons stay on the first screen.
- The map's height follows the highest pile, so it grows on narrow screens,
  where the dots are larger relative to the width.

Check any hero change at 1728×966 with a 20px default text size, 1440×790,
1366×650, 1536×730, 1280×720, 1180×820, 1024×700 and a 375px phone: the
buttons and labels stay on the first screen, no line of a label falls under
the circle, and the labels don't overlap.

The page runs: hero, groups (the map, then the cards, then the caveat),
agreement (its fold shows each statement's three shares on one track),
priorities, how this worked with the notes, and what happens next.

This file is excluded from the build via `.eleventyignore`.

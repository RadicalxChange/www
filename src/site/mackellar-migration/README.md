# /mackellar-migration — Mackellar community conversation on migration

Standalone single-page microsite presenting the **preliminary** results of the
Mackellar community conversation on migration, run by the RadicalxChange
Foundation with Dr Sophie Scamps MP, Federal Member for Mackellar (online
conversation open since 30 October 2026; priority vote at a community session
on 19 November 2026).

Like the other migration results pages, this page shares **nothing** with the
rest of the site: it does not extend `layouts/_base.njk`, and carries its own
`<style>`, inline `<script>`, header and footer, framed by the shared RxC
breadcrumb and footer bars (`.rxc-shell`). `index.njk` is raw HTML wrapped in
`{% raw %}`; the only Eleventy features used are the front matter and the
site-wide posthtml transform. It is built from the Wentworth page's code, the
newest build of the format every migration results page shares.

Fonts come from Google Fonts: Roboto throughout, as on the MP's site. The
colours follow the MP's site: the light blue of its navigation bar (`#92C7EA`)
for the hero, the "they agree" halves and the closing section, its navy
(`#004270`) for type on them, the boxed headline line, the buttons, the circle,
the clear-no card and the section listing where the groups agree, and its pale
blue (`#E7F0FA`) for the tinted section. Its yellow (`#FFDD69`) appears only
on the closing "Thank you, Mackellar" sticker, away from the groups' golds.
The three groups use gold, a lighter gold and violet, the same values as the
Bradfield page, whose middle group is also on the welcoming side of the main
divide. They pass the dataviz palette checks in both modes; the one contrast
warning in each mode is covered by labels, since every group is named wherever
its colour appears. No red marks a group or the change most voters opposed.
The page has light and dark modes; the hero and the closing section keep their
light blue in both, and the hero's white group labels keep their light-mode
text.

Its link-preview image is `src/site/assets/mackellar-migration-og.png`
(1200×630, referenced by the `og:image` and `twitter:image` tags). It was
rendered from the page's own fonts and copy: the boxed headline, "77 people
took part", the three groups with their sizes, and the circle's figure. If the
headline, the turnout, the groups or the circle change, regenerate it.

## While the results are preliminary

- The page carries `<meta name="robots" content="noindex">` and
  `eleventyExcludeFromCollections: true`, which keeps it out of the sitemap.
  Remove both when the results are final.
- It is not linked from /projects, the home page or anywhere else.
- The status line reads "Preliminary results, data to 12:35pm AEDT, 20
  November 2026" (the Polis export of 2026-11-20T01:35:24Z). Update it with
  each new export.
- The credit line, the Acknowledgement of Country and the "What happens next"
  line (placeholders for now) wait for the office's wording.

## What is counted

- **Statements:** only the 144 statements people could vote on: 36 starter
  statements and 108 written by people taking part. The moderators held back
  60 others; no one but their authors voted on them, and they are not counted
  or shown.
- **People:** the 77 people who voted on at least one of those statements,
  casting 7,106 votes. Polis's own count is 79: it also counts two people whose
  only votes were on their own statements, which the moderators held back. The
  starter account never voted.
- **Groups (20 / 31 / 19):** Polis found three groups itself, the only
  migration conversation where it did (it found two in the other five). The
  page shows them as Polis drew them, numbered left to right along the map:
  Group 1 "Migration works" (Polis's group 2, 20 people), Group 2 "Works, if
  housing keeps up" (group 1, 31) and Group 3 "Fewer, but flexible" (group 0,
  19). "Migration works" and "Fewer, but flexible" are names used on every
  migration results page, each meaning the same position. Group 2 fits none of
  the four shared names (63% agree that migration keeps their community going,
  under the three in four the first name needs, and 29% that too many have
  arrived too quickly, where the second needs most), so it has a fifth name of
  its own. Each group's one-line description in the
  hero comes from its own defining statements. 7 people are not in a group:
  they voted on one or two statements, too few for Polis to place them. One of
  them only passed, and one person's only vote was the agreement Polis records
  when someone adds a statement. Nobody Polis placed only passed, so the rule
  that leaves such people out of the groups changes nothing here, and nobody in
  a group passed on 9 in 10 or more of their votes.
- **Percentages:** the share of a group who agreed, out of those in the group
  who voted on the statement (passes count as votes). Where fewer than 20 in a
  group voted, the page shows how many; Group 3 has 19 people, so every Group 3
  figure shows it, and Group 1 has 20, so most of its figures do too. Shown
  percentages round halves up, and the 7-in-10 bar for shared statements is
  applied before rounding.
- **Statements all three groups agreed with:** at least 70% agreement in each
  of the three groups, with at least 10 voters in each: 31 statements, all
  listed in the fold under the pairs. (With two groups along the main divide it
  would be 42.) Each of the five pairs is titled by what all three groups back,
  and its halves are labelled "They disagree on" and "But all three back". The
  circle's figure uses statement 159, the one with the highest lowest share
  (14 of 14, 21 of 22 and 13 of 14 agreeing). The headline and the sentence
  rest on it and on statements 101 and 145, also backed by at least 7 in 10 in
  every group; written on the night, they have 11 to 14 voters in Groups 1 and 3.
- **Statements where the groups took opposite sides:** one group's majority
  agreed and another's majority disagreed, with at least 8 voters in each of
  those groups: 22 statements. The hover cards count each person's votes on
  these.
- **Group cards:** Group 1's and Group 3's each show the three statements most
  of the group agreed with, ranked by the gap to the nearer other group (with
  at least 10 voters in each group). Groups 1 and 2 share a great deal, so only
  the first statement on Group 1's card puts it 30 or more points ahead of both
  others; the page's note says the other groups "lagged furthest behind"
  rather than "far fewer". Group 2's card shows two statements where it sides
  with Group 1, two where it sides with Group 3, and one it backed more than
  both (on 20+ voters in Group 2). RadicalxChange chose the statements, and the
  page's notes say so.
- **Priority vote:** 48 ballots using 4,407 credits; none used fewer than 10
  credits, so none is set aside. Names are matched ignoring capitals and
  spacing, and where someone voted more than once their last ballot counts:
  39 voters (seven people voted more than once). The voting site stores no
  times, but its database records the order ballots arrived in, which shows
  each person's last ballot; that order was read without copying any names.
  Net votes are votes for minus votes against; no two of the top six have the
  same net. The matching conversation statements are the starter statements
  written on the same ideas, and for the employer ban a resident's statement
  that employers who abuse their power should face harsh penalties; close in
  meaning but not identical in wording. A card says "The groups split on this
  one" only when two groups are 30+ points apart, on opposite sides of 50%
  agreeing, with 10+ voters in each; where the lower group had at least as
  many agreeing as disagreeing, it says that group was divided. Here the
  university and English-class cards say the groups split. Faster removals
  has no close match in this conversation, but it is seventh, so its card
  isn't shown.

## The map

The map is one row along the main divide: the first principal component of
the vote matrix, computed the way Polis does (centred on each statement's
mean, missing votes left at the mean, and each person's projection scaled up
by how few statements they voted on). It explains 13% of the variation in the
votes, against 9% for the next dimension; the gap is smaller than in the other
seats. Recomputed three-way groups agree with Polis's for all 70 people.

Polis places people using more than this one line, and here the groups overlap
on it: Groups 1 and 2 a lot, Groups 2 and 3 a little. What separates Groups 1
and 2 is mainly a second question, whether to set migration numbers by
housing and services, so their dots mix in the middle of the map, and the
notes say why. There is no boundary line between any two groups.

The dots are drawn as rounded heaps: each dot drops near its true place on the
line and settles in the lowest free spot within a few dot widths, paying for
every step it moves sideways, so crowded stretches pile up like sand rather
than standing in columns. With 70 people in the groups, the fewest of any
seat, the dots are larger than on the other pages (9px, or 4.6px in the phone
layout), so the heaps still show.

## How the three groups were found

Polis tries two, three, four and five groups (k-means clustering on its map of
people) and keeps the number that separates people most clearly (a silhouette
score). Recomputed here, three groups score 0.43, two 0.42, four 0.43 and five
0.40: three only just beat two, so as more people join, Polis could settle on
two. If the final export gives two groups, the page becomes a two-group page:
"Migration works" and "Fewer, but flexible" along the main divide. The
headline and the circle hold either way (statement 159 is backed by 97% and
93% of those two groups).

The groups differ clearly by the thresholds of the stance test used on every
page (a statement splits two groups when at least 65% of one agree and at most
35% of the other, with at least 10 voters in each and a two-proportion z of at
least 3.3): Groups 1 and 2 on four statements (110, 126, 156 and 171), Groups 2
and 3 on six (27, 34, 45, 47, 59 and 103), and Groups 1 and 3 on ten. In 1,000
random reshuffles of each pair's members into groups of the same sizes (a
permutation test, seeded so it can be rerun), no reshuffle found more than
two. Four statements is what the Bradfield and Kooyong pages call too few to
show one of Polis's groups as two; here the groups are Polis's own, and the
page adds or merges none. The stance test inside Polis's welcoming side
(Groups 1 and 2 together, along the main divide) finds no clear split: two
statements, against up to three in random orders. Group 2 also agrees with
more of the statements than either other group (a median of 74% of those its
members vote on, against 58% in Group 1 and 63% in Group 3), and the second
dimension tracks how often people agree.

The test for unlikely allies, applied across the three groups (statements with
at least 10 voters and 30% to 70% agreeing in each group; only people who
agreed or disagreed with both statements in each pair; a Mantel-Haenszel odds
ratio across five strata of people's overall agreement, counting every vote)
finds no pair that passes among 55, and none that comes close (the strongest
link has an odds ratio of 6.0 and z of 2.0, against a bar of 4 and 3.3), so
the page has no allies section, and the notes say so in one line.

## Hover cards

Hover-card examples follow the rule used on every results page, across the
three groups. The candidates are the 22 statements where the groups took
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

- The hero carries the headline, the intro shared by every migration
  results page (in its own paragraph, styled like the sentence after it), one
  sentence on the divide and the shared ground, the two buttons and the
  turnout ("… 77 people have taken part · 70 in a group"). On the right sits
  one label per group: its size in people, its name and one plain line from
  its own defining statements, each linking to its group card (`#group-1` to
  `#group-3`). The circle with the headline figure, its ring in bands of the
  groups' colours, sits against the labels and links to where the groups agree
  (`#agree`). It never covers text.
- The groups section opens with the map, then the three group cards, then the
  caveat. The page then runs: where the groups agree, the six changes people
  want most, how this worked (with the notes) and what happens next.
- The hero follows the one standard shared by every migration results page
  (pasted at the end of the page's CSS): text sizes and spacing follow the
  window height, the hero fills the first screen with its content centred,
  the buttons stay on one row on wide layouts and stack at full width on
  phones. The page sets only its headline fit, `--h1-fit:10.6cqi`, at which
  the boxed line fills 94% of the text column.
- The headline is two set lines ("Mackellar wants" / "an end to visa limbo"),
  the second boxed in navy, and never wraps.
- The buttons, the labels and the circle are on the first screen at 1728×966,
  1440×790, 1280×720, 1180×820 and 1024×700 with 20px text, and at 1728×966,
  1536×730, 1440×790, 1366×650, 1280×720 and 1024×700 at the standard text
  size, with the buttons on one row; so is the turnout line, except at
  1024×700 with 20px text, where it falls just below (as on the other pages).
  In narrow, short windows with 20px text (960×700 and 901×650) the buttons
  can fall just below it too.
- The map's height follows the highest pile.
- A notes row's paragraphs all sit in its right-hand column.

Check any hero change at 1728×966, 1280×720, 1180×820 and 1024×700 with a
20px default text size, at 1440×790, 1366×650 and 1536×730, and on a 375px
phone.

This file is excluded from the build via `.eleventyignore`.

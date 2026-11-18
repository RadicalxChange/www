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
never marks a group or the change most voters opposed. The two groups use gold
and violet, of equal weight and neither of them the MP's colours. The page has
light and dark modes.

Its link-preview image is `src/site/assets/bradfield-migration-og.png`
(1200×630, referenced by the `og:image` and `twitter:image` tags). It was
rendered from the page's own fonts and copy: the boxed headline, "422 people
took part", and two of the statements both groups agreed with (statements 100
and 136). If the headline, the turnout or those statements change, regenerate
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
- **Groups:** Polis's own groups, except that someone whose every vote was a
  pass is not placed in a group, as on the other migration results pages:
  Group 1 "Migration works" (279 people) and Group 2 "Fewer, chosen more
  carefully" (65). 78 people are not in a group: 72 voted on too few statements
  for Polis to place them, and 6 whom Polis placed (2 in its Group 1, 4 in its
  Group 2) never agreed or disagreed with any statement.
- **Who stays in the groups:** 6 people voted on enough statements for Polis
  to place them but cast nothing but passes. They count as taking part, but a
  pass doesn't show where someone stands, so they are in no group (Polis places
  them because it reads a pass as halfway between agree and disagree). 4 more
  cast only passes, on 1 to 5 statements, too few for Polis to place them. People who passed on most statements but agreed
  or disagreed with at least one stay in their Polis groups: 6 grouped people
  passed on at least 9 in 10 of the statements they voted on (5 of them in
  Group 2), and their passes lower their group's figures; the notes say so and
  give an example. One person wrote 26 statements in one sitting and voted only
  on their own; Polis placed them in Group 1. Eight people's only vote was the
  agreement Polis records when someone adds a statement; they count as taking
  part but are not in a group.
- **Percentages:** the share of a group who agreed, out of those in the group
  who voted on the statement (passes count as votes). Where fewer than 20 in a
  group voted, the page shows how many.
- **Shared statements:** at least 70% agreement in both groups, with at least
  10 voters in each: 24 statements, all listed in the fold under the pairs.
  Each of the five pairs is titled by what both groups back, and its halves
  are labelled "They disagree on" and "But both back", so the card reads as
  one sentence.
- **Statements where the groups took opposite sides:** one group's majority
  agreed and the other's majority disagreed, with at least 8 voters in each
  group: 59 statements. The hover cards count each person's votes on these.
- **Group cards:** each shows three statements most of the group agreed with
  and far fewer of the other group did, chosen by RadicalxChange. The page's
  notes say so.
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
border, inside Group 1. Near the border the two groups' dots mix, because
Polis places people using more than this one line.

The dots are drawn as rounded heaps: each dot drops near its true place on the
line and settles in the lowest free spot nearby, paying for every step it
moves sideways (a spot's cost is its height plus 0.9 times its shift). Left of
the divider the dots drop from the divider outwards and may roll up to three
dot widths back towards it but only 1.25 further out; right of it they drop
left to right with the same reach. So crowded stretches pile up like sand
rather than standing in columns, and nothing walls up against the divider.
Maps under 640px wide use smaller dots and let them roll up to six dot widths
at 0.6, so phone piles are less steep.

## A closer look inside Group 1

The map's labels have two levels, so its colours and names tell one story.
Across the top, each group's name, colour dot and count sit over its own
stretch; Group 1's name sits over a bracket spanning the group. Under that
bracket, a dashed line marks where Group 1's part nearest the border begins,
and the two parts are named either side of it: "Works" (218 people) and
"Works, but slower" (61). The key under the map follows the same two levels.
They are a closer look inside Group 1, not new groups: the dots keep their
group colours, and no dot rolls across the line. On maps under 640px wide the
group names shorten to "Group 1" and "Group 2" and the two parts become
lettered badges (A and B), with the letters in the key.

The part nearest the border is found the way the stance analysis looks for
stances: going along Group 1 from the border, cuts are tried every 1% from 20%
to 80% of the group, and the cut is placed where the most statements flip (at
least 65% agreeing on one side and at most 35% on the other, at least 10
voters a side, and z of at least 3.3). That gives 61 people and 25 statements;
the 61 voted on a median of 34 statements and the other 218 on 80, and
shuffled orders never produced more than one such statement. The line sits
halfway between the last of the 218 and the first of the 61 (`DATA.cut`).

Inside Group 2 the same search does find a split, but all 5 people in Group 2
who passed on at least 9 in 10 of their statements sit near the border, and
the test counts a pass as not agreeing. Without them, only four statements
split the group, too few for a closer look. The page's notes give every figure, and the checker tests each
claim in the key's descriptions.

## Unlikely allies

A test for unlikely allies across the divide pairs the statements both groups
split on at similar rates (30% to 70% agreeing in each, within 15 points), and
asks whether the same people back both, allowing for people who agree with
most things (a Mantel-Haenszel odds ratio across five strata of people's
overall agreement; a pair passes with an odds ratio of at least 4, z of at
least 3.3, and at least 8 backers in each group). The pairs that pass either
say the same thing in different words (social cohesion mattering more than
migration numbers; universities housing their students) or join statements
most people in both groups already back. None holds up as an alliance, so the
page has no allies section, and the notes say so in one line.

## Hover cards

Hover-card examples follow the rule used on every Teals results page. Each
person's card shows up to two of their votes: one where they voted like
Group 1 and one where they voted like Group 2. The candidates are the 59
statements where the groups took opposite sides, limited to those the person
voted on the same way as that group. The card prefers, in order: a statement
the person agreed with over one they disagreed with; the one that group most
widely shared (the share of the group on its side, as a 95% Wilson lower bound,
so small samples count for less); the one more of that group voted on; then
the lower statement number. Nothing is chosen or removed by hand. The page's
notes say this in plain words.

`DATA` (the map rows and hover texts, in the `page-data` script tag),
the `SHARED` list and the priority vote (`QV`, `VOTERS` and the clear-no card)
are generated from the export and the ballot file; everything else is edited in
the page directly. The scripts and the frozen export live outside the
repository. Every figure, quote and hover-card value is checked against the
export before each push.

## Layout

The page width is in rem (`.wrap{max-width:77.5rem}`), and the hero has the
same layout as on the other migration results pages.

- Two quote cards, one from each group, Group 1's first: statement 225 for
  Group 1 and statement 277 for Group 2, each written by a different person
  taking part and quoted word for word. Each was agreed with by at least 70%
  of its own group and at most 35% of the other. Each card is labelled with
  its group's name and edged in its colour.
- The sticker sits between the two cards in the markup, ringed half in each
  group's colour. On wide screens it joins the two cards at the seam, on the
  right; on narrow laptops and phones it sits between them, centred. It never
  covers the cards' text.
- The ring leaves a coral disc 12px narrower than the circle, so the
  sticker's number is set at 2.1rem and its lines at a 1.1 line height. Every
  line stays at least 4px inside the disc, at 16px and 20px text.
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
buttons stay on the first screen, no line of a quote card falls under the
circle, and the two cards don't overlap.

This file is excluded from the build via `.eleventyignore`.

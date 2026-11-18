# /kooyong-migration — Kooyong community conversation on migration

Standalone single-page microsite presenting the **preliminary** results of the
Kooyong community conversation on migration, run by the RadicalxChange
Foundation with Dr Monique Ryan MP, Federal Member for Kooyong (online
conversation open since 9 November 2026; priority vote at a community session
on 9 November 2026).

Like the other migration results pages, this page shares **nothing** with the
rest of the site: it does not extend `layouts/_base.njk`, and carries its own
`<style>`, inline `<script>`, header and footer, framed by the shared RxC
breadcrumb and footer bars (`.rxc-shell`). `index.njk` is raw HTML wrapped in
`{% raw %}`; the only Eleventy features used are the front matter and the
site-wide posthtml transform. Fonts come from Google Fonts: Outfit for
headings and Open Sans for text, as on the MP's site. The colours follow the
MP's site: deep indigo `#190d51` for headings, buttons and the stickers, bright
teal `#00b4ce` for the boxed headline line and accents, and pale teal
`#ccf0f5` for the hero and the closing section. The two groups use gold and
violet, of equal weight and neither of them the MP's colours. Because the MP's
palette sits close to the violet used on other pages, Group 2's violet here is
a little warmer (`#8a4fd0`), and violet never sits on an indigo or lavender
ground: both group cards share one neutral grey, the section listing where the
groups agree is a dark teal, and dark mode uses teal-slate surfaces. No red
marks a group or the change most voters opposed. The page has light and dark
modes; the hero and the closing section keep their pale teal in both.

Its link-preview image is `src/site/assets/kooyong-migration-og.png`
(1200×630, referenced by the `og:image` and `twitter:image` tags). It was
rendered from the page's own fonts and copy: the boxed headline, "102 people
took part", and two statements most people in both groups agreed with (107
and 36). If the headline, the turnout or those statements change, regenerate
it.

## While the results are preliminary

- The page carries `<meta name="robots" content="noindex">` and
  `eleventyExcludeFromCollections: true`, which keeps it out of the sitemap.
  Remove both when the results are final.
- It is not linked from /projects, the home page or anywhere else.
- The status line reads "Preliminary results, data to 5:08am AEDT, 19
  November 2026". Update it with each new export.
- The credit line, the Acknowledgement of Country (a placeholder for now) and
  the "What happens next" line wait for the office's confirmation.

## What is counted

- **Statements:** only the 169 statements people could vote on: 36 starter
  statements and 133 written by people taking part. The moderators held back
  14 others, and 2 more were waiting for review; no one but their authors
  voted on them, and they are not counted or shown.
- **People:** the 102 people who voted on at least one of those statements,
  casting 9,992 votes. This matches Polis's own count. The starter account
  never voted.
- **Groups:** Polis's own groups, except that someone whose every vote was a
  pass is not placed in a group, as on the other migration results pages:
  Group 1 "Migration works" (61 people) and Group 2 "Fewer, chosen more
  carefully" (28). 13 people are not in a group: 12 voted on too few
  statements for Polis to place them (one of them only passed, on 2
  statements, and one person's only vote was the agreement Polis records when
  someone adds a statement), and 1 whom Polis placed in its smaller group
  passed on all 43 statements they voted on. A pass doesn't show where
  someone stands; Polis places such people because it reads a pass as halfway
  between agree and disagree.
- **Percentages:** the share of a group who agreed, out of those in the group
  who voted on the statement (passes count as votes). Where fewer than 20 in a
  group voted, the page shows how many.
- **Shared statements:** at least 70% agreement in both groups, with at least
  10 voters in each: 21 statements, all listed in the fold under the pairs.
  Each of the five pairs is titled by what both groups back, and its halves
  are labelled "They disagree on" and "But both back", so the card reads as
  one sentence.
- **Statements where the groups took opposite sides:** one group's majority
  agreed and the other's majority disagreed, with at least 8 voters in each
  group: 35 statements. The hover cards count each person's votes on these.
- **Group cards:** each shows three statements most of the group agreed with
  and far fewer of the other group did, chosen by RadicalxChange: statements
  about what each group wants, including what it values. The page's notes say
  so.
- **Priority vote:** ballots that used fewer than 10 credits are set aside
  (one, which was empty), names are matched ignoring capitals and spacing, and
  where someone voted more than once their last ballot counts: 52 voters. The
  voting site stores no times, but its database records the order ballots
  arrived in, which shows each person's last ballot; that order was read
  without copying any names. Net votes are votes for minus votes against; no
  two changes have the same net. The chart shared after the session shows 54
  voters because it matches names exactly and keeps each person's fullest
  ballot (the first listed where two used the same credits); the top six are
  the same either way, in the same order. Each of the top six cards leads with
  its net votes, since they set the order, with one bar on a shared scale (the
  top change is full width) and the backers and opposers as a small line under
  it. The clear-no card shows its net alone, and the other six in the fold
  lead with their nets. The matching conversation statements are the starter
  statements written on the same ideas, close in meaning but not identical in
  wording; the employer ban has no close match, so its card says so.

## The map

The map is one row along the main divide: the first principal component of
the vote matrix, computed the way Polis does (centred on each statement's
mean, missing votes left at the mean, and each person's projection scaled up
by how few statements they voted on). It explains 21% of the variation in the
votes, against 6% for the next dimension. Recomputed two-way groups agree with
Polis's for 86 of 89 people. Near the border the two groups' dots mix,
because Polis places people using more than this one line.

The dots are drawn as rounded heaps: each dot drops near its true place on the
line and settles in the lowest free spot within three dot widths, paying for
every step it moves sideways (a spot's cost is its height plus 0.9 times its
shift; four widths at 0.7 on phones). So crowded stretches pile up like sand
rather than standing in columns. With fewer than 100 people in the groups, the
dots are drawn larger than on the bigger seats' pages (7px, or 3.6px in the
phone layout), so the map isn't a thin line.

## No closer look, and no unlikely allies

The stance test used on the other pages looks inside each group for a point
along the line where answers flip: cuts every 1% from 20% to 80% of the group,
at least 15 people a side, and a statement flips when at least 65% agree on
one side and at most 35% on the other, with at least 10 voters a side and z of
at least 3.3. In Group 1 the best cut (the 27 people nearest the border
against the other 34) gives 4 such statements, while shuffled orders give up
to 3, and moving the cut by one person halves it; two of the four say the same
thing in different words. Group 2 has fewer than 30 people, so no cut leaves
15 a side. The page shows no closer look, and the notes say so in one line.

The test for unlikely allies pairs the statements both groups split on at
similar rates (30% to 70% agreeing in each, within 15 points), and asks
whether the same people back both, allowing for people who agree with most
things (a Mantel-Haenszel odds ratio across five strata of people's overall
agreement; a pair passes with an odds ratio of at least 4, z of at least 3.3,
and at least 8 backers in each group). None of the 36 pairs passes, so the
page has no allies section, and the notes say so in one line.

## Hover cards

Hover-card examples follow the rule used on every Teals results page. Each
person's card shows up to two of their votes: one where they voted like
Group 1 and one where they voted like Group 2. The candidates are the 35
statements where the groups took opposite sides, limited to those the person
voted on the same way as that group. The card prefers, in order: a statement
the person agreed with over one they disagreed with; the one that group most
widely shared (the share of the group on its side, as a 95% Wilson lower bound,
so small samples count for less); the one more of that group voted on; then
the lower statement number. Nothing is chosen or removed by hand. The page's
notes say this in plain words.

`DATA` (the map rows and hover texts, in the `page-data` script tag), the
content below the map (the pairs, the shared list and the priority vote, in
the `content-data` script tag) and every figure in the text (each element
marked `data-k`) are generated from the export and the ballot file; the
wording around them is edited in the page directly. The scripts and the frozen
export live outside the repository. Every figure, quote and hover-card value
is checked against the export before each push.

## Layout

The page width is in rem (`.wrap{max-width:77.5rem}`), as on the other
migration results pages.

- The hero has two quote cards, one per group (Group 1's first), each
  labelled "Group 1 · Migration works" or "Group 2 · Fewer, chosen more
  carefully" and edged in its group's colour. Each is a resident's statement
  that most of its own group agreed with and far fewer of the other group
  did. The circle with the headline figure sits between them, its ring half
  in each group's colour: on wide screens it clasps both cards at the seam,
  on the right; on narrow laptops and phones it sits between them, centred.
  It never covers text.
- The hero sentence runs the full width of its column and ends with what
  the priority vote put first.
- The headline is three set lines ("Kooyong wants" / "a bipartisan plan" /
  "for migration"), the middle one boxed in teal. It is sized from its column
  (`min(12.6cqi, 10vh, 5.8rem)`) and never wraps.
- Short windows get a smaller headline and lede, so the buttons stay on the
  first screen.
- The map's height follows the highest pile.
- A notes row's paragraphs all sit in its right-hand column.

Check any hero change at 1728×966 with a 20px default text size, 1440×790,
1366×650, 1536×730, 1024×700 and a 375px phone.

This file is excluded from the build via `.eleventyignore`.

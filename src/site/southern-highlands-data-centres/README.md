# /southern-highlands-data-centres — Southern Highlands data centre pilot

Standalone single-page microsite presenting the results of the Southern
Highlands data centre pilot ("A Better Model for Data Centre Development"),
a community-led initiative of Highlands Homegrown Economy (convened with
WinZero), Regen Labs, RadicalxChange Foundation and BWD Strategic in the
Southern Highlands of NSW (online sessions in the
weeks of 14 and 21 September 2026, an in-person session on 20 October, an
open Polis conversation, and a report-back forum in Mittagong on 25 October
2026).

Like `/curtin-migration`, this page shares **nothing** with the rest of the
site: it does not extend `layouts/_base.njk`, and carries its own `<style>`,
inline `<script>`, header and footer. It is framed by the same thin RxC-branded
breadcrumb and footer bars (`.rxc-shell`, Bricolage Grotesque from Google
Fonts) as the other project microsites, and carries the site's Fathom
analytics snippet.

`index.njk` is raw HTML wrapped in `{% raw %}` so Nunjucks passes it through
untouched; the only Eleventy features used are the front-matter `permalink`
and the site-wide posthtml transform. It reuses the Curtin page's stylesheet,
typefaces (Messer Condensed and Suisse Intl, subset to Latin), opinion-map and
pairs scripts, with a short block of additions.

It tells the story in this order: why the pilot asked residents first; how
it worked (who took part, then six step cards); what the small groups said,
in residents' own words; the priority vote (one ranked list of all 13
conditions); the open conversation (the map with the three groups along the
line, then a card for each group, then where they agree on the terms anyway: the
count of shared statements, four uncommon-ground pairs and all 22 in a fold); the
community's seven principles, as residents presented them at the forum;
what happens next; and, at the bottom, the independence and partner
credits, photos and notes. The principles follow the evidence, so a reader
sees how residents got to them before reading them.

The headline is "What Southern Highlands residents said about data centres".
An earlier headline spoke of setting the terms, which could be read as the
language of a deal. The lede: "After years of fighting proposals it never
asked for, most recently a gas-powered data centre near Moss Vale, the
Southern Highlands got on the front foot. Most residents who took part are
sceptical of a data centre here, and many don't want one at all. But
together they set out the terms any proposal would have to meet before they
would consider it." "Many don't want one at all" rests on the four
outright-no statements: 35 of the 54 people who voted on at least one agreed
with at least one. The first sentence is the partners' framing, not a
finding. The last says what meeting the terms gets a proposal, residents'
consideration, and stops short of their support, which would contradict the
line that the work is not evidence of support or consent. The lede names no
terms: the principles section gives them in the community's own words. If a
list ever returns, back every item with a statement most of all three groups
agreed with or a top-seven priority-vote condition. One participation figure
("September and October 2026 · 157 people took part", as on the
link-preview image) sits in a smaller line under the buttons. The first
button goes to the small groups, the second to "What happens next".

## Design rules

- Consent. The page must not read as consent, or as the language of a deal.
  "Why we did this" says the pilot did not ask residents to endorse a data
  centre, and that an informed no is as valid as a conditional yes. The
  principles' lead-in says any proposal would also have to meet them, and
  that meeting them would not guarantee a yes. The note under the principles
  carries the partner's own lines: the pilot is non-statutory and meant to
  inform public discussion and policy development, and it "should not be
  cited by any proponent, consultant or party to proceedings as evidence of
  community support for, or consent to, a particular development".
- Words the page avoids in its own sentences: "accept" (it read as the
  community giving in; residents' quotes keep their own words),
  "counter-offer" (it implies a negotiation the pilot was not part of),
  "Australia first", "bargain", and "representative" for the sample.
- Who took part. Delegates were invited, not chosen at random. The page says
  so, says the sample was not designed to be demographically representative,
  and names whom it sought out, in words that match the partner's page. Keep
  this wording the same everywhere. The 48 delegates is the partner's
  figure; 37 of them voted in the priority vote.
- The page has no section addressed to developers and no funding ask. The
  next-step line names developers alongside governments ("Bringing community
  terms like these to the table with governments and developers is the next
  step in giving community voice real power.") and must not claim the pilot
  did this. If a developer-facing section ever returns, don't credit
  residents with the project team's own words ("good for good developers"
  came from the draft model's rationale column).
- The pilot ran alongside community opposition to the proposed gas plant and
  was not part of any negotiation over it. The funding line names no funder
  and no number ("independently funded by philanthropic organisations").
- The moratorium line is residents' call (statement 43, 70%) and the
  community partner's position, not RadicalxChange's.
- No special pleading. Every term and theme rests on the same rule as the
  others and sits where the data puts it. Don't pick out one item's best
  figure to lift a theme ("came eighth, but…"), and don't add an exception
  to a checking rule for one item.
- Groups are named, not numbered ("Not here", "Worried, not settled", "Open,
  if it's done well"), and appear in map order wherever they appear together:
  the hero labels, the summary bar, the cards, the legend, the pairs and the
  folded list. The map runs from more concerned (left) to more open (right),
  so the hero, the map and the cards read in one order. The pairs are titled
  by what all three groups want ("Show the full plan up front", "Protect the
  town water supply", "Assess environmental impacts before approval",
  "Strengthen the host community").
- Where the page and the project's media release of 26 October 2026 differ
  on a fact, the page follows the release: more than 160 residents at the
  forum, the proposal "near Moss Vale", the four representatives and their
  "in-principle support". That they agreed to arrange meetings with the
  relevant ministers came from the project team, not the release. The
  release's call for community to be the fourth pillar of the national data
  centre standards is on the page. National Cabinet backed mandatory national
  standards for large data centres on 26 August 2026; reports differ on
  whether its statement named water and land, so re-check before leaning on
  the detail. The release's Polis totals differ slightly from the page's; the
  page keeps its own, from the final export under the counting rule below.
- When something new has to go on the page, put it inside the section it
  belongs to rather than beside it, and measure the phone length before and
  after.

## Layout

- The type is set in rem, so the page's `.wrap` is too (`max-width:77.5rem`,
  in place of the Curtin sheet's 1240px). A reader whose browser default
  text size is 20px then gets a proportionally wider page. With the px cap,
  that reader saw the hero headline break into five lines and the sticker
  cover two of the quotes.
- The hero headline is set in three lines that never break ("What Southern
  Highlands / residents said about / data centres"): each is a block-level
  `nowrap` span. It is sized from its own column (`13.7cqi`, a container
  query unit), so the longest line fills about 97% of the column at any
  width, and from the window height (`11.5vh`), so the headline, lede and
  buttons fit one screen on a laptop. The longest line, "What Southern
  Highlands", is 7.052em wide in the display face. If the headline changes,
  measure the new longest line and set the
  cqi value to 96 divided by its width in em. There is no minimum size,
  because a floor would push the longest line out of a narrow phone column.
- Screens under 45em tall get a smaller headline and lede, and screens under
  36em tall a smaller lede still. The heights are in em, so they also catch
  a taller window read at a larger text size.
- The hero buttons have slightly less side padding than the Curtin sheet's,
  so the two sit side by side in a 1440px window at a 20px text size.
- The hero's right column holds one label per group (its count, name and a
  one-line description, linking to its card) and the circle, which sits
  against the labels and covers no text. On phones the circle follows the
  labels. A caption under them gives the count: "104 people in three groups,
  from the open conversation". The turnout line under the buttons keeps one
  figure.
- Check any hero change at these sizes: 1728×966 with a 20px default text
  size, 1440×790 (at 16px and at 20px), 1536×730, 1366×650, 1024×700 and a
  375px phone. Headless Chrome takes `--blink-settings=defaultFontSize=20`,
  but its window will not go narrower than about 500px, so check the phone
  in a browser's device emulation.
- Wide sections use their full width. Headings sit beside their leads
  ("Why we did this", the small groups, the open conversation and the
  principles), centred against them at every width. "Who took part" sits
  beside a photo, the seventh principle shares a row with the note, the
  independence box runs its two paragraphs over two columns under its bold
  line, and "What happens next" puts the asks beside the text. Each stacks to
  one column at 900px and under. After a wording change, check these at
  1728×966 with 20px text and at 1024px, for a column left half empty.
- The three summary cards follow the story: the small groups, the vote, the
  open conversation. The first carries the ten-dot count the theme cards
  use, drawn in the text colour so it shows in dark mode.
- The page is long on a phone: about 35 screens of 812px. The opening and
  the leads added about three to the earlier order. The hero's second button
  jumps to "What happens next", near the end.
- On phones (560px and under) each "How this worked" step is a compact row:
  the number in a 4rem column beside the heading and text.

## Assets

- Photos: `src/site/assets/southern-highlands/forum-*.jpg`, web-sized copies
  of the forum photos by John Swainston (the "JDS" files in the project's
  media folder).
- Link-preview image: `src/site/assets/southern-highlands-data-centres-og.png`
  (1200×630), rendered from the page's own fonts and copy. It shows the
  headline, the head count, a forum photo and two quotes from the small
  groups that the hero no longer carries. Regenerate it if the headline or
  the head count change.
- Priority vote ballots: `src/site/assets/southern-highlands/priority-vote-ballots.csv`,
  the 37 counted ballots with voter names removed and the order scrambled.
  Never publish the raw QV export: it carries voter names.

## Data and counting rules

- Polis: conversation `3ptindxrnf`, report `r4utekxcdbdadnswzmipc`, export of
  9 November 2026 after the conversation closed.
- As in the 29 October forum materials, two accounts are set aside:
  participant 0 (loaded the 40 starter statements) and participant 1 (passed
  on all 33 statements it saw). That leaves 157 people, 4,823 votes and 179
  statements that received votes (33 starters and 146 written by 79
  participants). With this rule every Polis figure in the forum deck
  reproduces exactly.
- Percentages are agrees out of everyone who voted on the statement (agree,
  disagree or pass), over all 157 people, grouped or not. Shown shares round
  halves up, as on the other results pages: statement 71's share in Open, if
  it's done well, 1 of 8, shows as 13%. Python's `round()` sends halves to even, so don't use
  it for shown figures.
- Groups. Polis placed 104 people in two groups, "more concerned" (91, Polis
  group 1) and "more open" (13, Polis group 0). The page shows three. "Open,
  if it's done well" is Polis's more open group. Polis's more concerned group
  is split where agreement with statement 70 (no large data centre in the
  Sydney water basin) changes most along the line, into "Worried, not
  settled" (47) and "Not here" (44). No one sits on that line: in the map's
  units (0 at the most concerned end), Not here runs to 0.262, Worried, not
  settled starts at 0.274, and the line is at 0.268. Group figures exclude the
  two accounts above. Where fewer than 20 people in a group voted, the page
  shows how many: as "(n voted)" after the percentage, or, on the group
  cards, as a count in place of the percentage ("6 of 6 in this group
  agree"), because "100%" overstates six votes.
- Why three, and how firm the line is (also in the page notes, "How we found
  three groups"). The split test the other results pages use (cuts every 1%
  from 20% to 80% of the group; a flip is 65% or more on one side and 35% or
  less on the other, with 10 or more voters a side and z of 3.3 or more;
  1,000 shuffles for chance) finds only one flip inside the 91, statement
  70. By that rule this is not a clear split, and the notes say the line is
  softer than the one Polis drew. The page draws it because the two
  questions that divide the 91, an outright no and the water basin, are the
  core of the matter: an outright no, 10 of 19 in Worried, not settled
  against 23 of 24 in Not here; statement 70, 1 of 10 against 16 of 18. A
  test on those two questions alone (2,000 shuffles, 8 or more voters a side)
  gives p of about 0.0015 and 0.001, but statement 70 was noticed in the data
  first, so treat that as descriptive.
- The map comes before the group cards, as on the other results pages: it
  shows how big each group is and where it sits before the cards say what
  sets each apart.
- The map has one job: to show who took part. It places all 104 grouped
  people, one dot each, along Polis's main divide, rebuilt from the vote
  matrix of the grouped people: PCA with missing votes set to the statement
  mean, scaled by sqrt(statements / votes cast), then a robust rescale so two
  outliers don't squash the rest. It is close to the Polis report's map but
  not identical. It runs from more concerned (left) to more open (right).
  Dots pile up in rounded heaps where people sit close together, as on the
  Warringah and Curtin pages: each drops near its place and rolls a little to
  the lowest free spot. No dot rolls across the line between Not here and
  the other groups, and on each side the dots drop from that line outwards,
  as on the Curtin page, so none wall up against it. There is no vertical
  scale. Dots glide into place when the map scrolls into view (reduced motion
  shows them in place).
- Each group is drawn in its colour: Not here #D6286A, Worried, not settled
  #EE8DB0 (a lighter shade of the same hue, since both come from Polis's
  more concerned group) and Open, if it's done well #6F45F0. Each name sits
  over the middle of its heap (between its 10th and 90th percentile dots),
  nudged apart where two would touch, with its count under it on wide
  screens; on phones a name may take two lines and the counts are left to
  the cards. There are no dividing lines and no key. Open's heap overlaps
  Worried's a little, because Polis grouped people on all their votes, not
  their place on the line: three people in Worried, not settled sit among
  Open's dots. Pointing at a name with a mouse fades everyone else.
- The map card's lead reads "Each dot is one person, placed by how they
  voted. People further to the left agreed with more of the concerns about a
  data centre." (The concerns are the 17 statements the more concerned group
  backed and the more open group didn't.) "Show me someone" and the hover
  hint sit under the chart.
- The group cards are stacked, in map order. Each starts with the group's
  count, name and a description that says where it stands on the two core
  questions:

  | Group | People | Description |
  |---|---|---|
  | Not here | 44 | They don't want a data centre here, and say no large one should go in the Sydney water basin. About half would still talk about a smaller one. |
  | Worried, not settled | 47 | They expect harm to the land and want approvals paused until the rules catch up. They are split on saying no outright, and most didn't take a side on the water basin. |
  | Open, if it's done well | 13 | They believe good design and the right conditions can avoid lasting harm, and they want real local benefits in return. None of them agreed with saying no outright. |

  The hero labels carry a one-line version of each.
- Every claim in a description is checked against how that group voted
  (agree out of everyone in it who voted). Each claim has a floor on how many
  voted as well as a range for the share: at least three in four of five or
  more voters for Open, if it's done well, and at least 60% of ten or more for
  the other two. "About half" and "split" need 40% to 60%. Not here: an
  outright no 23 of 24, statement 70 16 of 18, a smaller one (67) 9 of 17.
  Worried, not settled: harm to the land (13) 13 of 19, a pause (43) 11 of 17,
  an outright no 10 of 19, and 7 of 10 passed on statement 70. Open, if it's
  done well: no lasting harm (35) 6 of 6, local benefits (21) 6 of 6, and no
  one in the group agreed with an outright-no statement (9 voted on one).
  Four statements say no outright (83, 84, 98 and 129); statement 70 is about
  where, so it is not one of them.
- The cards at each end show "What sets them apart": three statements most
  of the group agreed with, ranked by how far its share runs ahead of the
  nearer other group. The middle card shows "Where they stand": the two
  statements where Worried, not settled sides most with Not here (most of
  both agreed, under half of Open) and the two where it sides most with Open,
  ranked the same way. A fifth box would show a statement it backs more than
  both neighbours, on 20 or more voters; none qualifies. A group needs 10 or
  more voters on a statement (5 for Open, if it's done well), a tie goes to
  the statement more of the group agreed with, and statements the pairs show
  are skipped, so nothing appears twice. The picks: Not here 70, 83 and 57
  (57 ties 59 exactly and has more agreeing); Worried, not settled 92 and 74
  like Not here, 4 and 17 like Open; Open, if it's done well 35, 75 and 37.
  Every card shows all three groups' figures.
- Plain language is a rule for the whole page. Keep voting terms such as "passed" and "voted on" out of
  the page's own sentences (they belong in the folded notes), prefer two
  short sentences to one long one, use everyday words ("asking the
  community", not "engagement"; "fund", not "resource"), and make sure a
  reader can tell what every "one" or "it" points at. Residents' statements,
  the ballot wording, the model's principle names and the lines from the
  brief stay word for word.

  An earlier draft had five stances. A review found that finer than the votes
  allow: people in the two groups voted on a median of 33.5 of the 179
  statements, so some claims rested on two or three voters, and "A firm no"
  held only 9 of the 33 sceptical-group people who had agreed with an
  outright no. Don't split the line further without checking how many voters
  stand behind each claim.
- The hint under the map names the gesture that works on the device in hand:
  "Hover over a dot" with a mouse, and "Tap the map or press 'Show me someone'" on
  touch screens, where the dots are about 7px wide and a tap picks the
  nearest person.
- The hover card leads with the person's group, then "Why they sit here":
  - how many of the 17 concerns they agreed with, out of those they voted on,
    with a small meter (this tracks position closely: correlation 0.81);
  - "Like most of their group, they agreed:" and the statement highest on
    their group's list, the ranking behind the group cards (pairs included),
    that they agreed with. Five people, all in Worried, not settled, agreed
    with none of them, so their card shows no quote. A group's list holds
    only statements most of that group agreed with, on enough voters, so no
    card quotes a view its group didn't back, and nothing is left out by
    hand. Statement 98 has too few voters in two groups to be on any list.

  The earlier two-group balance bar is gone, because the page names Polis's
  two groups only in the notes.
- `#map-data` rows use the Curtin page's `DATA.people` format: the place on
  the line (0 at the most concerned end, 1 at the most open), an unused 0, the
  group (0 Not here, 1 Worried, not settled, 2 Open, if it's done well),
  votes, agree %, statements written, the Polis participant id (the page
  ignores it; it lets every dot be checked against the export), concerns
  agreed, concerns voted on, the quoted statement (or -1), "a" and 1 when
  there is one. `#map-data` also carries `cut` (the line between Not here
  and Worried, not settled, in the same units), `groups` (the names in map
  order) and `texts` (the quoted statements as the page shows them).
- Framing without spin. The groups are reported as found, and the notes say
  which line Polis drew and which the page drew. The section heading is
  "Mostly sceptical, but in different ways", and its lead says most are
  sceptical in two different ways, the third group (1 in 8) is open to a data
  centre if it's done well, and these are not a yes and a no. The page
  deliberately does not say "it just comes down to conditions", or that the
  scepticism is "about how and where, not whether". The linked Polis report
  shows the four outright-no statements at 52% to 77% of the more concerned
  group, so a reader can check.
- Two lines elsewhere on the page follow from the groups. First, the caveat
  under the group cards: "People chose to take part, so these groups describe
  who joined the conversation, not the whole Highlands." Second,
  the principles section's lead-in says "For many residents, the
  first question is where: they don't want a large data centre in the Sydney
  water basin, which covers most of the Highlands". About half of those who
  voted on statement 70 agreed (17 of 33). The "most of the Highlands" clause
  rests on the project's blog: around 95% of the region sits in the Warragamba Dam
  catchment.
- The 17 concerns are the statements where Polis's two groups' net votes
  point opposite ways and differ by at least 0.5 (at least 3 decided votes in
  the more open group and 5 in the more concerned group), on the more
  concerned side. Agreement with them rises from right to left: 15% of votes
  in Open, if it's done well, 61% in Worried, not settled and 87% in Not here.
- The shared statements are the 22 that at least 70% of each of the three
  groups agreed with. A statement can be compared only with at least 5
  voters in Open, if it's done well and 10 in each of the other two; 75 of
  the 179 statements had that many. In every group, most people backed at
  least three in four of the shared statements they voted on. The count
  opens the pairs section in large type ("22 statements won at least 70%
  support in all three groups. Here are four of them, each beside a big
  question that splits the groups."), the four pairs are its examples, and
  one fold after the pairs lists all 22, strongest first (by the lowest of
  the three groups' shares, then the average). The count is also in the
  summary card. With two groups the same rule found 28; six drop with three
  (33, 39, 61, 81, 111 and 123), each under 70% or under 10 voters in one of
  the two sceptical groups. Shares are worked out in whole numbers, so a
  share exactly on the line counts.
  Statements are shown as people wrote them, apart from three plain
  typos corrected on the page and named in its notes: 37 ("could allow let",
  one of the team's own starter statements), 69 ("imperitive") and 75
  ("exisiting"). The Polis export and report keep the originals.
- We tested for an unlikely-allies section (Curtin-style) and found nothing
  that holds up. People open to a smaller data centre (statement 67) don't
  share any other view more than chance would allow (best p = 0.22). Other
  cross-cutting statements have too few overlapping yes/no votes to test.
- Uncommon-ground pairs (RxC's choice): statements 1 and 56, 22 and 23, 13
  and 15 ("Nature"), 71 and 80. A pair shows only if all three groups back
  its agreed statement, so 27 and 39 ("Set noise limits independently") went
  when the page moved to three groups: 9 of 13 in Worried, not settled backed
  39 (69%). Each split shows a gap of at least 40 points between two groups.
  The dumbbells show all three groups, with one dot split into slices where
  shares tie, as on the Curtin page.
- Priority vote (quadratic voting): 39 ballots exported. One empty ballot is
  set aside, and where two ballots carry the same name only the later one
  counts, as on the other results pages. That leaves 37. The session used a
  public voting link, so its records can't show who cast which ballot. Two
  ballots share a stand-in name; the later is row 21 of the export's Voters
  sheet, because the export keeps same-name rows in the order they were
  saved, and the project's earlier blog totals are exactly the totals
  without it. The forum materials counted both (38 ballots), so their totals
  are slightly higher. Net votes are votes for minus votes against; ranks
  tie where nets tie (=2nd and =10th), the better-backed condition first.
- The section ("The guardrails and requirements residents prioritised") is
  one ranked list of all
  13 conditions: one bar per condition, scaled to the top net vote, with the
  net votes and how many of the 37 ballots backed or opposed it. Two lines
  are checked. The finding is "Clean power came first. Water recycling, an
  ongoing share and independent checks followed." (ranks 1, =2, =2 and 4).
  The caption ends "Most voters backed every condition" (the fewest backers
  is 27 of 37).

  An earlier version led with six cards for the top six, each with its
  closest statement from the conversation. They went when the full ranking
  came in: the top six then appeared twice, and the cut at six was
  arbitrary (sixth place had +80 net votes, seventh +79).
- Quotes come from the nine online small groups (the Session 2 breakouts of
  23 and 24 September), from automated transcripts, lightly tidied: repeated
  words and fillers removed, Australian spelling, and one place name the
  transcript got wrong (the Wingecarribee River). The page notes say where
  the quotes come from. No quote carries a name, and none may: the project
  team asked for that.
- The quotes section ("In their own words") follows the project team's
  synthesis of the ten small groups, which sorts quotes from the ten small groups into themes and counts how many
  groups raised each. The ten are the nine online breakouts and one
  in-person session on 20 October. The page shows every theme raised in at
  least half of the groups, most common first, each with a ten-dot count and
  two quotes (three for the first):

  | Theme on the page | Groups |
  |---|---|
  | Protect air, water, quiet and nature | 8 |
  | A community-controlled fund, independent of council | 7 |
  | Clear information and a real voice | 7 |
  | The real decisions sit with the state, not council | 6 |
  | Renewable energy as a baseline | 5 |
  | Get on the front foot and set our own terms | 5 |
  | Strong local skills, but stretched volunteers | 5 |

  A line under the cards names the four themes raised in four groups. The
  counts are the team's reading of the transcripts; nothing in this repo can
  re-derive them. The titles on the page are plain-language versions of the
  document's theme names.

  Every quote is from an online group. The document asks that the in-person
  session's quotes be checked with participants before publication, so none
  is used. To add or change a quote, keep the speaker's words in order and
  cut only fillers and repeats.
- The hero circle is statement 8: more than 3 in 4 in all three groups
  agreed the community should have "a meaningful say in whether and under
  what conditions major data centres proceed" (20 of 22 in Not here, 16 of
  16 in Worried, not settled, 8 of 10 in Open, if it's done well). It holds
  both halves of the process's position, whether and on what terms, in
  residents' own vote. Its ring shows the groups' colours: Not here on top,
  Worried, not settled at the sides, Open, if it's done well underneath.
  `/projects` gives the statement's overall figure, 92% (45 of 49).
- The seven principles appear word for word as Highlands Homegrown Economy
  publishes the Southern Highlands Model (the "Why" graphic on its project
  page, read 16 November 2026), with each description's first letter
  capitalised, under the partner two-pager's three headings. The checker
  holds the exact wording; if the partner's page changes, change this page
  to match. The forum slides in the photos show earlier names ("Clean
  Power"); the 26 October media release used earlier wording and called the
  fifth principle "Shared Value". The model's dollar benchmark is
  deliberately left out.

The page supports light and dark mode. To update copy or figures, edit the
HTML directly. Every figure on the page has been checked against the
exports; the scripts that recompute them are kept outside this repo, because
the priority-vote workbook carries voter names.

This file is excluded from the build via `.eleventyignore`.

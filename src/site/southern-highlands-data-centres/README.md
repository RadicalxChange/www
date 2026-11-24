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
conditions); the open conversation (the map with three stances along the
line, then the two groups, then where they agree on the terms anyway: the count
of shared statements, five uncommon-ground pairs and all 28 in a fold); the
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
list ever returns, back every item with a statement most of both groups
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
  figure; 38 of them voted in the priority vote.
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
- Groups are named, not numbered ("More concerned", "More open"), and the
  larger group comes first wherever the two appear together: the summary
  bar, the group cards, both legends, the pairs and the folded list. The map
  still runs from more open (left) to more concerned (right). The pairs are
  titled by what both groups want ("Show the full plan up front", "Protect
  the town water supply", "Assess environmental impacts before approval",
  "Set noise limits independently", "Strengthen the host community").
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
- The sticker sits beside the first quote card and covers no card. The card
  stops short of it, and the column's top padding is worked out from the
  sticker's height, so the sticker ends above the second card at any text
  size.
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
  headline, the head count and two of the hero quotes, so regenerate it if
  any of those change.
- Priority vote ballots: `src/site/assets/southern-highlands/priority-vote-ballots.csv`,
  the 38 counted ballots with voter names removed and the order scrambled.
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
  halves up, as on the other results pages: statement 71's more open share,
  1 of 8, shows as 13%. Python's `round()` sends halves to even, so don't use
  it for shown figures.
- Groups are Polis's own: 104 people placed, "More concerned" (91, Polis
  group 1) and "More open" (13, Polis group 0), exactly 7 in 8 and 1 in 8.
  The page names them rather than numbering them, and puts the larger group
  first. Group figures exclude the two accounts above. Where fewer than 20
  people in a group voted, the page shows how many: as "(n voted)" after the
  percentage, or, on the two group cards, as a count in place of the
  percentage ("6 of 6 in this group agree"), because "100%" overstates six
  votes.
- The map comes before the group cards, as on the other results pages: it
  shows how the people sit along the line before the cards say what sets the
  two groups apart.
- The map has one job: to show who took part. It places all 104 grouped
  people, one dot each, along Polis's main divide, rebuilt from the vote
  matrix of the grouped people: PCA with missing votes set to the statement
  mean, scaled by sqrt(statements / votes cast), then a robust rescale so two
  outliers don't squash the rest. It is close to the Polis report's map but
  not identical. Dots pile up in rounded heaps where people sit close
  together, as on the Warringah and Curtin pages: each drops near its place
  and rolls up to three dot widths to the lowest free spot, never across a
  stance's dividing line. There is no vertical scale. Dots glide into place when the map scrolls into view
  (reduced motion shows them in place).
- The map card leads with the stances. The lead reads "Each dot is one
  person, placed by how they voted. People further to the right agreed with
  more of the concerns about a data centre." (The concerns are the 17
  statements the more concerned group backed and the more open group didn't.) The three stance names head
  the chart. The group-colour
  legend, "Show me someone" and the hover hint sit under the chart, and the
  stance key follows. Every dot is drawn at full strength: the paler border
  shading was dropped in the editing pass, because the stances carry the
  story.
- Dashed lines split the map into three stances, named in plain language so
  the map says what each position means. They are a closer look inside the
  two Polis groups, not a rival count: the dots keep their group colours, the
  first stance is the more open group plus three of the more concerned, and
  the other two split the rest of the more concerned group in half. The page calls them stances, never groups.

  | Stance | People | What it says |
  |---|---|---|
  | Open, if it's done well | 16 | Good design and the right conditions can avoid lasting harm; they want real local benefits in return |
  | Worried, not settled | 44 | Expect harm to the land; want approvals paused until the rules catch up; split on whether to say no to a data centre here |
  | Not here | 44 | Don't want a data centre here; about half would still talk about a smaller one |

  The key closes with "All three back the same terms if a data centre does go
  ahead", which hands over to the next section.

  The key says what each stance thinks in plain words, and leaves the counts
  to the page notes ("Behind each stance"). An earlier wording put the
  evidence in the key ("about half who voted on one agreed, and many
  passed"), and it read as jargon.
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
- How the lines were drawn (also in the page notes, "The three stances"): each
  sits in a gap between dots where agreement with one statement changes most.
  The two statements are 1 (planning rules enough: 5 of 7 agreed left of the
  line, 0 of 29 right) and 70 (not in the Sydney water basin: 1 of 15, then
  16 of 18). Each split gives Fisher's exact p < 0.001, but the statements
  and cuts were chosen after looking at the data, so treat that as
  descriptive.
- Every sentence in the key is checked against how that stretch voted (agree
  out of everyone there who voted). Each claim has a floor on how many voted
  as well as a range for the share: at least three in four of five or more
  voters for the 16-person first stance, and at least 60% of ten or more for
  the other two. "About half would still talk about a smaller one" needs 40%
  to 60% (statement 67: 9 of 17).

  Four statements say no outright (83, 84, 98 and 129; statement 70 is about
  where, so it is not one of them). Of the people who voted on at least one
  of them: none of 10 in the first stance agreed with any; 10 of 18 in the
  middle stance agreed with at least one, and pass was their most common
  vote; 23 of 24 in "Not here" agreed with at least one. These counts are in
  the page notes under "Behind each stance". "Split on whether to say no"
  needs 40% to 60% of the middle stance to have agreed with at least one.

  Agreement with the 17 statements the more concerned group backed and the more open group didn't rises
  15%, 62%, 87% from left to right, and in every stretch most people backed
  at least three in four of the shared terms they voted on (15 of 15, 32 of
  39 and 37 of 42). If the wording changes, re-check these claims rather than
  just re-running the numbers.
- Dots within a dot's width of a dividing line are nudged a few pixels so none
  sits on it. On wide screens each stance's name sits over its stretch, with
  how many people are in it. Names are set in up to two lines (three if need
  be), stepping down from 14.5px to 12px before giving up. Narrower screens
  number the stretches 1 to 3, and the key adds the numbers and counts.
  Pointing at a stance with a mouse, on the map or in the key, fades everyone
  else.
- The hint under the map names the gesture that works on the device in hand:
  "Hover over a dot" with a mouse, and "Tap the map or press 'Show me someone'" on
  touch screens, where the dots are about 7px wide and a tap picks the
  nearest person.
- The hover card leads with the person's stance, then "Why they sit here":
  - how many of the 17 concerns they agreed with, out of those they voted on,
    with a small meter (this tracks position closely: correlation 0.81);
  - one of their votes that fits the stance. It says "Like most people here"
    only when most of that stance who voted on the statement voted the same
    way. Otherwise it quotes the most widely shared concern they rejected
    (stance 1) or backed (stances 2 and 3). The fallback never quotes a "not
    here" or "say no" statement (70, 83, 84) for stance 2, because that
    would contradict the stance. Statement 98 ("Tech bros should take their
    data centres and bugger off.") counts as evidence but is never quoted on
    a card. Six people have no vote that fits either rule, so their card
    shows no quote.

  The two-group balance follows. Its quote shows only for people near the
  border (under 65% like their own group on the split statements), where it
  shows what they shared with the other group. On phones the card title
  carries the stance number.
- `#map-data` rows use the Curtin page's `DATA.people` format. The first field
  holds the divide position, the second is unused (0), and the Polis
  participant id is added at the end. The page ignores the id; it lets every
  dot be checked against the export. Five fields follow the id for the hover
  card:
  1. concerns agreed;
  2. concerns voted on;
  3. the quoted statement (or -1);
  4. their vote on it ("a" or "d");
  5. 1 if most of their stance voted the same way.

  `#map-data` also carries `cuts` (the two dividing points) and `stances`
  (number and name).
- Framing without spin. The groups are Polis's and are reported as found.
  The section heading is "Mostly sceptical, but in different ways", and its
  lead says the two groups are not a yes and a no: what separates them is
  harm, water, the rules and pace. The map's own heading is "Where each
  person sits". The page deliberately does not say "it
  just comes down to conditions", or that the scepticism is "about how and
  where, not whether". Of the 91 in the more concerned group, 44 are "Not
  here" and 44 are "Worried, not settled"; the checker requires each to be
  45% to 55%. The linked Polis report shows the four outright-no statements
  at 52% to 77% of that group, so a reader can check.

- Two lines elsewhere on the page follow from the stances. First, the caveat
  under the group cards now covers them: "these groups and the stances on the
  map describe who joined the conversation, not the whole Highlands". Second,
  the principles section's lead-in says "For many residents, the
  first question is where: they don't want a large data centre in the Sydney
  water basin, which covers most of the Highlands". About half of those who
  voted on statement 70 agreed (17 of 33). The "most of the Highlands" clause
  rests on the project's blog: around 95% of the region sits in the Warragamba Dam
  catchment.
- The 22 "statements that split the groups" are those where each group's net
  vote points the opposite way and the two differ by at least 0.5 (at least 3
  decided votes in the more open group and 5 in the more concerned group). Eight people voted like their
  own group on fewer than 65% of those. The map no longer shades them; their
  hover card says they sit near the border.
- The shared statements are the 28 that at least 70% of both groups agreed
  with. Two groups can only be compared on a statement with at least 5
  voters in the more open group and 20 in the more concerned group, and 81 of the 179 statements had that many,
  so 28 is about one in three of them (the page notes say so). The count
  opens the pairs section in large type ("28 statements won at least 70%
  support in both groups. Here are five of them, each beside a big question
  that splits the groups."), the five pairs are its examples, and one fold
  after the pairs lists all 28, strongest first. The count is also in the
  second "at a glance" card. Every pair's agreed statement must be one of
  the 28; the checker tests that. Shares are worked out in whole numbers, so
  a share exactly on the line counts (statement 81: 14 of 20 in the more concerned group).
  Statements are shown as people wrote them, apart from three plain
  typos corrected on the page and named in its notes: 37 ("could allow let",
  one of the team's own starter statements), 69 ("imperitive") and 75
  ("exisiting"). The Polis export and report keep the originals.
- We tested for an unlikely-allies section (Curtin-style) and found nothing
  that holds up. People open to a smaller data centre (statement 67) don't
  share any other view more than chance would allow (best p = 0.22). Other
  cross-cutting statements have too few overlapping yes/no votes to test.
- Uncommon-ground pairs (RxC's choice): statements 1 and 56, 22 and 23, 13
  and 15 ("Nature"), 27 and 39, 71 and 80. Each
  "split" differs by at least 40 points between the groups; each "agree" has
  at least 70% in both. Statement 13 is also on the more concerned group's card.
- Priority vote (quadratic voting): 39 ballots exported, one empty ballot set
  aside, leaving 38. Net votes are votes for minus votes against; ranks tie
  where nets tie (=10th).
- The section ("The guardrails and requirements residents prioritised") is
  one ranked list of all
  13 conditions: one bar per condition, scaled to the top net vote, with the
  net votes and how many of the 38 ballots backed or opposed it. Two lines
  are checked. The finding is "Clean power came first. Water recycling, an
  ongoing share and independent checks followed." (ranks 1 to 4, none
  tied). The caption ends "Most voters backed every condition" (the fewest
  backers is 27 of 38).

  An earlier version led with six cards for the top six, each with its
  closest statement from the conversation. They went when the full ranking
  came in: the top six then appeared twice, and the cut at six was
  arbitrary (sixth place had +80 net votes, seventh +79).
- Quotes come from the nine online small groups (the Session 2 breakouts of
  23 and 24 September), from automated transcripts, lightly tidied: repeated
  words and fillers removed, Australian spelling, and one place name the
  transcript got wrong (the Wingecarribee River). The hero cards carry no
  date tags (removed in the editing pass as noise). One caption under the
  stack says who is speaking: "Residents, in the September discussion
  groups". The page notes say where the quotes come from. No quote carries a
  name, and none may: the project team asked for that. Hero quotes should be
  constructive, not divisive or antagonistic; the checker matches each
  against the transcript.
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
- The hero sticker is statement 8: 92% "agreed the community should have a
  say in whether and how data centres proceed" (45 of 49; the statement reads
  "a meaningful say in whether and under what conditions major data centres
  proceed"). It holds both halves of the process's position, whether and on
  what terms, in residents' own vote. It replaced statement 46 ("any deal
  struck now should still look fair…", 96%), because "any deal" reads as
  dealmaking. `/projects` uses the same figure. The
  sticker's text is set in four short lines at .66rem so they stay inside
  the circle.
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

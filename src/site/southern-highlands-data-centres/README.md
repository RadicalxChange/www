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

It tells the story in this order: the community's seven principles, as
residents presented them at the forum; the two groups and who took part (the
map: "mostly sceptical, but in different ways", a closer look inside the two
groups as three stances along the line); where they agree on the terms anyway
(the count of shared statements, then five uncommon-ground pairs, with all 28
statements in a fold); the conditions people want most (the whole priority
vote as one ranked list); what the small groups said, in residents' own
words; how it worked; and what happens next.

The headline is "What Southern Highlands residents said about data centres"
(a partner's wording; until 16 November 2026 it was "What happened when the
Southern Highlands set the terms?", which could be read as the language of a
deal). The lede, trimmed from a partner's draft: "After years of fighting
proposals it never asked for, most recently a gas-powered data centre near
Moss Vale, the Southern Highlands got on the front foot. Most residents who
took part are sceptical of a data centre here, and many don't want one at
all. But together they set out the terms one would have to meet." "Many don't
want one at all" rests on the four outright-no statements: 35 of the 54
people who voted on at least one agreed with at least one. It names no terms:
the principles section just below gives them, in the community's own words
(Jack's call, 16 November 2026). Until then six terms followed, each backed by
a statement most of both groups agreed with or a top-seven priority-vote
condition; if a list ever returns, source every item the same way. The first
sentence is the partners' framing, not a finding. The turnout
figures sit in a smaller line under the buttons, and the second button jumps
to "What happens next".

## Partners' review (16 November 2026)

Two project partners reviewed the preview from the community's point of
view: one marked it up, and one drafted a rebuild. Both asked for the
developer-facing parts to go. What changed:

- The developer section is gone: its "what this means for developers and
  governments" eyebrow, the "Read quickly, these results sound like
  opposition…" paragraph, the four cards on what the process offers
  developers (certainty, time, cost, durability), the line for local
  officials, and the developers' card under "Bring this process to your
  community". The hero's second button now goes to "What happens next".
  Jess's next-step line still names developers alongside governments.
- The community's seven principles now follow the summary cards, in the
  wording the project published on 26 October 2026, under the partner
  two-pager's three headings, with the seventh ("Respect diversity") shown in
  full. The section's heading is Jess's line with "model" for "bargain"
  (a partner queried "bargain"; "a better model" is the project's own name):
  "A better model starts with a community that can name its priorities,
  terms and shared vision." The "first question is where" line moved there
  too. The principles replace the better-deal cards, so their wording is the
  community's, not a summary of the data.
- The groups are named, not numbered: "More concerned" (91; a partner's wording,
  in place of "More sceptical") and "More open" (13). The larger group comes
  first wherever the two appear together: the summary bar, the group cards,
  both legends, the pairs and the folded list. On the map the axis still runs
  from more open (left) to more concerned (right).
- The pairs are titled by what both groups want (a partner's titles, lightly
  edited): "Show the full plan up front", "Protect the town water supply",
  "Assess environmental impacts before approval", "Set noise limits
  independently", "Strengthen the host community".
- A visible line says how session participants were invited: "from across
  the Highlands to reflect a range of views and backgrounds". It avoids
  "representative", which 38 volunteers can't support.
- The independence line no longer names developers: "The process is
  independent: whoever funds it, no funder controls the questions or the
  outcome. Residents may reach a conditional yes on better terms or a
  well-reasoned no." The funding line drops the number ("independently funded
  by philanthropic organisations"). Highlands Homegrown Economy is
  "community-led", and Regen Labs also led "the local engagement".
- The hero quote "I would be prepared to accept some poor impacts if there
  was a greater good." went as divisive. Its replacement is "Get the community
  involved in the very early stages rather than near the end." Jack turned
  down "Here are the conditions, are you interested? We do it on our own
  terms." as too antagonistic, so it also left the quotes section.
- The notes add that one person may have taken part in more than one
  activity, so the numbers can overlap.

Not taken from the drafted rebuild: its new look (this page keeps the shared
microsite design), its paraphrases of residents' statements and the ballot
wording (both stay word for word), its headline, and its shortened priority
list. Two lines the original brief had fixed are gone with these changes:
the independence line in its first form, and "Each community works toward
the right outcome, with terms that make sense for its place."

## Changes after Jess Scully's review (10 November 2026)

Jess, who ran the project, reviewed the preview. What changed, and why:

- The headline and the developer section's heading no longer say "accept",
  which read as the community giving in. They were "What would the Southern
  Highlands accept, and why?" and "A better bargain starts with a community
  that can say clearly what it would accept, and why." (a line the original
  brief had fixed word for word). They became "What happened when the
  Southern Highlands set the terms?" and "A better bargain starts with a
  community that can name its priorities, terms and shared vision." (Both
  have changed since: see the two sections below.) Two
  smaller lines in the developer section followed on Jack's go-ahead: "where
  the community stands, and on what terms" (Certainty) and "what residents
  want, and why" (local officials). One resident's quote in the hero still
  says "accept"; those are their own words.
- The next-step line names governments as well as developers: "Bringing
  community terms like these to the table with governments and developers is
  the next step in giving community voice real power." It still must not
  claim the pilot did this.
- The asks for developers and for governments use Jess's wording ("social
  licence" in Australian spelling).
- The count of shared statements is no longer tucked into a fold's label.
  See the "shared statements" entry under "Data and counting rules".
- Nature is more visible, without changing any figure: a sixth term in the
  hero lede (since removed with the rest of that list), a "Nature" pair (statements 13 and 15), the lead card of the
  quotes section, and a fourth item on the Protections card (an independent
  environmental assessment before approval, from statement 15).
  A first draft went further. A line above the vote ranking said that
  protecting plants and animals "came eighth in the vote, but 35 of 38
  people backed it", and the checker had a special rule to admit that
  condition as a source. Jack cut the line as cherry-picking, and the
  special rule went with it. Don't pick out one item's best figure to lift a
  theme someone wants lifted: nature rests on the same rule as every other
  term, and sits in the ranking where the votes put it.
- The whole priority vote is shown as a ranked chart, and the section's
  eyebrow names it as quadratic voting. The button to the closed Polis
  conversation became "Priority vote results", an in-page link to the chart.
- "How this worked" counts four online sessions, one in-person session and
  ten small groups (nine online, one in person).
- A new section, "In their own words", carries quotes from the small groups.
  See the quotes entries under "Data and counting rules".

## Consolidation (10 November 2026)

The first pass at Jess's points added blocks beside the sections they
belonged to, and the page grew from about 29 phone screens to 38. Jack found
it "quite long and a lot of info that may not be as legible and accessible
to most everyday people", and asked for the related parts to be merged. What
was merged:

- The shared statements and the pairs. A "28 statements" block with a list of
  seven had been added under the pairs. Now the count opens the section, the
  pairs are its examples, and one fold lists all 28.
- The priority vote. A 13-row ranking had been added under the six cards, so
  the top six appeared twice. Now one ranked list is the whole display.
- On phones, each "How this worked" step is one compact row (the number
  beside its text) instead of a tall card.

The quotes section stays on its own: it is not a second view of anything
else on the page. When something new has to go on this page, put it inside
the section it belongs to, and measure the phone length before and after.

## Wording from the media release (12 November 2026)

The project's media release of 26 October 2026 ("Australia first: Southern
Highlands community sets new terms for data centre development") is the
public record of the forum. Where the page and the release differed on a
fact, the page now follows the release:

- More than 160 residents at the forum (the page had "more than 100").
- The proposal is "near Moss Vale", not "for Moss Vale".
- The four representatives are named: Carol Berry MP (Federal Member for
  Whitlam), Wendy Tuckerman MP (State Member for Goulburn), Judy Hannan MP
  (State Member for Wollondilly) and Wingecarribee Shire Mayor Erin Foley.
  "They gave in-principle support" is the release's wording. "Agreed to
  arrange meetings with the relevant state and federal ministers" came from
  the project lead, not the release.
- The funding line followed the release ("independently funded by six
  philanthropic organisations") until the partners' review, which dropped
  the number. The page names no funder, and the checker fails if any other
  funding claim appears.
- The partners appear in the release's order: Highlands Homegrown Economy
  first, as the community-led initiative convened with WinZero. Their roles
  now follow the partner's own page (see "Tightened after public criticism").
  The footer, the home page and `/projects` list them in that order too.
- The in-person session of 20 October is described in the release's terms
  (a community centre, the challenges and joys of regional life, how
  benefits should be governed), and "Who took part" in the notes adds First
  Nations community members and people with lived experience of
  disadvantage.
- "What happens next" adds the release's call for community to be the fourth
  pillar of the national data centre standards, alongside energy, water and
  land. National Cabinet backed mandatory national standards for large data
  centres on 26 August 2026; reports differ on whether its statement named
  water and land, so re-check before leaning on the detail.

Not taken from the release, on purpose: "Australia first" (the release
itself says "believed to be"); "counter-offer", which implies a negotiation
the pilot was not part of; and "a representative group of 38" (the page
says only that participants were invited to reflect a range of views).

The release's Polis totals differ slightly from the page's. The page keeps
its own, which come from the final export under the counting rule below, and
does not mention the difference.

Still to settle with the project lead: how the blueprint is described. (The
fifth principle's name is settled: the partner's published model calls it
"Fair share".)

## Tightened after public criticism (16 November 2026)

In mid-November 2026 the project was publicly criticised as a "counteroffer"
that turns a no into a conditional yes. The page was tightened so it can't be
read as consent, or as the language of a deal:

- Headline: "What Southern Highlands residents said about data centres", in
  place of "set the terms".
- The hero says many don't want a data centre here at all, before the terms.
- The sticker is statement 8: 92% agreed "the community should have a
  meaningful say in whether and under what conditions major data centres
  proceed" (95% of the more concerned group, 8 of 10 of the more open). It
  replaced statement 46 ("any deal struck now should still look fair…"),
  because "any deal" reads as dealmaking. `/projects` uses the same figure.
- Under the principles, in the partner's words: an informed no is as valid
  as a conditional yes; the work is independent of the proponent and doesn't
  assume any development should proceed; and it "should not be cited by any
  proponent, consultant or party to proceedings as evidence of community
  support for, or consent to, a particular development".
- The principles' names and wording follow the Southern Highlands Model as
  Highlands Homegrown Economy now publishes it (the "Clean and green"
  principle replaced "Clean power"), so the two public versions match. The
  partner roles follow the same page.
- "How this worked" says plainly who took part: invited, not chosen at
  random; a broad cross-section, especially voices often missing from
  consultation; not designed to be a demographically representative sample;
  lunchtime and evening sessions so working parents could join. Partners
  had described the sample differently in public, so keep this wording
  consistent everywhere.
- The priority vote says it ranked conditions and did not ask whether a data
  centre should go ahead. The agreement section says agreement sits
  alongside difference, not in place of it.
- "What happens next" adds the call for a pause: 70% backed an immediate
  moratorium on new approvals until the rules catch up (statement 43), and
  Highlands Homegrown Economy supports one. It is framed as residents' call
  and the partner's position, not RadicalxChange's.
- The asks no longer include a funding ask ("or help fund the next one").
- "Counter-offer" is gone from the site: the project's entries on the home
  page and `/projects` now describe a community-led pilot, and the home page
  status is current.

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
- The page is long on a phone: about 31 screens of 812px (about 29 before
  the 10 November additions, and 38 before those were consolidated). The
  hero's second button jumps to "What happens next", about 27 screens down.
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
  disagree or pass), over all 157 people, grouped or not.
- Groups are Polis's own: 104 people placed, "More concerned" (91, Polis
  group 1) and "More open" (13, Polis group 0), exactly 7 in 8 and 1 in 8.
  The page names them rather than numbering them, and puts the larger group
  first. Group figures exclude the two accounts above. Where fewer than 20
  people in a group voted, the page shows how many: as "(n voted)" after the
  percentage, or, on the two group cards, as a count in place of the
  percentage ("6 of 6 in this group agree"), because "100%" overstates six
  votes.
- The map has one job: to show who took part. It places all 104 grouped
  people, one dot each, along Polis's main divide, rebuilt from the vote
  matrix of the grouped people: PCA with missing votes set to the statement
  mean, scaled by sqrt(statements / votes cast), then a robust rescale so two
  outliers don't squash the rest. It is close to the Polis report's map but
  not identical. Dots stack upward where people sit close together; there is
  no vertical scale. Dots glide into place when the map scrolls into view
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
- Plain language is a rule for the whole page, applied in a pass on
  9 November 2026. Keep voting terms such as "passed" and "voted on" out of
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
  The groups heading is "Two groups, far apart on the risks", not "on
  whether to go ahead", because what separates them is harm, water, the
  rules and pace, not yes versus no. The page deliberately does not say "it
  just comes down to conditions", or that the scepticism is "about how and
  where, not whether". Of the 91 in the more concerned group, 44 are "Not
  here" and 44 are "Worried, not settled"; the checker requires each to be
  45% to 55%. The linked Polis report shows the four outright-no statements
  at 52% to 77% of that group, so a reader can check.

  Until 16 November 2026 a section headed "What this means for developers
  and governments" spelled this out for developers, with better-deal cards
  backed item by item from the votes. Partners asked for it to go, and
  it went (see "Partners' review" above). If a developer-facing section ever
  returns, don't credit residents with the project team's own words ("good
  for good developers" came from the draft model's rationale column).
- Two lines elsewhere on the page follow from the stances. First, the caveat
  under the group cards now covers them: "these groups and the stances below
  describe who joined the conversation, not the whole Highlands". Second,
  the principles section's lead-in says "For many residents, the
  first question is where: they don't want a large data centre in the Sydney
  water basin, which covers most of the Highlands". About half of those who
  voted on statement 70 agreed (17 of 33). The "most of the Highlands" clause
  rests on Jess's blog: around 95% of the region sits in the Warragamba Dam
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
  and 15 ("Nature", added 10 November 2026), 27 and 39, 71 and 80. Each
  "split" differs by at least 40 points between the groups; each "agree" has
  at least 70% in both. Statement 13 is also on the more concerned group's card.
- Priority vote (quadratic voting): 39 ballots exported, one empty ballot set
  aside, leaving 38. Net votes are votes for minus votes against; ranks tie
  where nets tie (=10th).
- The section ("The conditions people want most") is one ranked list of all
  13 conditions: one bar per condition, scaled to the top net vote, with the
  net votes and how many of the 38 ballots backed or opposed it. Two lines
  are checked. The finding is "Clean power came first. Water recycling, an
  ongoing share and independent checks followed." (ranks 1 to 4, none
  tied). The caption ends "Most voters backed every condition" (the fewest
  backers is 27 of 38).

  Until 10 November 2026 the section led with six cards for the top six,
  each with a grid of 38 dots and its closest statement from the
  conversation (20, 23, 33, 39, 12 and 4). They went when the full ranking
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
  document "Small Group Deliberations 1 to 10: By Why, What, How, Who". It
  sorts quotes from the ten small groups into themes and counts how many
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
  struck now should still look fair…", 96%) in mid-November 2026. The
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
HTML directly; every figure on the page has been checked against the exports.
(The page was first generated from a template by scripts kept outside this
repo. Since 16 November 2026 it is edited directly.)

This file is excluded from the build via `.eleventyignore`.

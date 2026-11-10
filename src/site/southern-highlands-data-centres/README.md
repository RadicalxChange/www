# /southern-highlands-data-centres — Southern Highlands data centre pilot

Standalone single-page microsite presenting the results of the Southern
Highlands data centre pilot ("A Better Model for Data Centre Development"),
run by RadicalxChange Foundation with Regen Labs, BWD Strategic and Highlands
Homegrown Economy in the Southern Highlands of NSW (online sessions in the
weeks of 14 and 21 September 2026, an open Polis conversation, and a
report-back forum in Mittagong on 25 October 2026).

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

It tells the story in the Curtin page's order: the two groups and who took
part (the map: "mostly sceptical, but in different ways", a closer look
inside the two groups as three stances along the line);
where they agree on the terms anyway (uncommon ground, with every shared term
folded underneath); the six conditions people want most; a short "what this
means for developers and governments"; how it worked; and what happens next.

The hero answers its own question. The lede says most residents who took part
are sceptical and disagree sharply about the risks, but back the same terms if
a data centre goes ahead, and names five of them. Each of the five rests on a
statement most of both groups backed, a top-seven priority-vote condition, or
both (the same rule as the better-deal cards). The turnout figures sit in a
smaller line under the buttons, and the second button jumps to "What this
means for developers".

## Layout

- The type is set in rem, so the page's `.wrap` is too (`max-width:77.5rem`,
  in place of the Curtin sheet's 1240px). A reader whose browser default
  text size is 20px then gets a proportionally wider page. With the px cap,
  that reader saw the hero headline break into five lines and the sticker
  cover two of the quotes.
- The hero headline is sized from its own column (`17.4cqi`, a container
  query unit), so "Southern Highlands" always fits on one line, and from the
  window height (`11.5vh`), so the headline, lede and buttons fit one screen
  on a laptop. Two `nowrap` spans keep "Southern Highlands" and "accept, and
  why?" whole. Screens under 45em tall get a smaller headline and lede.
- The sticker sits beside the first quote card and covers no card. The card
  stops short of it, and the column's top padding is worked out from the
  sticker's height, so the sticker ends above the second card at any text
  size.
- Check any hero change at these sizes: 1728×966 with a 20px default text
  size, 1440×790, 1366×650, 1024×700 and a 375px phone. Headless Chrome
  takes `--blink-settings=defaultFontSize=20`.

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
- Groups are Polis's own: 104 people placed, Group 1 (13, "More open") and
  Group 2 (91, "More sceptical"), exactly 1 in 8 and 7 in 8. Group figures
  exclude the two accounts above. Where fewer than 20 people in a group voted,
  the page shows how many: as "(n voted)" after the percentage, or, on the two
  group cards, as a count in place of the percentage ("6 of 6 in Group 1
  agree"), because "100%" overstates six votes.
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
  statements Group 2 backed and Group 1 didn't.) The three stance names head
  the chart. The group-colour
  legend, "Show me someone" and the hover hint sit under the chart, and the
  stance key follows. Every dot is drawn at full strength: the paler border
  shading was dropped in the editing pass, because the stances carry the
  story.
- Dashed lines split the map into three stances, named in plain language so
  the map says what each position means. They are a closer look inside the
  two Polis groups, not a rival count: the dots keep their group colours, the
  first stance is Group 1 plus three Group 2 people, and the other two split
  the rest of Group 2 in half. The page calls them stances, never groups.

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

  Agreement with the 17 statements Group 2 backed and Group 1 didn't rises
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
- Framing for developers without spin. The groups are Polis's and are
  reported as found. The groups heading is "Two groups, far apart on the
  risks", not "on whether to go ahead", because what separates them is
  harm, water, the rules and pace, not yes versus no.

  "What this means for developers and governments" has one paragraph under
  its heading:
  "Read quickly, these results sound like opposition: most people are in the
  more sceptical group, and about half of that group say 'not here'. Read
  closely, the other half are worried, but split on whether to say no. And
  from the most open to the most opposed, residents back the same terms if a
  data centre does go ahead." Of the 91 in the more sceptical group, 44 are "Not here" and 44
  are "Worried, not settled"; the checker requires each to be 45% to 55%.
  The page deliberately does not say "it just comes down to conditions", or
  that the scepticism is "about how and where, not whether". The linked
  Polis report shows the four outright-no statements at 52% to 77% of the
  sceptical group, so a reader can check.

  The section is short on purpose: about 360 words, and the checker caps it
  at 380. Two earlier paragraphs were cut on 9 November 2026 as too much
  text. One was a problem statement ("The industry now accepts that
  communities need a real say…"). The other quoted the draft model ("good
  for good developers", "developers have struggled to get a clear picture of
  community needs"). Those quotes come from the rationale column the project
  team wrote, so don't bring them back as residents' views.
- The better-deal cards (A real say, Protections, Lasting value) are backed
  item by item, and a line under them says so: "Each item comes from the
  priority vote or from statements most people in both groups backed." The
  checker maps each item to its sources and requires either a top-seven
  priority-vote condition backed by most ballots, or a statement most of both
  groups backed:
  - engagement before an application: statements 72 and 30;
  - the full plan: 56;
  - an independent community-led body: 10 and the "ongoing" condition;
  - clean power: the "clean" condition and 20;
  - recycled cooling: the "water" condition and 23;
  - noise and pollution limits checked independently: the "checks" condition
    and 39;
  - an ongoing share in a fund with an endowment: the "ongoing" condition,
    49 and 47;
  - long-term jobs: the "jobs" condition and 12;
  - waste heat and shared computing power: the "heat" and "compute"
    conditions.

  "For the life of the site" also echoes the discussion groups ("ongoing for
  the lifetime of their operation with an independent third party
  assessor"). The bullet says "pollution", not "emissions", to match the
  vote's wording. The community principles come from the draft model
  presented to residents at the forum; "a fair share" matches Jess's blog. The cards tag
  six of the model's seven principles. The page notes ("The better
  deal") give the seventh ("Respect diversity"): respect that some parts of
  the community may remain opposed or sceptical.
- Two lines elsewhere on the page follow from the stances. First, the caveat
  under the group cards now covers them: "these groups and the stances below
  describe who joined the conversation, not the whole Highlands". Second,
  "What a better deal looks like here" opens with "For many residents, the
  first question is where: they don't want a large data centre in the Sydney
  water basin, which covers most of the Highlands". About half of those who
  voted on statement 70 agreed (17 of 33). The "most of the Highlands" clause
  rests on Jess's blog: around 95% of the region sits in the Warragamba Dam
  catchment.
- The 22 "statements that split the groups" are those where each group's net
  vote points the opposite way and the two differ by at least 0.5 (at least 3
  decided votes in Group 1 and 5 in Group 2). Eight people voted like their
  own group on fewer than 65% of those. The map no longer shades them; their
  hover card says they sit near the border.
- The shared terms, listed under the pairs, are the 28 statements that at
  least 70% of both groups agreed with (with at least 5 Group 1 and 20 Group 2
  voters). Statements are shown as people wrote them, apart from three plain
  typos corrected on the page and named in its notes: 37 ("could allow let",
  one of the team's own starter statements), 69 ("imperitive") and 75
  ("exisiting"). The Polis export and report keep the originals.
- We tested for an unlikely-allies section (Curtin-style) and found nothing
  that holds up. People open to a smaller data centre (statement 67) don't
  share any other view more than chance would allow (best p = 0.22). Other
  cross-cutting statements have too few overlapping yes/no votes to test.
- Uncommon-ground pairs (RxC's choice): statements 1 and 56, 22 and 23, 27
  and 39, 71 and 80. Each "split" differs by at least 40 points between the
  groups; each "agree" has at least 70% in both.
- Priority vote (quadratic voting): 39 ballots exported, one empty ballot set
  aside, leaving 38. Net votes are votes for minus votes against; ranks tie
  where nets tie (=10th).
- The six priority cards each show the closest statement from the
  conversation (20, 23, 33, 39, 12 and 4); a majority of both groups backed
  all six.
- Quotes come from the Session 2 discussion groups (nine breakouts, 23 and 24
  September), from automated transcripts, lightly tidied (repeated words and
  fillers removed, Australian spelling). The hero cards carry no date tags
  (removed in the editing pass as noise). One caption under the stack says
  who is speaking: "Residents, in the September discussion groups". The page
  notes say where the quotes come from, and no quote is attributed to a name.
- The hero sticker (96% "agreed any deal should still look fair in 20 years",
  statement 46) is deliberate. It is one of the three most widely backed
  statements (96% of 49, with 100% of Group 1 and 95% of Group 2). It frames
  the page's argument in residents' own terms: a deal judged by long-term
  fairness, not a yes or no. Statement 49 (community investment fund, 98%)
  scores slightly higher but reads as being about money.
- The "better deal" cards summarise these results under the partner
  two-pager's three headings, tagged with the community's principles from the
  draft model presented to residents at the forum. Principle 5 is "Fair share" as on the
  forum slides (the Strawperson document says "Shared value"). The model's
  dollar benchmark is deliberately left out.

The page supports light and dark mode. To update copy or figures, edit the
HTML directly; every figure on the page has been checked against the exports.

This file is excluded from the build via `.eleventyignore`.

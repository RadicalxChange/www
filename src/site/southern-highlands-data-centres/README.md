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
inside the two groups as five stances along the line);
where they agree on the terms anyway (uncommon ground, with every shared term
folded underneath); the six conditions people want most; a short "what this
means for developers and governments"; how it worked; and what happens next.

## Assets

- Photos: `src/site/assets/southern-highlands/forum-*.jpg`, web-sized copies
  of the forum photos by John Swainston (the "JDS" files in the project's
  media folder).
- Link-preview image: `src/site/assets/southern-highlands-data-centres-og.png`
  (1200×630), rendered from the page's own fonts and copy. If the hero copy
  changes, regenerate it.
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
  the page shows how many.
- The map has one job: to show who took part. It places all 104 grouped
  people, one dot each, along Polis's main divide, rebuilt from the vote
  matrix of the grouped people: PCA with missing votes set to the statement
  mean, scaled by sqrt(statements / votes cast), then a robust rescale so two
  outliers don't squash the rest. It is close to the Polis report's map but
  not identical. Dots stack upward where people sit close together; there is
  no vertical scale. Dots glide into place when the map scrolls into view
  (reduced motion shows them in place).
- The map card leads with the stances. The lead reads "Each dot is one
  person, placed by how they voted. Moving right, people share more of the
  concerns raised." The five stance names head the chart. The group-colour
  legend, "Show me someone" and the hover hint sit under the chart, and the
  stance key follows. Every dot is drawn at full strength: the paler border
  shading was dropped in the editing pass, because the stances carry the
  story.
- Dashed lines split the map into five stances, named in plain language so
  the map says what each position means. They are a closer look inside the
  two Polis groups, not a rival count: the dots keep their group colours, the
  first stance is Group 1 plus three Group 2 people, and the other four split
  Group 2. The page calls them stances, never groups, and adds no tallies of
  who is "open".

  | Stance | People | What it says |
  |---|---|---|
  | Open, if it's done well | 16 | Good design and the right conditions can avoid lasting harm; they want real local benefits in return |
  | Unsure, want answers first | 9 | The planning rules aren't enough; they don't yet know enough about the water to judge |
  | Worried, but open to terms | 35 | Expect harm to water and land; want approvals paused until the rules catch up; haven't ruled it out |
  | Not here: protect the water | 33 | No large data centre in the Sydney water basin; many would talk about a smaller one |
  | A firm no | 11 | Share almost every concern; no data centre here at all |

  The key closes with "All five back the same terms if one does go ahead",
  which hands over to the next section.
- How the lines were drawn (also in the page notes, "The five stances"): each
  sits in a gap between dots where agreement with one statement changes most.
  The four statements are 1 (planning rules enough: 5 of 7 agreed left of the
  line, 0 of 29 right), 22 (water worse: 1 of 12, then 27 of 30), 70 (not in
  the Sydney water basin: 1 of 15, then 16 of 18) and 84 ("Say No.": 6 of 27,
  then 8 of 8). Each split gives Fisher's exact p < 0.001, but the statements
  and cuts were chosen after looking at the data, so treat that as
  descriptive.
- Every sentence in the key is checked against how that stretch voted (agree
  out of everyone there who voted): for example, stance 3 needs most to agree
  with 22, 13 and 43 and most not to agree with 70, 83 and 84. Agreement with
  the 17 statements Group 2 backed and Group 1 didn't rises 15%, 44%, 66%, 82%,
  95% from left to right, and in every stretch most people backed at least
  three in four of the shared terms they voted on. If the wording changes,
  re-check these claims rather than just re-running the numbers.
- Dots within a dot's width of a dividing line are nudged a few pixels so none
  sits on it. On wide screens each stance's name sits over its stretch, with
  how many people are in it. Names are set in up to two lines (three if need
  be), stepping down from 14.5px to 12px before giving up. Narrower screens
  number the stretches 1 to 5, and the key adds the numbers and counts.
  Pointing at a stance with a mouse, on the map or in the key, fades everyone
  else.
- The hover card leads with the person's stance, then "Why they sit here":
  - how many of the 17 concerns they agreed with, out of those they voted on,
    with a small meter (this tracks position closely: correlation 0.81);
  - one of their votes that fits the stance. It says "Like most people here"
    only when most of that stance who voted on the statement voted the same
    way. Otherwise it quotes the most widely shared concern they rejected
    (stance 1) or backed (stances 3 to 5). The fallback never quotes a "not
    here" or "say no" statement (70, 83, 84) for stance 3, nor 84 for
    stance 4, because those would contradict the stance. Stance 2 has no
    fallback.

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

  `#map-data` also carries `cuts` (the four dividing points) and `stances`
  (number and name).
- Framing for developers without spin. The groups are Polis's and are
  reported as found. The groups heading is "Two groups, far apart on the
  risks", not "on whether to go ahead", because what separates them is
  harm, water, the rules and pace, not yes versus no.

  "What this means for developers and governments" has a third paragraph:
  "Read quickly, these results sound like opposition… Read closely, most of
  that scepticism is about how and where, not whether." Of the 91 in the more
  sceptical group, 11 are "A firm no"; the checker requires that to stay under
  half. The page deliberately does not say "it just comes down to
  conditions": the 33 in "Not here: protect the water" object to the
  location, which terms alone can't fix on this site.
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
  presented at the forum; "a fair share" matches Jess's blog.
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
  voters). Statements are shown as residents wrote them.
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
  (removed in the editing pass as noise). The page notes say where the quotes
  come from, and no quote is attributed to a name.
- The hero sticker (96% "agreed any deal should still look fair in 20 years",
  statement 46) is deliberate. It is one of the three most widely backed
  statements (96% of 49, with 100% of Group 1 and 95% of Group 2). It frames
  the page's argument in residents' own terms: a deal judged by long-term
  fairness, not a yes or no. Statement 49 (community investment fund, 98%)
  scores slightly higher but reads as being about money.
- The "better deal" cards summarise these results under the partner
  two-pager's three headings, tagged with the community's principles from the
  draft model presented at the forum. Principle 5 is "Fair share" as on the
  forum slides (the Strawperson document says "Shared value"). The model's
  dollar benchmark is deliberately left out.

The page supports light and dark mode. To update copy or figures, edit the
HTML directly; every figure on the page has been checked against the exports.

This file is excluded from the build via `.eleventyignore`.

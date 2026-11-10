# /curtin-migration — Curtin community conversation on migration

Standalone single-page microsite presenting the results of the Curtin
community conversation on migration, run by the RadicalxChange Foundation with
Kate Chaney MP, Federal Member for Curtin (Polis conversation 8–27 October
2026; quadratic vote 14 October 2026).

Like `/density-done-well`, this page shares **nothing** with the rest of the
site: it does not extend `layouts/_base.njk`, and carries its own `<style>`,
inline `<script>`, header and footer. It is framed by the same thin RxC-branded
breadcrumb and footer bars (`.rxc-shell`, Bricolage Grotesque from Google
Fonts) as the other project microsites, and carries the site's Fathom
analytics snippet.

`index.njk` is raw HTML wrapped in `{% raw %}` so Nunjucks passes it through
untouched; the only Eleventy features used are the front-matter `permalink`
and the site-wide posthtml transform. The RxC typefaces (Messer Condensed and
Suisse Intl, subset to Latin) and all chart data are embedded in the file, so
it has no other dependencies. The only asset it takes from the site is the
shared favicon (`/images/logos/favicon.png`).

Its own link-preview image is `src/site/assets/curtin-migration-og.png`
(1200×630, served at `/assets/curtin-migration-og.png` and referenced by
the `og:image` and `twitter:image` tags). It was rendered from the page's
own fonts and copy: the hero question, "266 people in Curtin answered",
and three of the hero quotes. If the hero copy changes, regenerate it.

Data sources: the Polis export of 30 October 2026
(https://pol.is/report/r9fyrr8m6yfmfbwscfvp2) and the quadratic-vote results
for 14 October 2026. Statements are shown verbatim. The opinion map is
recomputed from the published vote matrix with the same PCA method Polis uses.

The "Unlikely allies" section highlights the 52 affordability allies: people
who backed both statement 33 (cost of living) and statement 29 (university
housing). `DATA.allies` in the page script holds one character per grouped
participant, in the same order as `DATA.people`: `b` backed both, `v` voted on
both but did not back both, `-` did not vote on both. The bar figures and the
numbers in the "Affordability allies" method note come from the same export.

The page supports light and dark mode. To update copy or figures, edit the
HTML directly; every figure on the page has been checked against the exports.

## Layout

- The type is set in rem, so the page's `.wrap` is too (`max-width:77.5rem`,
  which is 1240px at the standard 16px text size). A reader whose browser
  default text size is larger gets a proportionally wider page. With a px
  cap, a 20px default squeezed larger text into columns that did not grow,
  and the hero sticker covered the ends of the first quote's lines.
- In the two-column hero the sticker sits beside the first quote card and
  covers no card, at any text size. Three values do this:
  - `.c1{width:calc(100% - 8.85rem + 22px)}`. The card stops short of the
    sticker. 8.85rem is the sticker's 8.25rem plus a .6rem gap, and 22px is
    how far the sticker hangs past the column's right edge (`right:-22px`).
  - `.sticker{top:0}`. The sticker is level with the top of the cards.
  - `.cards{padding-top:max(10px,calc(3.43rem - 56px))}`. This keeps the
    sticker's lower edge above the second card. The first quote is about 61
    ems long and its card never has room for more than about 25 ems a line,
    so it never sets in fewer than three lines, and the card is at least
    4.82rem + 44px tall (3 lines × 1.2rem × 1.34, plus 44px of padding). The
    padding is the sticker's 8.25rem, less that card, less the 20px gap,
    plus 8px of air. At 16px it is 10px, as it always was.

  If the first quote, the sticker's size or the cards' padding changes, work
  these out again.
- Large text in a narrow window leaves no room beside the first card: wider
  than 900px, but narrower than 56.25em at the reader's text size. The
  sticker then sits under the cards, as it does on phones. This cannot
  happen at the standard 16px, where 56.25em is 900px.
- Between 901px and about 1135px wide at the standard text size, the first
  card is narrower than it used to be, so its quote runs one or two lines
  longer.
- Short windows keep the headline, lede and buttons on the first screen. The
  rules are inside `min-width:901px`, and a tall window is unchanged by them.
  The pixel figures below are at the standard 16px text size.
  - `.hero-grid{padding-top:clamp(28px,calc(100vh - 41.5rem),88px)}`. The
    space above the hero shrinks from 88px to 28px as the window goes from
    752px to 692px tall.
  - The headline's size is the smallest of three:
    - `7.6vw`, as it always was.
    - Its four-line size, where four lines fit: `27.78vh - 7.45rem`. Four
      lines need a window as tall as the top bar (58px), the 88px above the
      hero, the headline (3.6 × its size), the lede, gaps and buttons
      (259px), and 24px to spare. Where they do not fit, the size stops at
      `7.7rem - 13px`: the largest at which "What would it take" stays on
      one line, so the headline sets in three lines.
    - On very short windows, `37.04vh - 8.73rem`: three lines (2.7 × the
      size), 28px above the hero, and 32px to spare under the buttons.
  - Where the cards run well past the first screen, the headline starts
    level with the first card instead of sitting halfway down the cards
    (`align-items:start`). That is any window under 43.25em tall, and a
    window under 62.5em wide that is under 53em tall.

  If the headline, the lede or the buttons change, measure again: these
  numbers come from their heights.
- The closing "Thank you, Curtin" circle is sized in rem like its words
  (15rem, and 10.625rem at 900px and below), so the words stay inside it at
  any text size.
- At 900px and below there is one column, with the sticker under the cards.
- Check any hero change at these sizes: 1728×966 with a 20px default text
  size, 1440×790, 1366×650, 1024×700 and a 375px phone. Also 1536×730, a
  1080p screen at 125% scaling, where the headline used to take four lines
  and push the buttons off the first screen. Headless Chrome takes
  `--blink-settings=defaultFontSize=20`.

This file is excluded from the build via `.eleventyignore`.

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

Data sources: the Polis export of 30 October 2026
(https://pol.is/report/r9fyrr8m6yfmfbwscfvp2) and the quadratic-vote results
for 14 October 2026. Statements are shown verbatim. The opinion map is
recomputed from the published vote matrix with the same PCA method Polis uses.

The page supports light and dark mode. To update copy or figures, edit the
HTML directly; every figure on the page has been checked against the exports.

This file is excluded from the build via `.eleventyignore`.

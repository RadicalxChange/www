# RadicalxChange www Site

This is the repo for [radicalxchange.org](https://radicalxchange.org/)

The RadicalxChange www site is meant to:

- Teach users about RadicalxChange's core concepts
- Encourage users to join the RadicalxChange community

We use the following metrics to decide whether the website is effective:

- How many users come to the site?
- What content is most viewed?
- How much time do users spend on the site in a single session?
- Do they sign up for our newsletter?

All of these metrics can be found in our [Fathom Analytics data](https://usefathom.com/).

## Usage

### Develop

Run `npm run serve:dev` to watch files in the repository, rebuild the site when files change and serve them to a browser.

Images are not automatically re-processed when they are changed. Run `npm run build:images` to reprocess images when needed.

### Build

Run `npm run build` to build the site and its images. The built site is written to _dist/_.

### Deploy

Merge your change to _master_ and push to GitHub to deploy a new version of our site. Netlify watches for changes to _master_ and rebuilds when the branch changes. The site is also rebuilt once a day at midnight PT. This means you can pull data from APIs during the build and assume it will always be at most 24 hours stale.

## Architecture

The RadicalxChange www site is built on [11ty](https://www.11ty.dev/). It's styled using [TailWind CSS](https://tailwindcss.com/). We host the site on [Netlify](https://www.netlify.com/). For legacy reasons, we use [Digital Ocean](https://www.digitalocean.com/) for DNS. We use [Fathom Analytics](https://usefathom.com/) to track user activity without invading their privacy. We use [Zapier](https://zapier.com/) to trigger our daily builds.

## Design

### Grid

Pages are laid out on grids. A grid has fixed-width margins, fixed-width gutters and fluid columns. Desktop pages are on a 12-column or 16-column grid. Mobile pages are on a 4-column grid.

### Size and Space

We use TailWind's built-in scale for general size and space. These utilities use `rem` units. Size and space include content, padding, border, margin and gaps.

For typography heavy pages, we use a multiple of line height for vertical spacing. The utilities use `em` units.

### Typography

We use a [fluid type scale](https://utopia.fyi/blog/designing-with-fluid-type-scales) for almost all text. This scale provides a base text size and "steps" up and down from that. If you assign a step size to text, it will automatically scale relative to the width of the browser.

For text written in Messer font, use font-size in the `vw` unit instead.

## Code Layout

11ty builds from _src/site_. Read 11ty's documentation to understand a lot about this directory. We outline only notable quirks here:

- _src/data_ contains NodeJS modules that fetch data for use in 11ty collections. These files are referenced from _.eleventy.js_.
- _src/site/\_includes/components_ contains Nunjuck macros and JavaScript for reuse across pages.
- _src/site/\_includes/css_ contains all our CSS. Each css file must be imported by _\_includes/css/styles.css_. CSS is processed by a [PostCSS](https://postcss.org/) pipeline configured in _src/site/css/styles.11ty.js_.
- _src/site/\_includes/layouts_ contains common HTML templates for pages. _\_base.njk_ is the base of all layouts.
- _src/site/\_images_ contains the site's images. This directory is processed completely outside of 11ty. Instead, the directory is processed by _src/site/images.js_. In this Node script, developers can decided exactly how they want to process images for the web.
- _src/site/\_headers_, _\_redirects_, and _404.njk_ are all processed by Netlify. They configure HTTP headers, server-side HTTP redirects and the 404 page respectively.

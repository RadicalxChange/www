# RadicalxChange www Site

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

Run `npm run serve` to watch files in the repository, rebuild the site when files change and serve them to a browser.

Images are not automatically re-processed when they are changed. Run `npm run build:images` to reprocess images when needed.

### Build

Run `npm run build` to build the site and its images. The built site is written to _dist/_.

### Deploy

Merge your change to _master_ and push to GitHub to deploy a new version of our site. Netlify watches for changes to _master_ and rebuilds when the branch changes.

## Architecture

The RadicalxChange www site is built on [11ty](https://www.11ty.dev/). It's styled using [TailWind CSS](https://tailwindcss.com/). We host the site on [Netlify](https://www.netlify.com/). For legacy reasons, we use [Digital Ocean](https://www.digitalocean.com/) for DNS. We use [Fathom Analytics](https://usefathom.com/) to track user activity without invading their privacy.

## Design

The entire website design scales with viewport dimensions. This includes element widths, padding, margin and font sizes (defined in `vw` and `vmin` units). We use a constrained set of values for consistency. They are configured in _tailwind.config.js_.

Responsive design breakpoints are configured in _tailwind.config.js_. The default screen size is a small screen. Large screens start at 768px width (`lg` in the code). Values for a small screen use the `vmin` unit for sizing. Values for large screens use the `vw` unit for sizing. Small screen styles should be overriden for large screens.

## Code Layout

The entire site is in _src/site_. Read 11ty's documentation to understand a lot about this content. We outline only notable quirks here:

- _\_includes/components_ contains Nunjuck macros for reuse across pages.
- _\_includes/css_ contains all our CSS. Each css file must be imported by _\_includes/css/styles.css_. CSS is processed by a [PostCSS](https://postcss.org/) pipeline configured in _src/site/css/styles.11ty.js_.
- _\_includes/layouts_ contains common HTML templates for pages. Layouts prefixed with an underscore are typically extended by other layouts. _\_base.njk_ is the base of all layouts.
- _\_images_ contains the site's images. This directory is processed completely outside of 11ty. Instead, the directory is processed by _src/site/images.js_. In this Node script, developers can decided exactly how they want to process images for the web.
- _\_headers_, _\_redirects_, and _404.njk_ are all processed by Netlify. They configure HTTP headers, server-side HTTP redirects and the 404 page respectively.

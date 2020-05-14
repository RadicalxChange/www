# RadicalxChange www Site

## Usage

### Develop

Run `npm run serve` to watch files in the repository, rebuild the site when files change and serve them to a browser.

### Build

Run `npm run build` to build the site. The built site is written to _dist/_.

## Architecture

The RadicalxChange www site is built by [11ty](https://www.11ty.dev/). It's styled using [TailWind CSS](https://tailwindcss.com/).

## Design

The pages were designed around a 12 column grid with 20px-wide gutters and 50px-wide margins. The left panel of the page is typically 7/12 columns wide and the right panel of the page is typically 5/12 columns. The font-size on the page scales with the viewport width. This keep the negative space on the page constant. The pages have a minimum height of 720px.

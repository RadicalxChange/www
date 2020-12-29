const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const yaml = require("js-yaml");
const fs = require("fs");
const { DateTime } = require("luxon");
const posthtml = require("posthtml");
const beautifyHtml = require("js-beautify").html;
const uslug = require("uslug");
const lodashChunk = require("lodash.chunk");
const libraryData = require("./src/data/kiosk/library");
const papersData = require("./src/data/kiosk/papers");
const fetchPodcasts = require("./src/data/kiosk/podcasts");

module.exports = function (config) {
  const isDev = process.env.RXC_DEV === "true";
  if (isDev) {
    console.log("Running with RXC_DEV set to true");
  }

  // Adding this just for the absoluteUrl filter used in 11ty examples
  config.addPlugin(pluginRss);

  // Support rendering data to markdown
  let markdown = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
    .use(require("markdown-it-anchor"), {
      slugify: uslug,
    })
    .use(require("markdown-it-toc-done-right"), {
      slugify: uslug,
      listClass: "list-aligned",
    })
    .use(require("markdown-it-footnote"));
  markdown.renderer.rules.footnote_block_open = () => `<hr/>\n<ol>\n`;
  markdown.renderer.rules.footnote_block_close = () => `</ol>\n`;
  config.setLibrary("md", markdown);
  config.addFilter("markdown", (value) => markdown.render(value));

  // Support YAML for data
  config.addDataExtension("yaml", (contents) => yaml.safeLoad(contents));

  // Formatting for dates
  function readableDate(dateStr) {
    return DateTime.fromISO(dateStr, { zone: "utc" }).toLocaleString(
      DateTime.DATE_FULL
    );
  }
  config.addFilter("readableDate", readableDate);
  config.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Default href filter
  config.addFilter("defaultHref", function (value, defaultHref) {
    if (value === "#") {
      return defaultHref;
    } else {
      return value;
    }
  });

  // Default slugs
  config.addFilter("defaultSlug", function (customSlug, title) {
    if (!customSlug) {
      return uslug(title);
    } else {
      return customSlug;
    }
  });

  // Array.slice()
  config.addFilter("slice", function (array, ...args) {
    return array.slice(...args);
  });

  config.addCollection("kiosk", async (collectionApi) => {
    // Combine disparate source for kiosk and sort them
    const all = []
      .concat(
        collectionApi
          .getFilteredByGlob("src/site/kiosk/announcements/*")
          .map((item) => ({
            url: item.url,
            date: item.data.date,
            readableDate: readableDate(item.data.date),
            title: item.data.title,
            postType: "Announcement",
            postHeader: item.data.postHeader,
            postAuthor: item.data.postAuthor || "RxC Team",
            series: item.data.series || [],
          })),
        collectionApi
          .getFilteredByGlob("src/site/kiosk/blog/*")
          .map((item) => ({
            url: item.url,
            date: item.data.date,
            readableDate: readableDate(item.data.date),
            title: item.data.title,
            postType: "Blog Post",
            postHeader: item.data.postHeader,
            postAuthor: item.data.postAuthor || "RxC Team",
            series: item.data.series || [],
          })),
        libraryData.map((item) => ({
          ...item,
          readableDate: readableDate(item.date),
        })),
        papersData.map((item) => ({
          ...item,
          readableDate: readableDate(item.date),
        })),
        (await fetchPodcasts()).map((item) => ({
          ...item,
          readableDate: readableDate(item.date),
        }))
      )
      .sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });

    // Create filtered collections
    const blog = all.filter((item) => item.postType === "Blog Post");
    const papers = all.filter((item) => item.postType === "Paper");
    const announcements = all.filter(
      (item) => item.postType === "Announcement"
    );
    const podcastsVideos = all.filter(
      (item) => item.postType === "Podcast" || item.postType === "Video"
    );

    // Paginate the collections
    // Thank you to this genius https://github.com/11ty/eleventy/issues/332
    const PAGE_SIZE = 16;
    const paginated = [].concat(
      lodashChunk(all, PAGE_SIZE).map((chunk, index) => ({
        filter: "all",
        pageNumber: index,
        items: chunk,
      })),
      lodashChunk(blog, PAGE_SIZE).map((chunk, index) => ({
        filter: "blog",
        pageNumber: index,
        items: chunk,
      })),
      lodashChunk(papers, PAGE_SIZE).map((chunk, index) => ({
        filter: "papers",
        pageNumber: index,
        items: chunk,
      })),
      lodashChunk(announcements, PAGE_SIZE).map((chunk, index) => ({
        filter: "announcements",
        pageNumber: index,
        items: chunk,
      })),
      lodashChunk(podcastsVideos, PAGE_SIZE).map((chunk, index) => ({
        filter: "podcastsVideos",
        pageNumber: index,
        items: chunk,
      }))
    );

    return paginated;
  });

  // Pass through static assets
  // src/site/images is copied through its own pipeline (see package.json)
  config.addPassthroughCopy("./src/site/fonts");
  config.addPassthroughCopy("./src/site/files");
  config.addPassthroughCopy("./src/site/_redirects");
  config.addPassthroughCopy("./src/site/_headers");

  // Optimize HTML
  config.addTransform("posthtml", async function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      const { html } = await posthtml([
        require("posthtml-alt-always")(),
        require("posthtml-link-noreferrer")(),
        require("htmlnano")({
          minifySvg: false,
        }),
      ]).process(content);

      if (isDev) {
        return beautifyHtml(html, { indent_size: 2 });
      } else {
        return html;
      }
    }
    return content;
  });

  // Browsersync to serve 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("./dist/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
    },
    templateFormats: ["njk", "11ty.js", "md", "pdf"],
  };
};

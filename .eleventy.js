const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const katex = require("katex");
const yaml = require("js-yaml");
const fs = require("fs");
const { DateTime } = require("luxon");
const posthtml = require("posthtml");
const beautifyHtml = require("js-beautify").html;
const uslug = require("uslug");
const lodashChunk = require("lodash.chunk");
const libraryData = require("./src/data/media/library");
const papersData = require("./src/data/media/papers");
const fetchPodcastsReplayed = require("./src/data/media/podcasts-replayed");
const fetchPodcastsRadicalxchanges = require("./src/data/media/podcasts-radicalxchanges");

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
  config.addFilter("latex", (content) => {
  return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
    const cleanEquation = equation.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

    return katex.renderToString(cleanEquation, { throwOnError: false });
  });
});

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

  config.addCollection("media", async (collectionApi) => {
    // Combine disparate source for media and sort them
    const all = []
      .concat(
        collectionApi
          .getFilteredByGlob("src/site/media/announcements/*")
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
          .getFilteredByGlob("src/site/media/blog/*")
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
        collectionApi
          .getFilteredByGlob("src/site/media/videos/*")
          .map((item) => ({
            url: item.url,
            date: item.data.date,
            readableDate: readableDate(item.data.date),
            title: item.data.title,
            postType: "Video",
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
        (await fetchPodcastsReplayed()).map((item) => ({
          ...item,
          readableDate: readableDate(item.date),
        })),
        (await fetchPodcastsRadicalxchanges()).map((item) => ({
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
      lodashChunk(all, PAGE_SIZE).map((chunk, index, arr) => ({
        filter: "all",
        pageNumber: index,
        items: chunk,
        hasPrevious: index > 0,
        hasNext: index < arr.length - 1,
      })),
      lodashChunk(blog, PAGE_SIZE).map((chunk, index, arr) => ({
        filter: "blog",
        pageNumber: index,
        items: chunk,
        hasPrevious: index > 0,
        hasNext: index < arr.length - 1,
      })),
      lodashChunk(papers, PAGE_SIZE).map((chunk, index, arr) => ({
        filter: "papers",
        pageNumber: index,
        items: chunk,
        hasPrevious: index > 0,
        hasNext: index < arr.length - 1,
      })),
      lodashChunk(announcements, PAGE_SIZE).map((chunk, index, arr) => ({
        filter: "announcements",
        pageNumber: index,
        items: chunk,
        hasPrevious: index > 0,
        hasNext: index < arr.length - 1,
      })),
      lodashChunk(podcastsVideos, PAGE_SIZE).map((chunk, index, arr) => ({
        filter: "podcastsVideos",
        pageNumber: index,
        items: chunk,
        hasPrevious: index > 0,
        hasNext: index < arr.length - 1,
      }))
    );

    return paginated;
  });

  // Pass through static assets
  // src/site/images is copied through its own pipeline (see package.json)
  config.addPassthroughCopy("./src/site/fonts");
  config.addPassthroughCopy("./src/site/files");
  config.addPassthroughCopy("./src/site/js");
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

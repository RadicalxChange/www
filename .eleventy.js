const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const yaml = require("js-yaml");
const fs = require("fs");
const { DateTime } = require("luxon");

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
  });
  config.addFilter("markdown", (value) => markdown.render(value));

  // Support YAML for data
  config.addDataExtension("yaml", (contents) => yaml.safeLoad(contents));

  // Formatting for dates
  config.addFilter("readableDate", (dateStr) => {
    return DateTime.fromISO(dateStr, { zone: "utc" }).toLocaleString(
      DateTime.DATE_FULL
    );
  });
  config.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Custom collections
  config.addCollection("groupedChapters", (collectionApi) => {
    function compareHeaderText(a, b) {
      if (a.data.headerText < b.data.headerText) {
        return -1;
      }
      if (a.data.headerText > b.data.headerText) {
        return 1;
      }
      return 0;
    }

    const chapters = collectionApi
      .getFilteredByTag("chapter")
      .sort(compareHeaderText);

    const groupedChapters = {};
    for (const chapter of chapters) {
      const groupKey = chapter.data.headerText.charAt(0).toLowerCase();
      if (groupedChapters[groupKey] === undefined) {
        groupedChapters[groupKey] = [];
      }
      groupedChapters[groupKey].push(chapter);
    }

    return groupedChapters;
  });

  // Pass through static assets
  // src/site/images is copied through its own pipeline (see package.json)
  config.addPassthroughCopy("./src/site/fonts");
  config.addPassthroughCopy("./src/site/files");
  config.addPassthroughCopy("./src/site/_redirects");
  config.addPassthroughCopy("./src/site/_headers");

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
    templateFormats: ["njk", "11ty.js", "md"],
  };
};

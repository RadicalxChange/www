const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const yaml = require("js-yaml");
const fs = require("fs");
const { DateTime } = require("luxon");

module.exports = function (config) {
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
  config.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });
  config.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Pass through static assets
  config.addPassthroughCopy("./src/site/fonts");
  config.addPassthroughCopy("./src/site/images");
  config.addPassthroughCopy("./src/site/files");

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

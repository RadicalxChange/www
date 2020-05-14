module.exports = function (config) {
  // Support rendering data to markdown
  let markdown = require("markdown-it")({
    html: true,
  });
  config.addFilter("markdown", (value) => markdown.render(value));

  // Support YAML for data
  const yaml = require("js-yaml");
  config.addDataExtension("yaml", (contents) => yaml.safeLoad(contents));

  // Pass through static assets
  config.addPassthroughCopy("./src/site/fonts");

  return {
    dir: {
      input: "src/site",
      output: "dist",
    },
    templateFormats: ["njk", "11ty.js"],
  };
};

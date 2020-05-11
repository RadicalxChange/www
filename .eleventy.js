module.exports = function (config) {
  config.addPassthroughCopy("./src/site/fonts");

  return {
    dir: {
      input: "src/site",
      output: "dist",
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};

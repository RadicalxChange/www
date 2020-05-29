const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, "../_includes/css/styles.css");
    return {
      permalink: "css/styles.css",
      eleventyExcludeFromCollections: true,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      require("postcss-import"),
      require("postcss-mixins"),
      require("tailwindcss"),
      require("postcss-nested"),
      require("autoprefixer"),
      require("postcss-prettify"),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);
  }
};

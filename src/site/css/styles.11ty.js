const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, "../_includes/css/styles.css");
    return {
      permalink: "css/styles.css",
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      require("tailwindcss"),
      require("autoprefixer"),
      require("postcss-import"),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);
  }
};

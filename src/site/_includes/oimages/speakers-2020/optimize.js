const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

fs.readdir(".", function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    const dotIndex = file.lastIndexOf(".");
    const fileName = file.substr(0, dotIndex);
    const extType = file.substr(dotIndex + 1);

    sharp(file)
      .resize({ width: 512, withoutEnlargement: true })
      .toFormat("png") // todo figure out to make pngs
      .toFile(`./${fileName}_small.png`);
  });
});

const fs = require("fs");
const path = require("path");
const ncpLib = require("ncp");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "_images");
const outputDir = path.join(__dirname, "..", "..", "dist", "images");

// Add special pipelines to certain directories
const dirToPipeline = {
  "fellowship-mentors-2021": gridifyImages,
  "speakers-2020": gridifyImages,
  team: gridifyImages,
};

// Fully reinit outputDir every time
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true });
} else {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Iterate over inputDir
fs.readdir(inputDir, function (err, files) {
  if (err) {
    return console.error("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    if (dirToPipeline[file]) {
      dirToPipeline[file](file);
    } else {
      ncpLib.ncp(path.join(inputDir, file), path.join(outputDir, file));
    }
  });
});

function gridifyImages(subDir) {
  fs.readdir(path.join(inputDir, subDir), (err, files) => {
    if (err) {
      return console.error("Unable to scan directory: " + err);
    }

    fs.mkdirSync(path.join(outputDir, subDir), { recursive: true });

    files.forEach(async (file) => {
      const fileName = file.substr(0, file.lastIndexOf("."));

      try {
        await sharp(path.join(inputDir, subDir, file))
          .resize({ width: 512, withoutEnlargement: true })
          .png()
          .toFile(path.join(outputDir, subDir, `${fileName}.png`));
      } catch (caughtErr) {
        return console.error(caughtErr);
      }
    });
  });
}

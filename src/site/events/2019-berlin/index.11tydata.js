const youtubeData = require("../../../data/videos/2019-berlin");

// Sort by title
function compareVideos(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
youtubeData.sort(compareVideos);

module.exports = { youtubeData };

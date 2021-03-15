const v2020Panels = require("../../../data/videos/2020-panels");
const v2020Conference = require("../../../data/videos/2020-conference.js");
const v2019Conference = require("../../../data/videos/2019-conference.js");
const v2019Berlin = require("../../../data/videos/2019-berlin.js");

var videos = [
  ...v2020Panels.map((x) => ({
    date: x.date,
    title: x.title,
    postHeader: x.title,
    postAuthor: x.speakers,
    videoId: x.videoId,
    description: x.description,
  })),
];

videos = videos.concat([
  ...v2020Conference.map((x) => ({
    date: x.date,
    title: x.title,
    postHeader: x.title,
    postAuthor: x.speakers,
    videoId: x.videoId,
    description: x.description,
  })),
]);

videos = videos.concat([
  ...v2019Conference.map((x) => ({
    date: x.date,
    title: x.title,
    postHeader: x.title,
    postAuthor: x.speakers,
    videoId: x.videoId,
    description: x.description,
  })),
]);

videos = videos.concat([
  ...v2019Berlin.map((x) => ({
    date: x.date,
    title: x.title,
    postHeader: x.title,
    postAuthor: x.speakers,
    videoId: x.videoId,
    description: x.description,
  })),
]);

module.exports = { videos };

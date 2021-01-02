const v2020Panels = require("../../../data/videos/2020-panels");

const videos = [
  ...v2020Panels.map((x) => ({
    date: x.date,
    title: x.title,
    postHeader: x.title,
    postAuthor: x.speakers,
    videoId: x.videoId,
    description: x.description,
  })),
];

module.exports = { videos };

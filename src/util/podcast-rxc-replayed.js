const { AssetCache } = require("@11ty/eleventy-cache-assets");
const Parser = require("rss-parser");

const CACHE_KEY = "podcast-rxc-replayed";
const RSS_FEED_URI = "https://feeds.simplecast.com/VrNLe50Y";

async function fetchPodcasts() {
  const parser = new Parser();
  const feed = await parser.parseURL(RSS_FEED_URI);
  const items = feed.items.map((item) => ({
    url: item.link,
    date: item.isoDate,
    title: item.title,
    postType: "Podcast",
    postHeader: item.title,
    postAuthor: item.itunes.author,
    series: [],
  }));

  return items;
}

module.exports = async function () {
  const asset = new AssetCache(CACHE_KEY);

  if (asset.isCacheValid("1d")) {
    return asset.getCachedValue();
  }

  const items = await fetchPodcasts();
  await asset.save(items, "json");
  return items;
};

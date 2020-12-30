const fs = require("fs").promises;
const { AssetCache } = require("@11ty/eleventy-cache-assets");
const Parser = require("rss-parser");

const CACHE_DIR = ".cache";
const CACHE_KEY = "podcasts";
const REPLAYED_RSS_FEED_URI = "https://feeds.simplecast.com/VrNLe50Y";

async function fetchReplayedEpisodes() {
  const parser = new Parser();
  const feed = await parser.parseURL(REPLAYED_RSS_FEED_URI);
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
  await fs.mkdir(CACHE_DIR);
  const asset = new AssetCache(CACHE_KEY, CACHE_DIR);

  if (asset.isCacheValid("1d")) {
    return asset.getCachedValue();
  }

  const items = await fetchReplayedEpisodes();
  await asset.save(items, "json");
  return items;
};

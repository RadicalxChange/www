const Pages = require("./Pages");

class CommunityPages extends Pages {
  getCollectionName() {
    return "collections.kioskCommunity";
  }

  makePermalink(pageNumber) {
    return `api/kiosk/community-${pageNumber + 1}.json`;
  }
}

module.exports = CommunityPages;

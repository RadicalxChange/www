const Pages = require("./Pages");

class AllPages extends Pages {
  getCollectionName() {
    return "collections.kioskCommunity";
  }

  makePermalink(pageNumber) {
    return `api/kiosk/community-${pageNumber + 1}.json`;
  }
}

module.exports = AllPages;

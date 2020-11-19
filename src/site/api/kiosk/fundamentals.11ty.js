const Pages = require("./Pages");

class AllPages extends Pages {
  getCollectionName() {
    return "collections.kioskFundamentals";
  }

  makePermalink(pageNumber) {
    return `api/kiosk/fundamentals-${pageNumber + 1}.json`;
  }
}

module.exports = AllPages;

const Pages = require("./Pages");

class AllPages extends Pages {
  getCollectionName() {
    return "collections.blog";
  }

  makePermalink(pageNumber) {
    return `api/kiosk/all-${pageNumber + 1}.json`;
  }
}

module.exports = AllPages;

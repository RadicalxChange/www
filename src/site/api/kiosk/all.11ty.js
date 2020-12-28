const Pages = require("./Pages");

class AllPages extends Pages {
  extractFilteredCollection(data) {
    return data.all;
  }

  makePermalink(pageNumber) {
    return `api/kiosk/all-${pageNumber + 1}.json`;
  }
}

module.exports = AllPages;

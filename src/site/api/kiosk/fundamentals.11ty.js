const Pages = require("./Pages");

class FundamentalsPages extends Pages {
  extractFilteredCollection(data) {
    return data.fundamentals;
  }

  makePermalink(pageNumber) {
    return `api/kiosk/fundamentals-${pageNumber + 1}.json`;
  }
}

module.exports = FundamentalsPages;

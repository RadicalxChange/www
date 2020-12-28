const Pages = require("./Pages");

class CommunityPages extends Pages {
  extractFilteredCollection(data) {
    return data.community;
  }

  makePermalink(pageNumber) {
    return `api/kiosk/community-${pageNumber + 1}.json`;
  }
}

module.exports = CommunityPages;

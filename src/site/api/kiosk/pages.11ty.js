class Pages {
  data() {
    return {
      pagination: {
        data: "collections.kiosk",
        size: 1,
        alias: "thePage",
      },
      permalink: ({ thePage }) => {
        return `/api/kiosk/${thePage.filter}-${thePage.pageNumber + 1}.json`;
      },
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    return JSON.stringify({
      items: data.thePage.items,
      previous: data.pagination.href.previous || undefined,
      next: data.pagination.href.next || undefined,
    });
  }
}

module.exports = Pages;

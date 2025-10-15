class Pages {
  data() {
    return {
      pagination: {
        data: "collections.media",
        size: 1,
        alias: "thePage",
      },
      permalink: ({ thePage }) => {
        return `/api/updates/${thePage.filter}-${thePage.pageNumber + 1}.json`;
      },
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    return JSON.stringify({
      items: data.thePage.items,
      previous: data.thePage.hasPrevious
        ? data.pagination.href.previous
        : undefined,
      next: data.thePage.hasNext ? data.pagination.href.next : undefined,
    });
  }
}

module.exports = Pages;

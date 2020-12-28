class Pages {
  extractFilteredCollection(data) {
    throw new Error("NYI");
  }

  makePermalink(pageNumber) {
    throw new Error("NYI");
  }

  data() {
    return {
      pagination: {
        data: "collections.kiosk2",
        before: (d) => this.extractFilteredCollection(d),
        size: 16,
      },
      permalink: (data) => this.makePermalink(data.pagination.pageNumber),
    };
  }

  render(data) {
    return JSON.stringify({
      items: data.pagination.items,
      previous: data.pagination.href.previous || undefined,
      next: data.pagination.href.next || undefined,
    });
  }
}

module.exports = Pages;

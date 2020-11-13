class Pages {
  data() {
    return {
      pagination: {
        data: "collections.blog",
        size: 16,
        reverse: true,
      },
      permalink: (data) =>
        `api/kiosk/page-${data.pagination.pageNumber + 1}.json`,
    };
  }

  render(data) {
    return JSON.stringify({
      items: data.pagination.items.map((item) => ({
        url: item.url,
        data: {
          date: this.readableDate(item.data.date),
          title: item.data.title,
          postHeader: item.data.postHeader,
          postAuthor: item.data.postAuthor,
          series: item.data.series || [],
        },
      })),
      previous: data.pagination.href.previous || undefined,
      next: data.pagination.href.next || undefined,
    });
  }
}

module.exports = Pages;

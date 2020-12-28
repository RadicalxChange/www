function getType(item) {
  if (item.inputPath.includes("/blog/")) {
    return "Blog Post";
  } else if (item.inputPath.includes("/announcements/")) {
    return "Announcement";
  } else if (item.inputPath.includes("/papers/")) {
    return "Paper";
  } else if (item.inputPath.includes("/library/")) {
    return "Library";
  } else if (item.inputPath.includes("/podcasts/")) {
    return "Podcast";
  } else if (item.inputPath.includes("/videos/")) {
    return "Video";
  }
}

class Pages {
  getCollectionName() {
    throw new Error("NYI");
  }

  makePermalink(pageNumber) {
    throw new Error("NYI");
  }

  data() {
    return {
      pagination: {
        data: this.getCollectionName(),
        size: 16,
        reverse: true,
      },
      permalink: (data) => this.makePermalink(data.pagination.pageNumber),
    };
  }

  render(data) {
    return JSON.stringify({
      items: data.pagination.items.map((item) => ({
        url: item.url,
        data: {
          date: this.readableDate(item.data.date),
          title: item.data.title,
          postType: getType(item),
          postHeader: item.data.postHeader,
          postAuthor: item.data.postAuthor || "RxC Team",
          series: item.data.series || [],
        },
      })),
      previous: data.pagination.href.previous || undefined,
      next: data.pagination.href.next || undefined,
    });
  }
}

module.exports = Pages;

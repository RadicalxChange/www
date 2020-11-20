const InfiniteScroll = function (onScrollToBottom) {
  this.onScrollToBottom = onScrollToBottom;
};

InfiniteScroll.prototype.init = function () {
  window.addEventListener("scroll", () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 5) {
      this.onScrollToBottom();
    }
  });
};

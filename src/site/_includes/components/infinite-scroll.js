const InfiniteScroll = function (onScrollToBottom) {
  this.isBusy = false;
  this.onScrollToBottom = onScrollToBottom;
};

InfiniteScroll.prototype.init = function () {
  window.addEventListener("scroll", () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 5) {
      this.hitBottom();
    }
  });
};

InfiniteScroll.prototype.hitBottom = function () {
  if (this.isBusy) {
    return;
  }
  this.isBusy = true;
  this.onScrollToBottom().then(
    () => {
      this.isBusy = false;
    },
    () => {
      this.isBusy = false;
    }
  );
};

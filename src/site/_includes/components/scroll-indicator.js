const ScrollIndicator = function ($scrollIndicator) {
  this.$scrollIndicator = $scrollIndicator;
};

ScrollIndicator.prototype.init = function () {
  window.addEventListener("scroll", this.updateScrollIndicator.bind(this));
};

ScrollIndicator.prototype.updateScrollIndicator = function () {
  const percentage =
    (window.scrollY /
      (window.document.body.scrollHeight - window.innerHeight)) *
    100;
  this.$scrollIndicator.style.width = percentage + "%";
};

const scrollIndicator = new ScrollIndicator(
  document.getElementById("scrollIndicator")
);
scrollIndicator.init();

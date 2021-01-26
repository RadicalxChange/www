const RxcTv = function () {
  this.$template = document.getElementById(
    "rxcTvTemplate"
  ).content.firstElementChild;

  this.$root = null;
  this.$info = null;
  this.$infobtn = null;

  this.toggleInfo = this.toggleInfo.bind(this);
};

RxcTv.prototype.init = function () {
  window.addEventListener("hashchange", (event) => {
    if (new URL(event.newURL).hash === "#tv") {
      this.open();
    } else {
      this.close();
    }
  });

  if (location.hash === "#tv") {
    this.open();
  } else {
    if (window.innerWidth >= 768) {
      const data = this.loadData();
      if (!data || !data.isClosed) {
        location = "#tv";
      }
    }
  }
};

RxcTv.prototype.loadData = function () {
  const maybeItem = sessionStorage.getItem("rxcTv");
  if (maybeItem) {
    return JSON.parse(maybeItem);
  } else {
    return undefined;
  }
};

RxcTv.prototype.storeData = function (data) {
  sessionStorage.setItem("rxcTv", JSON.stringify(data));
};

RxcTv.prototype.open = function () {
  this.$root = this.$template.cloneNode(true);
  this.$info = this.$root.querySelector("[data-rxctv-info]");
  this.$infobtn = this.$root.querySelector("[data-rxctv-infobtn]");
  this.$infobtn.addEventListener("click", this.toggleInfo);

  document.body.insertBefore(this.$root, document.body.firstChild);
  bodyScrollLock.disableBodyScroll(this.$root);

  this.storeData({ isClosed: false });
};

RxcTv.prototype.close = function () {
  bodyScrollLock.enableBodyScroll(this.$root);
  this.$root.remove();

  this.$infobtn.removeEventListener("click", this.toggleInfo);
  this.$infobtn = null;
  this.$info = null;
  this.$root = null;

  this.storeData({ isClosed: true });
};

RxcTv.prototype.toggleInfo = function () {
  this.$info.classList.toggle("open");
  this.$info.classList.toggle("lg:h-full");
  if (this.$info.classList.contains("open")) {
    this.$infobtn.innerText = "Close";
  } else {
    this.$infobtn.innerText = "Info";
  }
};

const rxcTV = new RxcTv();
rxcTV.init();

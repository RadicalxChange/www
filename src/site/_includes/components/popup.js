const Popup = function () {
  this.$template = document.getElementById(
    "popupTemplate"
  ).content.firstElementChild;

  this.$root = null;
  this.$info = null;
  this.$infobtn = null;
};

Popup.prototype.init = function () {
  window.addEventListener("hashchange", (event) => {
    if (new URL(event.newURL).hash === "#message") {
      this.open();
    } else {
      this.close();
    }
  });

  if (location.hash === "#message") {
    this.open();
  } else {
    if (window.innerWidth >= 768) {
      const data = this.loadData();
      if (!data || !data.isClosed) {
        location = "#message";
      }
    }
  }
};

Popup.prototype.loadData = function () {
  const maybeItem = sessionStorage.getItem("popup");
  if (maybeItem) {
    return JSON.parse(maybeItem);
  } else {
    return undefined;
  }
};

Popup.prototype.storeData = function (data) {
  sessionStorage.setItem("popup", JSON.stringify(data));
};

Popup.prototype.open = function () {
  this.$root = this.$template.cloneNode(true);

  document.body.insertBefore(this.$root, document.body.firstChild);
  bodyScrollLock.disableBodyScroll(this.$root);

  this.storeData({ isClosed: false });
};

Popup.prototype.close = function () {
  bodyScrollLock.enableBodyScroll(this.$root);
  this.$root.remove();

  this.$infobtn.removeEventListener("click", this.toggleInfo);
  this.$infobtn = null;
  this.$info = null;
  this.$root = null;

  this.storeData({ isClosed: true });
};

const popup = new Popup();
popup.init();

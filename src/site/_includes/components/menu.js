/* Menu */

const Menu = function ($menu) {
  this.$menu = $menu;
  this.$menuInner = $menu.querySelector("#menu_inner");

  this.menuItems = [];
  this.firstItem = null;
  this.lastItem = null;
  this.isOpen = false;

  this.openAnimationTimer = null;
  this.closeAnimationTimer = null;
  this.handleMouseLeave = this._handleMouseLeave.bind(this);
  this.handleTouchOutside = this._handleTouchOutside.bind(this);
};

Menu.prototype.init = function () {
  let menuElements = this.$menu.querySelectorAll("[data-menu-item]");
  for (let menuElement of menuElements) {
    let menuItem = new MenuItem(menuElement, this);
    menuItem.init();
    this.menuItems.push(menuItem);
  }

  let numItems = this.menuItems.length;
  if (numItems > 0) {
    this.firstItem = this.menuItems[0];
    this.lastItem = this.menuItems[numItems - 1];
  }
};

Menu.prototype.setFocusToItem = function (newItem) {
  for (let menuItem of this.menuItems) {
    menuItem.blur();
  }
  newItem.focus();
};

Menu.prototype.setFocusToFirstItem = function () {
  this.setFocusToItem(this.firstItem);
};

Menu.prototype.setFocusToLastItem = function () {
  this.setFocusToItem(this.lastItem);
};

Menu.prototype.setFocusToPreviousItem = function (currentItem) {
  let newItem;
  if (currentItem === this.firstItem) {
    newItem = this.lastItem;
  } else {
    let index = this.menuItems.indexOf(currentItem);
    newItem = this.menuItems[index - 1];
  }
  this.setFocusToItem(newItem);
};

Menu.prototype.setFocusToNextItem = function (currentItem) {
  let newItem;
  if (currentItem === this.lastItem) {
    newItem = this.firstItem;
  } else {
    let index = this.menuItems.indexOf(currentItem);
    newItem = this.menuItems[index + 1];
  }
  this.setFocusToItem(newItem);
};

Menu.prototype._handleTouchOutside = function (event) {
  if (this.$menuInner.contains(event.target)) {
    return;
  }
  this.close();
};

Menu.prototype._handleMouseLeave = function (event) {
  if (event.relatedTarget === null) {
    return;
  }
  this.close();
};

Menu.prototype.open = function () {
  if (this.isOpen) {
    return;
  }

  this.$menuInner.classList.remove("hidden");
  this.$menu.classList.add("menu_open");
  this.openAnimationTimer = setTimeout(() => {
    this.openAnimationTimer = null;
    document.addEventListener("touchstart", this.handleTouchOutside);
    this.$menuInner.addEventListener("mouseleave", this.handleMouseLeave);
    bodyScrollLock.disableBodyScroll(this.$menuInner);
    this.isOpen = true;
  }, 550);
};

Menu.prototype.close = function () {
  if (!this.isOpen) {
    return;
  }

  this.$menuInner.removeEventListener("mouseleave", this.handleMouseLeave);
  document.removeEventListener("touchstart", this.handleTouchOutside);
  this.$menu.classList.remove("menu_open");
  this.closeAnimationTimer = setTimeout(() => {
    this.closeAnimationTimer = null;
    this.$menuInner.classList.add("hidden");
    bodyScrollLock.enableBodyScroll(this.$menuInner);
    this.isOpen = false;
  }, 550);
};

/* MenuButton */

const MenuButton = function ($button, menu) {
  this.$button = $button;
  this.menu = menu;

  this.keyCode = Object.freeze({
    TAB: 9,
    RETURN: 13,
    ESC: 27,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  });
};

MenuButton.prototype.init = function () {
  this.$button.addEventListener("keydown", this.handleKeyDown.bind(this));
  if (this.$button.dataset.menuButton === "hover") {
    this.$button.addEventListener("touchstart", this.handleClick.bind(this));
    this.$button.addEventListener(
      "mouseenter",
      this.handleMouseEnter.bind(this)
    );
  } else {
    this.$button.addEventListener("click", this.handleClick.bind(this));
  }
};

MenuButton.prototype.handleKeyDown = function (event) {
  let flag = false;

  switch (event.keyCode) {
    case this.keyCode.SPACE:
    case this.keyCode.RETURN:
    case this.keyCode.DOWN:
      this.menu.open();
      this.menu.setFocusToFirstItem();
      flag = true;
      break;
    case this.keyCode.UP:
      this.menu.open();
      this.menu.setFocusToLastItem();
      flag = true;
      break;
    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

MenuButton.prototype.handleMouseEnter = function (event) {
  if (!this.menu.isOpen) {
    this.menu.open();
    this.menu.setFocusToFirstItem();
  }
  event.stopPropagation();
  event.preventDefault();
};

MenuButton.prototype.handleClick = function (event) {
  if (this.menu.isOpen) {
    this.menu.close();
  } else {
    this.menu.open();
    this.menu.setFocusToFirstItem();
  }
  event.stopPropagation();
  event.preventDefault();
};

/* MenuItem */

const MenuItem = function ($item, menu) {
  this.$item = $item;
  this.menu = menu;

  this.keyCode = Object.freeze({
    TAB: 9,
    RETURN: 13,
    ESC: 27,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  });
};

MenuItem.prototype.init = function () {
  this.$item.tabIndex = -1;
  this.$item.addEventListener("keydown", this.handleKeydown.bind(this));
};

MenuItem.prototype.handleKeydown = function (event) {
  if (event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }

  let flag = false;
  switch (event.keyCode) {
    case this.keyCode.UP:
      this.menu.setFocusToPreviousItem(this);
      flag = true;
      break;
    case this.keyCode.DOWN:
      this.menu.setFocusToNextItem(this);
      flag = true;
      break;
    case this.keyCode.HOME:
    case this.keyCode.PAGEUP:
      this.menu.setFocusToFirstItem();
      flag = true;
      break;
    case this.keyCode.END:
    case this.keyCode.PAGEDOWN:
      this.menu.setFocusToLastItem();
      flag = true;
      break;
    case this.keyCode.ESC:
      this.menu.close();
      flag = true;
      break;
    case this.keyCode.TAB:
      this.menu.close();
      break;
    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

MenuItem.prototype.blur = function () {
  this.$item.tabIndex = -1;
};

MenuItem.prototype.focus = function () {
  this.$item.tabIndex = 0;
  this.$item.focus();
};

/* Attachment code */
const menu = new Menu(document.querySelector("#menu"));
menu.init();

for (const $menuButton of document.querySelectorAll("[data-menu-button]")) {
  const menuButton = new MenuButton($menuButton, menu);
  menuButton.init();
}

/* Hide buttons when you scroll to footer */
const $footer = document.getElementById("footer");
const $theMenuSlider = document.getElementById("menu_slider");
const $theMenuButton = document.getElementById("menu_button");
const disappearObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.1) {
        $theMenuButton.classList.add("menu_button-closed");
      } else {
        $theMenuButton.classList.remove("menu_button-closed");
      }
      if (entry.intersectionRatio >= 0.5) {
        $theMenuSlider.classList.add("menu_slider-closed");
      } else {
        $theMenuSlider.classList.remove("menu_slider-closed");
      }
    });
  },
  { threshold: [0.1, 0.5] }
);
disappearObserver.observe($footer);

const MenuButton = function ($button, menu) {
  this.$button = $button;
  this.menu = menu;
  this.isOpen = false;
  this.hasFocus = false;
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
  this.$button.addEventListener("click", this.handleClick.bind(this));
  this.$button.addEventListener("focus", this.handleFocus.bind(this));
  this.$button.addEventListener("blur", this.handleBlur.bind(this));
};

MenuButton.prototype.handleKeyDown = function (event) {
  console.log("keyDown");

  let flag = false;

  switch (event.keyCode) {
    case this.keyCode.SPACE:
    case this.keyCode.RETURN:
    case this.keyCode.DOWN:
      if (this.menu) {
        this.menu.open();
        this.menu.setFocusToFirstItem();
      }
      flag = true;
      break;

    case this.keyCode.UP:
      if (this.menu) {
        this.menu.open();
        this.menu.setFocusToLastItem();
        flag = true;
      }
      break;

    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

MenuButton.prototype.handleClick = function (event) {
  if (this.isOpen === true) {
    this.menu.close();
  } else {
    this.menu.open();
    this.menu.setFocusToFirstItem();
  }
  this.isOpen = !this.isOpen;
};

MenuButton.prototype.handleFocus = function (event) {
  console.log("focus");
  this.menu.hasFocus = true;
};

MenuButton.prototype.handleBlur = function (event) {
  console.log("focus");
  this.menu.hasFocus = false;
  // this.menu.close();
};

const Menu = function ($menu) {
  this.$menu = $menu;
  this.$nav = $menu.querySelector("#nav");

  this.menuItems = [];
  this.firstItem = null;
  this.lastItem = null;
};

Menu.prototype.init = function () {
  let menuElements = this.$menu.getElementsByTagName("a");
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

Menu.prototype.setFocusToFirstItem = function () {
  this.firstItem.$item.focus();
};

Menu.prototype.setFocusToLastItem = function () {
  this.lastItem.$item.focus();
};

Menu.prototype.setFocusToPreviousItem = function (currentItem) {
  if (currentItem === this.firstItem) {
    this.lastItem.$item.focus();
  } else {
    let index = this.menuItems.indexOf(currentItem);
    this.menuItems[index - 1].$item.focus();
  }
};

Menu.prototype.setFocusToNextItem = function (currentItem) {
  if (currentItem === this.lastItem) {
    this.firstItem.$item.focus();
  } else {
    let index = this.menuItems.indexOf(currentItem);
    this.menuItems[index + 1].$item.focus();
  }
};

Menu.prototype.open = function () {
  console.trace("open");
  this.$nav.classList.remove("hidden");
  this.$menu.classList.add("menu_open");
};

Menu.prototype.close = function () {
  console.trace("close");
  this.$menu.classList.remove("menu_open");
  setTimeout(() => this.$nav.classList.add("hidden"), 500);
};

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
  // this.$item.addEventListener("keydown", this.handleKeydown.bind(this));
  // // this.$item.addEventListener("click", this.handleClick.bind(this));
  // this.$item.addEventListener("focus", this.handleFocus.bind(this));
  // this.$item.addEventListener("blur", this.handleBlur.bind(this));
};

MenuItem.prototype.handleKeydown = function (event) {
  if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
    return;
  }

  let flag = false;
  switch (event.keyCode) {
    // case this.keyCode.SPACE:
    //   flag = true;
    //   break;
    // case this.keyCode.RETURN:
    //   flag = true;
    //   break;
    case this.keyCode.ESC:
      // this.menu.setFocusToController();
      this.menu.close();
      flag = true;
      break;
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
    case this.keyCode.TAB:
      // this.menu.setFocusToController();
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

MenuItem.prototype.handleFocus = function (event) {
  this.menu.hasFocus = true;
};

MenuItem.prototype.handleBlur = function (event) {
  this.menu.hasFocus = false;
  // this.menu.close();
};

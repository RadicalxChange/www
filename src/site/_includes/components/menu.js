// const MenuButton = function ($root, popupMenu) {
//   this.$root = $root;
//   this.popupMenu = popupMenu;
//   this.hasFocus = false;
//   this.keyCodes = Object.freeze({
//     TAB: 9,
//     RETURN: 13,
//     ESC: 27,
//     SPACE: 32,
//     PAGEUP: 33,
//     PAGEDOWN: 34,
//     END: 35,
//     HOME: 36,
//     LEFT: 37,
//     UP: 38,
//     RIGHT: 39,
//     DOWN: 40,
//   });
// };

// MenuButton.prototype.init = function () {
//   this.$root.addEventListener("keydown", this.handleKeyDown.bind(this));
//   this.$root.addEventListener("click", this.handleClick.bind(this));
//   this.$root.addEventListener("focus", this.handleFocus.bind(this));
//   this.$root.addEventListener("blur", this.handleBlur.bind(this));
// };

// MenuButton.prototype.handleKeyDown = function (event) {
//   let flag = false;

//   switch (event.keyCode) {
//     case this.keyCode.SPACE:
//     case this.keyCode.RETURN:
//     case this.keyCode.DOWN:
//       if (this.popupMenu) {
//         this.popupMenu.open();
//         this.popupMenu.setFocusToFirstItem();
//       }
//       flag = true;
//       break;

//     case this.keyCode.UP:
//       if (this.popupMenu) {
//         this.popupMenu.open();
//         this.popupMenu.setFocusToLastItem();
//         flag = true;
//       }
//       break;

//     default:
//       break;
//   }

//   if (flag) {
//     event.stopPropagation();
//     event.preventDefault();
//   }
// };

// MenuButton.prototype.handleClick = function (event) {
//   if (this.domNode.getAttribute("aria-expanded") == "true") {
//     this.popupMenu.close(true);
//   } else {
//     this.popupMenu.open();
//     this.popupMenu.setFocusToFirstItem();
//   }
// };

// MenuButton.prototype.handleFocus = function (event) {
//   this.popupMenu.hasFocus = true;
// };

// MenuButton.prototype.handleBlur = function (event) {
//   this.popupMenu.hasFocus = false;
//   this.popupMenu.close();
// };

const Menu = function ($menu) {
  this.$menu = $menu;
  this.$nav = $menu.getElementById("nav");

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
  $nav.classList.remove("hidden");
  $menu.classList.add("menu_open");
};

Menu.prototype.close = function () {
  $menu.classList.remove("menu_open");
  setTimeout(() => $nav.classList.add("hidden"), 500);
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
  this.$item.addEventListener("keydown", this.handleKeydown.bind(this));
  // this.$item.addEventListener("click", this.handleClick.bind(this));
  this.$item.addEventListener("focus", this.handleFocus.bind(this));
  this.$item.addEventListener("blur", this.handleBlur.bind(this));
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
      this.menu.close(true);
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
      this.menu.close(true);
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
  this.menu.close();
};

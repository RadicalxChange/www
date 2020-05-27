const menuButton = $("#moving-menu-button");
const header = document.querySelector("header");
const disappearObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        menuButton.removeClass("nav_moving-button-hidden");
        menuButton.addClass("nav_moving-button-visible");
      } else {
        menuButton.removeClass("nav_moving-button-visible");
        menuButton.addClass("nav_moving-button-hidden");
      }
    });
  },
  { threshold: 0 }
);
disappearObserver.observe(header);

$("[data-nav-declare]").each(function () {
  const thisNav = $(this);

  thisNav.find("[data-nav-close]").click(function () {
    thisNav.addClass("nav-closed");
  });

  $(`[data-nav-trigger]`).click(function () {
    thisNav.removeClass("nav-closed");
  });

  thisNav.addClass("nav-closed");
});

const menuButton = $("#float-menu-button");
const firstPage = document.querySelector("#first-page");
const disappearObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        menuButton.removeClass("menu-hidden");
        menuButton.addClass("menu-visible");
      } else {
        menuButton.removeClass("menu-visible");
        menuButton.addClass("menu-hidden");
      }
    });
  },
  { threshold: 0 }
);
disappearObserver.observe(firstPage);

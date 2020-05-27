$("[data-nav-declare]").each(function () {
  const thisNav = $(this);

  thisNav.find("[data-nav-close]").click(function (event) {
    event.preventDefault();
    thisNav.addClass("nav_closed");
  });

  $(`[data-nav-trigger]`).click(function (event) {
    event.preventDefault();
    thisNav.removeClass("nav_closed");
  });

  thisNav.addClass("nav_closed");
});

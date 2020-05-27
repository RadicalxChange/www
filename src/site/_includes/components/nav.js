$("[data-nav-declare]").each(function () {
  const thisNav = $(this);

  thisNav.find("[data-nav-close]").click(function () {
    thisNav.addClass("nav_closed");
  });

  $(`[data-nav-trigger]`).click(function () {
    thisNav.removeClass("nav_closed");
  });

  thisNav.addClass("nav_closed");
});

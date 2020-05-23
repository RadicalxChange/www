$("[data-modal-declare]").each(function () {
  const thisModal = $(this);
  const thisModalName = thisModal.data("modal-declare");
  const thisModalRef = thisModal.get();

  thisModal.find("[data-modal-close]").click(function () {
    thisModal.addClass("modal-closed");
  });

  $(`[data-modal-trigger='${thisModalName}']`).click(function () {
    thisModal.removeClass("modal-closed");
  });

  thisModal.addClass("modal-closed");
});

const menuButton = $("#float-menu-button");
const firstPage = document.querySelector("#first-page");
const disappearObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio == 0) {
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

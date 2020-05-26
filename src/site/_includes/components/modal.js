$("[data-modal-declare]").each(function () {
  const thisModal = $(this);
  const thisModalName = thisModal.data("modal-declare");
  const thisModalRef = thisModal.get();

  thisModal.find("[data-modal-close]").click(function () {
    thisModal.addClass("modal-closed");
    enableBodyScroll(thisModalRef);
  });

  $(`[data-modal-trigger='${thisModalName}']`).click(function () {
    thisModal.removeClass("modal-closed");
    disableBodyScroll(thisModalRef);
  });

  thisModal.addClass("modal-closed");
});

$("[data-modal-declare]").each(function () {
  const thisModal = $(this);
  const thisModalName = thisModal.data("modal-declare");
  const thisModalRef = thisModal.get();

  thisModal.find("[data-modal-close]").click(function (event) {
    event.preventDefault();
    thisModal.addClass("modal-closed");
    bodyScrollLock.enableBodyScroll(thisModalRef);
  });

  $(`[data-modal-trigger='${thisModalName}']`).click(function (event) {
    event.preventDefault();
    thisModal.removeClass("modal-closed");
    bodyScrollLock.disableBodyScroll(thisModalRef);
  });

  thisModal.addClass("modal-closed");
});

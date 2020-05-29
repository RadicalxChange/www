$("[data-modal-declare]").each(function () {
  const thisModal = $(this);
  const thisModalName = thisModal.data("modal-declare");
  const thisModalDialogRef = thisModal.find("[data-modal-dialog]")[0];

  thisModal.find("[data-modal-close]").click(function (event) {
    event.preventDefault();
    thisModal.addClass("modal-closed");
    bodyScrollLock.enableBodyScroll(thisModalDialogRef);
  });

  $(`[data-modal-trigger='${thisModalName}']`).click(function (event) {
    event.preventDefault();
    thisModal.removeClass("modal-closed");
    bodyScrollLock.disableBodyScroll(thisModalDialogRef);
  });

  thisModal.addClass("modal-closed");
});

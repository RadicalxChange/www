$("[data-modal-declare]").each(function () {
  const thisModal = $(this);
  const thisModalRef = thisModal[0];
  const thisModalName = thisModal.data("modal-declare");
  const thisModalDialogRef = thisModal.find("[data-modal-dialog]")[0];

  const outsideClickListener = (event) => {
    if (event.target === thisModalRef) {
      close(event);
    }
  };

  const keyListener = (event) => {
    if (event.key === "Escape") {
      close(event);
    }
  };

  const close = (event) => {
    event.preventDefault();
    thisModal.addClass("modal-closed");
    bodyScrollLock.enableBodyScroll(thisModalDialogRef);
    document.removeEventListener("click", outsideClickListener);
    document.removeEventListener("keydown", keyListener);
  };

  const open = (event) => {
    event.preventDefault();
    thisModal.removeClass("modal-closed");
    bodyScrollLock.disableBodyScroll(thisModalDialogRef);
    document.addEventListener("click", outsideClickListener);
    document.addEventListener("keydown", keyListener);
  };

  thisModal.find("[data-modal-close]").click(close);
  $(`[data-modal-trigger='${thisModalName}']`).click(open);

  thisModal.addClass("modal-closed");
});

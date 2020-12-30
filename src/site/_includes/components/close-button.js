if (document.referrer !== "" && history.length > 1) {
  const referrer = new URL(document.referrer);
  if (referrer.origin === location.origin) {
    for (const $anchor of document.querySelectorAll("[data-href-or-back]")) {
      $anchor.href = "javascript:history.back()";
    }
  }
}

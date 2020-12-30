/**
 * We use document.referrer to simulate the experience of SPA.
 * If we know that you arrived at this page from another page on our site,
 * we assume the "Close" button should really act like a back button.
 */
if (document.referrer !== "" && history.length > 1) {
  const referrer = new URL(document.referrer);
  if (referrer.origin === location.origin) {
    for (const $anchor of document.querySelectorAll("[data-href-or-back]")) {
      $anchor.href = "javascript:history.back()";
    }
  }
}

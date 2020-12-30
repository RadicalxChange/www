/**
 * We want the browser's back button to behave intuitively.
 * For some pages, this means that clicking on links to fragments
 * should not cause canonical "navigation".
 */
for (const $anchor of document.querySelectorAll("a[href^='#']")) {
  $anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const href = $anchor.getAttribute("href");
    history.replaceState(undefined, undefined, href);
    document.querySelector(href).scrollIntoView();
  });
}

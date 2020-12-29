for (const $anchor of document.querySelectorAll("a[href^='#']")) {
  $anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const href = $anchor.getAttribute("href");
    history.replaceState(undefined, undefined, href);
    document.querySelector(href).scrollIntoView();
  });
}

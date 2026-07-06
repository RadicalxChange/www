// Progressive enhancement for /geneva-reflections.
// Without this file the page is complete and readable: the statement explorer
// is a full server-rendered table. This adds client-side sorting (column
// headers) and preset sort filters. No data is fetched; everything sorts on
// data-* attributes rendered at build time.
(function () {
  "use strict";

  var table = document.getElementById("gr-explorer-table");
  var filters = document.getElementById("gr-filters");
  if (!table || !filters) return;

  var tbody = table.querySelector("tbody");
  var headers = table.querySelectorAll("thead th");

  function sortRows(key, dir) {
    var rows = Array.prototype.slice.call(tbody.querySelectorAll("tr"));
    rows.sort(function (a, b) {
      var av, bv;
      if (key === "text") {
        av = a.cells[1].textContent.trim().toLowerCase();
        bv = b.cells[1].textContent.trim().toLowerCase();
        return dir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      av = parseFloat(a.getAttribute("data-" + key));
      bv = parseFloat(b.getAttribute("data-" + key));
      if (isNaN(av)) av = -Infinity;
      if (isNaN(bv)) bv = -Infinity;
      return dir === "asc" ? av - bv : bv - av;
    });
    rows.forEach(function (r) {
      tbody.appendChild(r);
    });
  }

  function clearSortIndicators() {
    headers.forEach
      ? headers.forEach(function (h) {
          h.removeAttribute("aria-sort");
        })
      : Array.prototype.forEach.call(headers, function (h) {
          h.removeAttribute("aria-sort");
        });
  }

  function clearFilterState() {
    Array.prototype.forEach.call(
      filters.querySelectorAll(".gr-filter"),
      function (b) {
        b.setAttribute("aria-pressed", "false");
      }
    );
  }

  // Column-header sorting
  Array.prototype.forEach.call(headers, function (th) {
    var key = th.getAttribute("data-key");
    if (!key) return;
    var label = th.innerHTML;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = label;
    th.textContent = "";
    th.appendChild(btn);
    btn.addEventListener("click", function () {
      var current = th.getAttribute("aria-sort");
      var dir = current === "descending" ? "asc" : "desc";
      clearSortIndicators();
      clearFilterState();
      th.setAttribute("aria-sort", dir === "asc" ? "ascending" : "descending");
      sortRows(key, dir);
    });
  });

  // Preset sort filters
  filters.hidden = false;
  Array.prototype.forEach.call(
    filters.querySelectorAll(".gr-filter"),
    function (btn) {
      btn.addEventListener("click", function () {
        clearFilterState();
        clearSortIndicators();
        btn.setAttribute("aria-pressed", "true");
        sortRows(btn.getAttribute("data-sort"), btn.getAttribute("data-dir"));
      });
    }
  );
})();

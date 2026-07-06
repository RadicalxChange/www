// Progressive enhancement for /geneva-reflections/story/.
// Without JS the page is complete: evidence cards are native <details>,
// the quadrant map and strip are server-rendered SVG with <title> tooltips,
// and the review banner simply stays visible.
(function () {
  "use strict";

  // Review banner dismiss
  var banner = document.getElementById("st-banner");
  var dismiss = document.getElementById("st-banner-dismiss");
  if (banner && dismiss) {
    try {
      if (localStorage.getItem("gr-story-banner") === "off") {
        banner.hidden = true;
      }
    } catch (e) {}
    dismiss.addEventListener("click", function () {
      banner.hidden = true;
      try {
        localStorage.setItem("gr-story-banner", "off");
      } catch (e) {}
    });
  }

  // Consensus strip: clicking a dot opens its evidence in the panel below.
  var strip = document.getElementById("st-strip");
  var panel = document.getElementById("st-strip-panel");
  var dataEl = document.getElementById("st-strip-data");
  if (strip && panel && dataEl) {
    var data = JSON.parse(dataEl.textContent);
    strip.addEventListener("click", function (e) {
      var dot = e.target.closest("[data-sid]");
      if (!dot) return;
      var s = data[dot.getAttribute("data-sid")];
      if (!s) return;
      panel.hidden = false;
      panel.textContent = "";
      var quote = document.createElement("p");
      quote.className = "gr-stmt-text";
      quote.textContent = "“" + s.text + "”";
      var meta = document.createElement("p");
      meta.className = "gr-counts";
      meta.textContent =
        "#" + s.id + " · " + s.source + " · " + s.a + " agree · " +
        s.d + " disagree · " + s.p + " pass (of " + s.n +
        ") · bloc A " + s.A + " · bloc C " + s.C +
        " (agree·disagree·pass)";
      panel.appendChild(quote);
      panel.appendChild(meta);
      panel.focus();
    });
    // keyboard: dots are focusable, Enter/Space activates
    strip.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        var dot = e.target.closest("[data-sid]");
        if (dot) {
          e.preventDefault();
          dot.click();
        }
      }
    });
  }
})();

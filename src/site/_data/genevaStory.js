const fs = require("fs");
const path = require("path");

// Data layer for the /geneva-reflections/story candidate. Reads
// site-data/computed.json (scripts/story_compute.py, 15:05 export). Every
// number on the candidate renders from here; nothing is hand-typed.
// The main page keeps its own frozen pipeline (analyze.py -> results.json,
// 09:00 export) and is not touched.
const COMPUTED = path.join(__dirname, "../../../site-data/computed.json");

// Deterministic cluster layout for the dissolving-groups diagram: members
// of each group sit in a dot grid around the group's center.
function place(count, cx, cy, cols, gap) {
  const pts = [];
  const rows = Math.ceil(count / cols);
  for (let i = 0; i < count; i++) {
    const r = Math.floor(i / cols);
    const inRow = r === rows - 1 ? count - r * cols : cols;
    const c = i % cols;
    pts.push({
      x: cx + (c - (inRow - 1) / 2) * gap,
      y: cy + (r - (rows - 1) / 2) * gap,
    });
  }
  return pts;
}

module.exports = () => {
  const c = JSON.parse(fs.readFileSync(COMPUTED, "utf-8"));

  c.stats.total_votes_display = c.stats.total_votes.toLocaleString("en-US");
  c.top10_live = c.top10_consensus.filter((t) => t.source === "live").length;

  // ---- dissolving-groups diagram --------------------------------------
  // Same participants, two panels: left grouped by the 09:00 clustering,
  // right by the 15:05 blocs. Same array index = same person; closeness-
  // cohort dots carry a persistent outline in both panels.
  const people = c.crosswalk.participants;
  const panels = { left: [], right: [] };

  const LEFT_CENTERS = {
    A: { cx: 90, cy: 92, cols: 4 },
    B: { cx: 265, cy: 76, cols: 4 },
    C: { cx: 105, cy: 218, cols: 5 },
    D: { cx: 268, cy: 190, cols: 2 },
    unclustered: { cx: 268, cy: 232, cols: 3 },
    absent: { cx: 268, cy: 268, cols: 2 },
  };
  const RIGHT_CENTERS = {
    A: { cx: 95, cy: 105, cols: 4 },
    C: { cx: 240, cy: 190, cols: 5 },
    other: { cx: 90, cy: 240, cols: 2 },
    unclustered: { cx: 90, cy: 275, cols: 2 },
  };

  for (const [side, centers, key] of [
    ["left", LEFT_CENTERS, "g0900"],
    ["right", RIGHT_CENTERS, "g1505"],
  ]) {
    const byGroup = {};
    people.forEach((p, i) => {
      const g = p[key];
      (byGroup[g] = byGroup[g] || []).push(i);
    });
    for (const [g, idxs] of Object.entries(byGroup)) {
      const spec = centers[g];
      if (!spec) continue;
      const pts = place(idxs.length, spec.cx, spec.cy, spec.cols, 24);
      idxs.forEach((i, j) => {
        panels[side].push({
          i,
          g,
          x: Math.round(pts[j].x * 10) / 10,
          y: Math.round(pts[j].y * 10) / 10,
          closeness: people[i].closeness,
          dest: people[i].g1505,
          origin: people[i].g0900,
        });
      });
    }
  }
  c.diagram = panels;

  return c;
};

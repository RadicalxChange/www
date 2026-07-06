#!/usr/bin/env python3
"""Compute site-data/computed.json for /geneva-reflections/story/.

Usage:  python3 scripts/story_compute.py

Single source of truth: the 15:05 Pol.is export (data/2026-07-06-1505-*).
The earlier 09:00 export drives the ORIGINAL report at /geneva-reflections/
via scripts/analyze.py + site-data/results.json — do not mix the two.
(The 09:00 export is read here only for the optional clustering-overlay
context in the story page's limits section.)

Every number on the story page comes from the JSON this script emits;
nothing is hand-typed into markup. It also copies both exports' CSVs and
the computed JSON to src/site/files/geneva-reflections/ for download.

Method notes (published for auditability):
  - Vote encoding: 1 agree, -1 disagree, 0 pass, blank = not seen.
  - Blocs: 15:05 group-id 0 -> A (13 incl. the facilitator seed account),
    2 -> C (22). group-id 1 is an outlier pair (n=2): never characterized,
    folded into "other" in visuals. Two participants are unclustered.
  - Participant 0 is the facilitator/seed account (20 votes, all passes):
    included in bloc tallies (disclosed), excluded from participant-level
    visuals and axis scores.
  - Noise statements 22 ("Agree"), 72 ("Xxxx"), 75 ("Not enough time,
    sorry") are excluded everywhere; 83 (2 votes) is excluded from ranked
    displays.
  - Axis scores: mean of signed votes over the statements in the bundle
    that the participant has seen (pass = 0 in the numerator, counts in
    the denominator); null if fewer than MIN_AXIS_VOTES seen.
  - Split-half reliability: odd/even split of each bundle by its published
    order, Pearson r between half-scores over participants with both
    halves scorable, Spearman-Brown corrected.
"""

import csv
import glob
import json
import math
import os
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
OUT = os.path.join(ROOT, "site-data", "computed.json")
DOWNLOAD_DIR = os.path.join(ROOT, "src", "site", "files", "geneva-reflections")

EXPORT = "2026-07-06-1505-3fsymhkn53"
EARLIER = "2026-07-06-0900-3fsymhkn53"

NOISE = {22, 72, 75}          # excluded everywhere
LATE = {83}                   # only 2 votes: excluded from ranked displays
SEED_MAX = 19                 # statements 0-19 authored by the seed account
FACILITATOR = "0"
BLOCS = {"0": "A", "2": "C"}  # group-id 1 is the n=2 outlier pair -> "other"
MIN_AXIS_VOTES = 3
THIN = 5                      # bloc tallies under this get a thin-data flag
QUADRANT_EPS = 0.1

# Axis bundles (sign = direction the vote pushes the score).
AXIS_X = {0: 1, 35: 1, 76: 1, 77: 1, 15: 1, 3: 1, 41: 1, 9: -1}   # + authorship / - boundaries
AXIS_Y = {4: 1, 12: 1, 1: 1, 23: -1, 30: -1, 55: -1, 33: -1}      # + comfortable / - averse


def read_rows(name):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        sys.exit(f"error: {path} not found")
    with open(path, newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def pearson(xs, ys):
    n = len(xs)
    if n < 3:
        return None
    mx, my = sum(xs) / n, sum(ys) / n
    num = sum((a - mx) * (b - my) for a, b in zip(xs, ys))
    dx = math.sqrt(sum((a - mx) ** 2 for a in xs))
    dy = math.sqrt(sum((b - my) ** 2 for b in ys))
    return num / (dx * dy) if dx and dy else None


def axis_score(row, bundle, min_votes=MIN_AXIS_VOTES):
    vals = []
    for sid, sign in bundle.items():
        v = row.get(str(sid), "").strip()
        if v == "":
            continue
        vals.append(int(v) * sign)
    if len(vals) < min_votes:
        return None
    return sum(vals) / len(vals)


def split_half(rows, bundle):
    items = list(bundle.items())
    h1 = dict(items[0::2])
    h2 = dict(items[1::2])
    a, b = [], []
    for r in rows:
        s1 = axis_score(r, h1, min_votes=2)
        s2 = axis_score(r, h2, min_votes=2)
        if s1 is not None and s2 is not None:
            a.append(s1)
            b.append(s2)
    r = pearson(a, b)
    if r is None:
        return None
    return round(2 * r / (1 + r), 4)  # Spearman-Brown


def vote_of(row, sid):
    v = row.get(str(sid), "").strip()
    return None if v == "" else int(v)


def tally(rows, sid):
    t = {"agrees": 0, "disagrees": 0, "passes": 0, "votes": 0}
    for r in rows:
        v = vote_of(r, sid)
        if v is None:
            continue
        t["votes"] += 1
        t["agrees" if v == 1 else "disagrees" if v == -1 else "passes"] += 1
    return t


def main():
    rows = read_rows(f"{EXPORT}-participant-votes.csv")
    texts = {}
    for row in read_rows(f"{EXPORT}-comment-groups.csv"):
        texts[int(row["comment-id"])] = row["comment"].rstrip()

    stmt_ids = sorted(int(c) for c in rows[0] if c.strip().isdigit())
    participants = [r for r in rows if r["participant"] != FACILITATOR]
    bloc_rows = {b: [r for r in rows if BLOCS.get(r["group-id"].strip()) == b]
                 for b in ("A", "C")}

    # ---- per-statement tallies -------------------------------------------
    statements = {}
    for sid in stmt_ids:
        total = tally(rows, sid)
        blocs = {}
        for b in ("A", "C"):
            t = tally(bloc_rows[b], sid)
            t["agree_rate"] = round(t["agrees"] / t["votes"], 4) if t["votes"] else None
            t["thin"] = t["votes"] < THIN
            blocs[b] = t
        statements[str(sid)] = {
            "id": sid,
            "text": texts.get(sid, ""),
            "source": "seed" if sid <= SEED_MAX else "live",
            "noise": sid in NOISE,
            "excluded_from_rankings": sid in NOISE or sid in LATE,
            "total": total,
            "blocs": blocs,
        }

    # ---- consensus ranking (min agree-rate across blocs A and C) --------
    rankable = [s for s in statements.values()
                if not s["excluded_from_rankings"]
                and s["blocs"]["A"]["votes"] and s["blocs"]["C"]["votes"]]
    for s in rankable:
        s["min_bloc_agree_rate"] = round(
            min(s["blocs"]["A"]["agree_rate"], s["blocs"]["C"]["agree_rate"]), 4)
    consensus = sorted(rankable, key=lambda s: -s["min_bloc_agree_rate"])
    consensus_ranking = [s["id"] for s in consensus]
    top10 = [{"id": s["id"], "source": s["source"]} for s in consensus[:10]]

    # ---- per-participant records + axes ----------------------------------
    people = []
    for r in participants:
        g = r["group-id"].strip()
        bloc = BLOCS.get(g) or ("other" if g == "1" else "unclustered")
        x = axis_score(r, AXIS_X)
        y = axis_score(r, AXIS_Y)
        people.append({
            "bloc": bloc,
            "n_votes": int(r["n-votes"]),
            "x": None if x is None else round(x, 4),
            "y": None if y is None else round(y, 4),
        })

    scorable = [p for p in people if p["x"] is not None and p["y"] is not None]
    corr = pearson([p["x"] for p in scorable], [p["y"] for p in scorable])
    quad = {"authorship_averse": 0, "authorship_comfortable": 0,
            "boundaries_averse": 0, "boundaries_comfortable": 0, "mid_zone": 0}
    for p in scorable:
        x, y, e = p["x"], p["y"], QUADRANT_EPS
        if x > e and y < -e:
            k = "authorship_averse"
        elif x > e and y > e:
            k = "authorship_comfortable"
        elif x < -e and y < -e:
            k = "boundaries_averse"
        elif x < -e and y > e:
            k = "boundaries_comfortable"
        else:
            k = "mid_zone"
        quad[k] += 1
        p["quadrant"] = k

    # ---- cohorts ----------------------------------------------------------
    def wants_closeness(r):
        return vote_of(r, 23) == -1 or vote_of(r, 4) == 1

    comfy = [r for r in participants if wants_closeness(r)]
    comfy_on_16 = {"n": len(comfy),
                   "endorsed_16": sum(1 for r in comfy if vote_of(r, 16) == 1),
                   "opposed_16": sum(1 for r in comfy if vote_of(r, 16) == -1),
                   "passed_16": sum(1 for r in comfy if vote_of(r, 16) == 0),
                   "did_not_see_16": sum(1 for r in comfy if vote_of(r, 16) is None)}

    both_23_30 = sum(1 for r in participants
                     if vote_of(r, 23) == 1 and vote_of(r, 30) == 1)

    # the authorship/comfortable quadrant cohort's votes on [15] and [12],
    # vs the rest of bloc C on [12]
    ac_rows = []
    for r in participants:
        x, y = axis_score(r, AXIS_X), axis_score(r, AXIS_Y)
        if x is not None and y is not None and x > QUADRANT_EPS and y > QUADRANT_EPS:
            ac_rows.append(r)
    ac_ids = {r["participant"] for r in ac_rows}
    rest_of_c = [r for r in bloc_rows["C"] if r["participant"] not in ac_ids]
    cohort_builders = {
        "n": len(ac_rows),
        "on_15": tally(ac_rows, 15),
        "on_12": tally(ac_rows, 12),
        "rest_of_C_on_12": tally(rest_of_c, 12),
    }

    # ---- headline stats ---------------------------------------------------
    voters = sum(1 for r in participants if int(r["n-votes"]) > 0)
    total_votes = sum(1 for r in rows for c in map(str, stmt_ids)
                      if r.get(c, "").strip() != "")
    live_count = sum(1 for s in statements.values() if s["source"] == "live")

    computed = {
        "export": EXPORT,
        "earlier_export": EARLIER,
        "method": {
            "blocs": {"A": len(bloc_rows["A"]), "C": len(bloc_rows["C"]),
                      "outlier_pair": 2, "unclustered": 2,
                      "note": "bloc tallies include the facilitator seed account inside A (all passes); participant-level records exclude it"},
            "noise_statements": sorted(NOISE),
            "excluded_from_rankings": sorted(NOISE | LATE),
            "axis_x_bundle": {str(k): ("+" if v > 0 else "-") for k, v in AXIS_X.items()},
            "axis_y_bundle": {str(k): ("+" if v > 0 else "-") for k, v in AXIS_Y.items()},
            "axis_min_votes": MIN_AXIS_VOTES,
            "quadrant_threshold": QUADRANT_EPS,
            "thin_data_below": THIN,
        },
        "stats": {
            "voters": voters,
            "total_votes": total_votes,
            "statements": len(stmt_ids),
            "live_statements": live_count,
        },
        "axes": {
            "correlation_xy": round(corr, 4) if corr is not None else None,
            "split_half_x": split_half(participants, AXIS_X),
            "split_half_y": split_half(participants, AXIS_Y),
            "scorable": len(scorable),
            "quadrants": quad,
        },
        "cohorts": {
            "intimacy_comfortable_on_16": comfy_on_16,
            "agreed_both_23_and_30": both_23_30,
            "authorship_comfortable_builders": cohort_builders,
        },
        "consensus_ranking": consensus_ranking,
        "top10_consensus": top10,
        "participants": people,
        "statements": statements,
    }

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(computed, f, indent=1, ensure_ascii=False)
        f.write("\n")

    os.makedirs(DOWNLOAD_DIR, exist_ok=True)
    for name in (f"{EXPORT}-participant-votes.csv", f"{EXPORT}-comment-groups.csv",
                 f"{EARLIER}-participant-votes.csv", f"{EARLIER}-comment-groups.csv"):
        src = os.path.join(DATA, name)
        if os.path.exists(src):
            shutil.copy(src, os.path.join(DOWNLOAD_DIR, name))
    shutil.copy(OUT, os.path.join(DOWNLOAD_DIR, "computed.json"))

    # ---- console report vs the numbers expected in the brief -------------
    print(f"wrote {os.path.relpath(OUT, ROOT)} and download copies")
    print(f"stats: {voters} voters | {total_votes} votes | {len(stmt_ids)} statements ({live_count} live)")
    print(f"axes: corr={computed['axes']['correlation_xy']} "
          f"split-half X={computed['axes']['split_half_x']} Y={computed['axes']['split_half_y']} "
          f"scorable={len(scorable)}")
    print(f"quadrants: {quad}")
    print(f"cohorts: comfy={comfy_on_16} | both 23+30 = {both_23_30}")
    print(f"builders cohort: {cohort_builders}")
    print("top10 consensus:", [(t['id'], t['source']) for t in top10])
    for sid in (2, 4, 9, 35, 23, 12, 30, 16, 26, 70, 47, 48, 51, 53, 65, 67, 80, 13, 0, 3, 17, 15, 7, 82):
        s = statements[str(sid)]
        t = s["total"]
        a_ = s["blocs"]["A"]; c_ = s["blocs"]["C"]
        print(f"[{sid}] {t['agrees']}/{t['disagrees']}/{t['passes']} "
              f"A {a_['agrees']}/{a_['disagrees']}/{a_['passes']} "
              f"C {c_['agrees']}/{c_['disagrees']}/{c_['passes']} | {s['text'][:40]}")


if __name__ == "__main__":
    main()

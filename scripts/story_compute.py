#!/usr/bin/env python3
"""Compute site-data/computed.json for the /geneva-reflections/story candidate.

Usage:  python3 scripts/story_compute.py

Single source of truth for tallies: the 15:05 Pol.is export
(data/2026-07-06-1505-*). The 09:00 export is read ONLY for the
group-assignment crosswalk used in the dissolving-groups diagram; the
original report at /geneva-reflections/ keeps its own frozen pipeline
(scripts/analyze.py, pinned to 09:00) and is not touched by this script.

Every number on the story candidate comes from the JSON this script emits;
nothing is hand-typed into markup. It also copies both exports' CSVs and
the computed JSON to src/site/files/geneva-reflections/ for download, and
prints a stale-number comparison against the 09:00-based results.json for
the README's discrepancy list.

Method notes (published in the JSON for auditability):
  - Vote encoding: 1 agree, -1 disagree, 0 pass, blank = not seen.
  - 15:05 blocs: group-id 0 -> A (13 incl. the facilitator seed account,
    disclosed), 2 -> C (22). group-id 1 is a 2-member statistical leftover,
    never characterized as a faction ("other" in visuals). Two further
    participants cast 1 vote each, unclustered.
  - Participant 0 is the facilitator/seed account (20 votes, all passes):
    included in bloc tallies (disclosed), excluded from participant-level
    visuals and cohorts.
  - Noise statements 22 ("Agree"), 72 ("Xxxx"), 75 ("Not enough time,
    sorry") excluded everywhere; 83 (2 votes) excluded from ranked
    displays.
  - Closeness cohort: participants who disagreed with [23] or agreed with
    [4] — defined by votes, not clustering, so it survives reclustering.
  - Cross-bloc claims compare A and C only.
"""

import csv
import json
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
LATE = {83}                   # 2 votes: excluded from ranked displays
SEED_MAX = 19
FACILITATOR = "0"
BLOCS = {"0": "A", "2": "C"}  # 15:05; group-id 1 = leftover pair -> "other"
G0900 = {"0": "A", "1": "B", "2": "C", "3": "D"}
THIN = 5


def read_rows(name):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        sys.exit(f"error: {path} not found")
    with open(path, newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


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
    early = read_rows(f"{EARLIER}-participant-votes.csv")
    texts = {}
    for row in read_rows(f"{EXPORT}-comment-groups.csv"):
        texts[int(row["comment-id"])] = row["comment"].rstrip()

    stmt_ids = sorted(int(c) for c in rows[0] if c.strip().isdigit())
    participants = [r for r in rows if r["participant"] != FACILITATOR]
    bloc_rows = {b: [r for r in rows if BLOCS.get(r["group-id"].strip()) == b]
                 for b in ("A", "C")}

    def bloc_of(r):
        g = r["group-id"].strip()
        return BLOCS.get(g) or ("other" if g == "1" else "unclustered")

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

    # ---- consensus ranking (min agree-rate across A and C) --------------
    rankable = [s for s in statements.values()
                if not s["excluded_from_rankings"]
                and s["blocs"]["A"]["votes"] and s["blocs"]["C"]["votes"]]
    for s in rankable:
        s["min_bloc_agree_rate"] = round(
            min(s["blocs"]["A"]["agree_rate"], s["blocs"]["C"]["agree_rate"]), 4)
    consensus = sorted(rankable, key=lambda s: -s["min_bloc_agree_rate"])
    consensus_ranking = [s["id"] for s in consensus]
    top10 = [{"id": s["id"], "source": s["source"]} for s in consensus[:10]]

    # ---- crosswalk 09:00 -> 15:05 (per participant; diagram data) -------
    early_group = {r["participant"]: G0900.get(r["group-id"].strip(), "unclustered")
                   for r in early}

    def closeness(r):
        return vote_of(r, 23) == -1 or vote_of(r, 4) == 1

    people = []
    for r in participants:
        people.append({
            "g0900": early_group.get(r["participant"], "absent"),
            "g1505": bloc_of(r),
            "closeness": closeness(r),
            "both_23_30": vote_of(r, 23) == 1 and vote_of(r, 30) == 1,
            "n_votes": int(r["n-votes"]),
        })

    # where did the 09:00 8-member group B land at 15:05?
    b_dest = {}
    for p in people:
        if p["g0900"] == "B":
            b_dest[p["g1505"]] = b_dest.get(p["g1505"], 0) + 1

    # ---- cohorts ----------------------------------------------------------
    cohort = [r for r in participants if closeness(r)]
    cohort_blocs = {}
    for r in cohort:
        cohort_blocs[bloc_of(r)] = cohort_blocs.get(bloc_of(r), 0) + 1
    cohort_16 = {"n": len(cohort),
                 "endorsed": sum(1 for r in cohort if vote_of(r, 16) == 1),
                 "opposed": sum(1 for r in cohort if vote_of(r, 16) == -1),
                 "passed": sum(1 for r in cohort if vote_of(r, 16) == 0)}

    both = [r for r in participants
            if vote_of(r, 23) == 1 and vote_of(r, 30) == 1]
    both_blocs = {}
    for r in both:
        both_blocs[bloc_of(r)] = both_blocs.get(bloc_of(r), 0) + 1

    # ---- per-bloc pass shares --------------------------------------------
    pass_shares = {}
    for b in ("A", "C"):
        agg = {"votes": 0, "passes": 0}
        for sid in stmt_ids:
            t = statements[str(sid)]["blocs"][b]
            agg["votes"] += t["votes"]
            agg["passes"] += t["passes"]
        pass_shares[b] = {"votes": agg["votes"], "passes": agg["passes"],
                          "share": round(agg["passes"] / agg["votes"], 4)}

    voters = sum(1 for r in participants if int(r["n-votes"]) > 0)
    total_votes = sum(1 for r in rows for c in map(str, stmt_ids)
                      if r.get(c, "").strip() != "")
    live_count = sum(1 for s in statements.values() if s["source"] == "live")

    computed = {
        "export": EXPORT,
        "earlier_export": EARLIER,
        "method": {
            "blocs": {"A": len(bloc_rows["A"]), "C": len(bloc_rows["C"]),
                      "leftover_pair": 2, "unclustered": 2,
                      "note": "bloc tallies include the facilitator seed account inside A (all passes); participant-level records exclude it"},
            "noise_statements": sorted(NOISE),
            "excluded_from_rankings": sorted(NOISE | LATE),
            "closeness_cohort_definition": "disagreed with [23] or agreed with [4]; defined by votes, not clustering",
            "thin_data_below": THIN,
        },
        "stats": {
            "voters": voters,
            "total_votes": total_votes,
            "statements": len(stmt_ids),
            "live_statements": live_count,
        },
        "crosswalk": {
            "participants": people,
            "g0900_sizes": {g: sum(1 for p in people if p["g0900"] == g)
                            for g in ("A", "B", "C", "D", "unclustered", "absent")},
            "g1505_sizes": {g: sum(1 for p in people if p["g1505"] == g)
                            for g in ("A", "C", "other", "unclustered")},
            "b0900_destinations": b_dest,
        },
        "cohorts": {
            "closeness": {"n": len(cohort), "by_bloc": cohort_blocs, "on_16": cohort_16},
            "both_23_and_30": {"n": len(both), "by_bloc": both_blocs},
        },
        "pass_shares": pass_shares,
        "consensus_ranking": consensus_ranking,
        "top10_consensus": top10,
        "statements": statements,
    }

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(computed, f, indent=1, ensure_ascii=False)
        f.write("\n")

    os.makedirs(DOWNLOAD_DIR, exist_ok=True)
    for name in (f"{EXPORT}-participant-votes.csv", f"{EXPORT}-comment-groups.csv",
                 f"{EARLIER}-participant-votes.csv", f"{EARLIER}-comment-groups.csv"):
        shutil.copy(os.path.join(DATA, name), os.path.join(DOWNLOAD_DIR, name))
    shutil.copy(OUT, os.path.join(DOWNLOAD_DIR, "computed.json"))

    # ---- console report ----------------------------------------------------
    print(f"wrote {os.path.relpath(OUT, ROOT)} and download copies")
    print(f"stats: {voters} voters | {total_votes} votes | {len(stmt_ids)} statements ({live_count} live)")
    print(f"crosswalk 0900 sizes: {computed['crosswalk']['g0900_sizes']}")
    print(f"crosswalk 1505 sizes: {computed['crosswalk']['g1505_sizes']}")
    print(f"0900 group B (n=8) landed at 1505 in: {b_dest}")
    print(f"closeness cohort: {computed['cohorts']['closeness']}")
    print(f"both 23+30: {computed['cohorts']['both_23_and_30']}")
    print(f"pass shares: {pass_shares}")
    print("top10:", [(t['id'], t['source']) for t in top10])
    for sid in (2, 4, 9, 23, 30, 55, 16, 26, 70, 47, 48, 51, 66, 53, 65, 67,
                80, 36, 42, 3, 17, 6, 35, 13, 78, 0, 21, 7, 77, 82):
        s = statements[str(sid)]
        t, a_, c_ = s["total"], s["blocs"]["A"], s["blocs"]["C"]
        print(f"[{sid}] {t['agrees']}/{t['disagrees']}/{t['passes']} "
              f"A {a_['agrees']}/{a_['disagrees']}/{a_['passes']} "
              f"C {c_['agrees']}/{c_['disagrees']}/{c_['passes']} | {s['text'][:44]}")

    # ---- stale-number comparison vs the 09:00-based main page --------------
    res_path = os.path.join(ROOT, "site-data", "results.json")
    if os.path.exists(res_path):
        res = json.load(open(res_path))
        print("\n=== stale numbers on /geneva-reflections/ (09:00) vs 15:05 ===")
        diffs = []
        for sid in stmt_ids:
            o = res["statements"].get(str(sid), {}).get("total")
            n = statements[str(sid)]["total"]
            if o and (o["agrees"], o["disagrees"], o["passes"]) != (n["agrees"], n["disagrees"], n["passes"]):
                diffs.append((sid, f"{o['agrees']}/{o['disagrees']}/{o['passes']}",
                              f"{n['agrees']}/{n['disagrees']}/{n['passes']}"))
        for d in diffs:
            print(f"  [{d[0]}] {d[1]} -> {d[2]}")
        print(f"  ({len(diffs)} statements with changed totals; "
              f"headline: participants 38 -> 38 voters (39 rows incl. facilitator), "
              f"statements 83 -> 84, opinion groups 3 -> 2 blocs + leftover pair)")


if __name__ == "__main__":
    main()

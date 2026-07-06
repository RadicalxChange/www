#!/usr/bin/env python3
"""Build site-data/results.json from the Pol.is exports in data/.

Usage:  python3 scripts/analyze.py

Reads (from the repo root):
  data/*-participant-votes.csv   -- authoritative vote matrix (one row per
                                    participant, one column per statement id;
                                    1 = agree, -1 = disagree, 0 = pass,
                                    blank = not seen)
  data/*-comment-groups.csv      -- used ONLY for statement text. Its tallies
                                    are an earlier snapshot than the matrix
                                    and are never used for numbers.

Writes:
  site-data/results.json

Rules (see also src/site/geneva-reflections/README.md):
  - Junk statements (JUNK_IDS) are excluded from all rankings and from the
    statement list shown on the page; their votes still count toward the
    total-votes figure because they were real votes cast.
  - Statements 0-19 are facilitator-authored seeds (participant 0's account);
    20+ were submitted live by participants.
  - Pol.is group ids map 0->A, 1->B, 2->C, 3->D. Group D (n=1) and
    unclustered participants are excluded from group-level metrics but
    included in all totals. Group D tallies are still emitted per statement
    for transparency.
  - agree_rate = agrees / votes-seen (passes count as seen).
  - Consensus metric = the MINIMUM agree rate across groups A/B/C, among
    statements with >= MIN_GROUP_VOTES votes in each of A/B/C.
  - Divisiveness = spread (max - min) of net agree ((a-d)/votes) across
    A/B/C, same eligibility.
  - within_group_splits flags groups where opinion is genuinely divided:
    at least MIN_SPLIT_DECIDED non-pass votes and the minority side holds
    >= SPLIT_MINORITY_SHARE of them.
  - thin flags any per-group tally resting on fewer than THIN_VOTES votes.

Re-running this script after replacing the CSVs in data/ fully refreshes
every number on the /geneva-reflections page (rebuild the site afterwards).
"""

import csv
import glob
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data")
OUT_PATH = os.path.join(ROOT, "site-data", "results.json")
# Public statement-level CSV (aggregate tallies only — never participant
# rows), served as the download link on the results pages. src/site/files is
# passthrough-copied by Eleventy.
CSV_PATH = os.path.join(ROOT, "src", "site", "files",
                        "geneva-reflections-statements.csv")

JUNK_IDS = {22, 72, 75}          # "Agree", "Xxxx", "Not enough time, sorry"
SEED_MAX_ID = 19                 # statements 0-19 are facilitator seeds
GROUP_LETTERS = {"0": "A", "1": "B", "2": "C", "3": "D"}
CLUSTERED_GROUPS = ("A", "B", "C")   # groups used for group-level metrics
MIN_GROUP_VOTES = 4              # eligibility for consensus/divisiveness
MIN_TOTAL_VOTES_PASS_RANK = 10   # eligibility for the most-passed ranking
THIN_VOTES = 5                   # below this a group tally is "thin data"
MIN_SPLIT_DECIDED = 4            # a+d needed before a split can be flagged
SPLIT_MINORITY_SHARE = 0.35      # minority share of non-pass votes


def find_one(pattern):
    matches = sorted(glob.glob(os.path.join(DATA_DIR, pattern)))
    if not matches:
        sys.exit(f"error: no file matching {pattern!r} in {DATA_DIR}")
    if len(matches) > 1:
        print(f"warning: multiple files match {pattern!r}; using {matches[-1]}",
              file=sys.stderr)
    return matches[-1]


def load_statement_text(path):
    texts = {}
    with open(path, newline="", encoding="utf-8") as f:
        for row in csv.DictReader(f):
            sid = int(row["comment-id"])
            # Preserve participants' words exactly; trim trailing whitespace only.
            texts[sid] = row["comment"].rstrip()
    return texts


def load_matrix(path):
    with open(path, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    stmt_ids = sorted(int(c) for c in rows[0] if c.strip().isdigit())
    return rows, stmt_ids


def main():
    votes_path = find_one("*participant-votes*.csv")
    groups_path = find_one("*comment-groups*.csv")

    texts = load_statement_text(groups_path)
    rows, stmt_ids = load_matrix(votes_path)

    missing_text = [s for s in stmt_ids if s not in texts]
    if missing_text:
        print(f"warning: no text for statement ids {missing_text} "
              "(comment-groups export older than vote matrix?)", file=sys.stderr)

    group_sizes = {}
    unclustered = 0
    for r in rows:
        letter = GROUP_LETTERS.get(r["group-id"].strip())
        if letter:
            group_sizes[letter] = group_sizes.get(letter, 0) + 1
        else:
            unclustered += 1

    statements = {}
    total_votes_cast = 0
    for sid in stmt_ids:
        col = str(sid)
        total = {"votes": 0, "agrees": 0, "disagrees": 0, "passes": 0}
        by_group = {g: {"votes": 0, "agrees": 0, "disagrees": 0, "passes": 0}
                    for g in sorted(group_sizes)}
        for r in rows:
            v = r.get(col, "").strip()
            if v == "":
                continue
            letter = GROUP_LETTERS.get(r["group-id"].strip())
            buckets = [total] + ([by_group[letter]] if letter else [])
            for b in buckets:
                b["votes"] += 1
                if v == "1":
                    b["agrees"] += 1
                elif v == "-1":
                    b["disagrees"] += 1
                else:
                    b["passes"] += 1
        total_votes_cast += total["votes"]

        for g, t in by_group.items():
            t["agree_rate"] = round(t["agrees"] / t["votes"], 4) if t["votes"] else None
            t["net_agree"] = (round((t["agrees"] - t["disagrees"]) / t["votes"], 4)
                              if t["votes"] else None)
            t["thin"] = t["votes"] < THIN_VOTES

        eligible = all(by_group.get(g, {}).get("votes", 0) >= MIN_GROUP_VOTES
                       for g in CLUSTERED_GROUPS)
        abc_agree = [by_group[g]["agree_rate"] for g in CLUSTERED_GROUPS] if eligible else []
        abc_net = [by_group[g]["net_agree"] for g in CLUSTERED_GROUPS] if eligible else []

        splits = []
        for g in CLUSTERED_GROUPS:
            t = by_group.get(g)
            if not t:
                continue
            decided = t["agrees"] + t["disagrees"]
            if (decided >= MIN_SPLIT_DECIDED
                    and min(t["agrees"], t["disagrees"]) / decided >= SPLIT_MINORITY_SHARE):
                splits.append(g)

        votes = total["votes"]
        statements[str(sid)] = {
            "id": sid,
            "text": texts.get(sid, ""),
            "source": "seed" if sid <= SEED_MAX_ID else "live",
            "junk": sid in JUNK_IDS,
            "total": total,
            "agree_rate": round(total["agrees"] / votes, 4) if votes else None,
            "pass_rate": round(total["passes"] / votes, 4) if votes else None,
            "net_agree": (round((total["agrees"] - total["disagrees"]) / votes, 4)
                          if votes else None),
            "groups": by_group,
            "eligible_for_rankings": eligible and sid not in JUNK_IDS,
            "consensus_min_agree_rate": round(min(abc_agree), 4) if eligible else None,
            "divisiveness": (round(max(abc_net) - min(abc_net), 4) if eligible else None),
            "within_group_splits": splits,
        }

    rankable = [s for s in statements.values() if s["eligible_for_rankings"]]
    consensus = sorted(rankable, key=lambda s: -s["consensus_min_agree_rate"])
    divisive = sorted(rankable, key=lambda s: -s["divisiveness"])
    passed = sorted(
        (s for s in statements.values()
         if not s["junk"] and s["total"]["votes"] >= MIN_TOTAL_VOTES_PASS_RANK),
        key=lambda s: -s["pass_rate"])

    live = [s for s in statements.values() if s["source"] == "live"]
    results = {
        "source_files": {
            "participant_votes": os.path.basename(votes_path),
            "comment_groups": os.path.basename(groups_path),
        },
        "rules": {
            "junk_ids": sorted(JUNK_IDS),
            "min_group_votes_for_rankings": MIN_GROUP_VOTES,
            "thin_data_below_votes": THIN_VOTES,
            "consensus_metric": "minimum agree rate across groups A/B/C",
            "divisiveness_metric": "spread of (agrees-disagrees)/votes across A/B/C",
        },
        "participation": {
            "participants": len(rows),
            "total_votes": total_votes_cast,
            "total_statements": len(stmt_ids),
            "seed_statements": sum(1 for s in statements.values() if s["source"] == "seed"),
            "live_statements": len(live),
            "live_share": round(len(live) / len(stmt_ids), 4),
            "group_sizes": group_sizes,
            "unclustered": unclustered,
            "opinion_groups": sum(1 for g in group_sizes.values() if g > 1),
        },
        "rankings": {
            "consensus": [s["id"] for s in consensus],
            "divisive": [s["id"] for s in divisive],
            "most_passed": [s["id"] for s in passed],
        },
        "statements": statements,
    }

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
        f.write("\n")

    group_letters = sorted(group_sizes)
    with open(CSV_PATH, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        header = ["statement_id", "statement", "source", "non_substantive",
                  "votes", "agrees", "disagrees", "passes"]
        for g in group_letters:
            header += [f"group_{g}_votes", f"group_{g}_agrees",
                       f"group_{g}_disagrees", f"group_{g}_passes"]
        w.writerow(header)
        for sid in stmt_ids:
            s = statements[str(sid)]
            row = [s["id"], s["text"], s["source"],
                   "yes" if s["junk"] else "no",
                   s["total"]["votes"], s["total"]["agrees"],
                   s["total"]["disagrees"], s["total"]["passes"]]
            for g in group_letters:
                t = s["groups"][g]
                row += [t["votes"], t["agrees"], t["disagrees"], t["passes"]]
            w.writerow(row)

    p = results["participation"]
    print(f"wrote {os.path.relpath(OUT_PATH, ROOT)}")
    print(f"wrote {os.path.relpath(CSV_PATH, ROOT)}")
    print(f"  participants {p['participants']} | votes {p['total_votes']} | "
          f"statements {p['total_statements']} ({p['live_statements']} live) | "
          f"groups {p['group_sizes']} + {p['unclustered']} unclustered")
    print(f"  top consensus: {results['rankings']['consensus'][:8]}")
    print(f"  most divisive: {results['rankings']['divisive'][:8]}")


if __name__ == "__main__":
    main()

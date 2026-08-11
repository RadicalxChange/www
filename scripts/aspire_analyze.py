#!/usr/bin/env python3
"""Build site-data/aspire-results.json from the Pol.is report exports in
data/aspire-canberra/.

Usage:  python3 scripts/aspire_analyze.py

Reads (from the repo root):
  data/aspire-canberra/participant-votes.csv -- authoritative vote matrix
        (one row per participant, one column per statement id;
        1 = agree, -1 = disagree, 0 = pass, blank = not seen), plus the
        Pol.is cluster assignment in the group-id column.
  data/aspire-canberra/comments.csv          -- used ONLY for statement text,
        authorship (seed vs live) and moderation status. Its tallies are a
        separate snapshot and are never used for numbers.
  data/aspire-canberra/summary.csv           -- conversation metadata,
        recorded in results.json for the about-this-data note.

Writes:
  site-data/aspire-results.json
  src/site/files/aspire-canberra-statements.csv

These are the pol.is *report* exports (report r2fdeyrm3xmhrn2e8eekt), a
different format from the admin exports the Geneva page uses: statement text
lives in comments.csv (comment-body) and the cluster id comes with the vote
matrix, so no separate comment-groups file is needed.

Rules (see also src/site/aspire-canberra-policy-lab/README.md):
  - Test statements (JUNK_IDS) are excluded from all rankings and from the
    statement list shown on the page; their votes still count toward the
    total-votes figure because they were real votes cast.
  - Moderator-rejected statements (moderated == -1 in comments.csv, mostly
    duplicates) were withheld from voters (1-2 votes each). They are
    excluded from rankings and the statement table but kept in the CSV,
    flagged, for the record.
  - Statements authored by participant 0 (the facilitator seed account) are
    "seed"; everything else was submitted live in the room.
  - Pol.is group ids map 1->A, 0->B, 2->C. The letters follow the labels
    used in the facilitators' read-out; the mapping was verified against
    each group's defining statements, not assumed from the ids. One
    participant is unclustered: counted in totals, never in group metrics.
  - agree_rate = agrees / votes-seen (passes count as seen).
  - Consensus metric = the MINIMUM agree rate across groups A/B/C, among
    statements with >= MIN_GROUP_VOTES votes in each group.
  - Divisiveness = spread (max - min) of net agree ((a-d)/votes) across
    A/B/C, same eligibility.
  - within_group_splits flags groups where opinion is genuinely divided:
    at least MIN_SPLIT_DECIDED non-pass votes and the minority side holds
    >= SPLIT_MINORITY_SHARE of them.
  - thin flags any per-group tally resting on fewer than THIN_VOTES votes.

Re-running this script after replacing the CSVs fully refreshes every
number on the /aspire-canberra-policy-lab page (rebuild the site after).
"""

import csv
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data", "aspire-canberra")
OUT_PATH = os.path.join(ROOT, "site-data", "aspire-results.json")
# Public statement-level CSV (aggregate tallies only — never participant
# rows), served as the download link on the results pages. src/site/files is
# passthrough-copied by Eleventy.
CSV_PATH = os.path.join(ROOT, "src", "site", "files",
                        "aspire-canberra-statements.csv")

JUNK_IDS = {49, 50, 51}          # "Testing", "Testint", "Test"
SEED_AUTHOR = "0"                # participant 0 = facilitator seed account
# Final-export clustering. Letters follow the facilitators' read-out; the
# id->letter mapping was verified by matching each cluster's defining
# statements (e.g. [11] evidence-split -> B, [9]/[8] government-pays -> C)
# against the read-out, because the deck was built from an earlier snapshot
# with different group sizes (A 28 / B 14 / C 30 of 72; final: 31/21/20 of 73).
GROUP_LETTERS = {"1": "A", "0": "B", "2": "C"}
CLUSTERED_GROUPS = ("A", "B", "C")
MIN_GROUP_VOTES = 4              # eligibility for consensus/divisiveness
MIN_TOTAL_VOTES_PASS_RANK = 10   # eligibility for the most-passed ranking
THIN_VOTES = 5                   # below this a group tally is "thin data"
MIN_SPLIT_DECIDED = 4            # a+d needed before a split can be flagged
SPLIT_MINORITY_SHARE = 0.35      # minority share of non-pass votes


def load_comments(path):
    meta = {}
    with open(path, newline="", encoding="utf-8") as f:
        for row in csv.DictReader(f):
            sid = int(row["comment-id"])
            meta[sid] = {
                # Preserve participants' words exactly; trim trailing
                # whitespace only.
                "text": row["comment-body"].rstrip(),
                "author": row["author-id"].strip(),
                "moderated": row["moderated"].strip(),
            }
    return meta


def load_matrix(path):
    with open(path, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    stmt_ids = sorted(int(c) for c in rows[0] if c.strip().isdigit())
    return rows, stmt_ids


def load_summary(path):
    out = {}
    with open(path, newline="", encoding="utf-8") as f:
        for row in csv.reader(f):
            if len(row) >= 2:
                out[row[0]] = row[1]
    return out


def main():
    comments = load_comments(os.path.join(DATA_DIR, "comments.csv"))
    rows, stmt_ids = load_matrix(os.path.join(DATA_DIR, "participant-votes.csv"))
    summary = load_summary(os.path.join(DATA_DIR, "summary.csv"))

    missing_text = [s for s in stmt_ids if s not in comments]
    if missing_text:
        print(f"warning: no text for statement ids {missing_text}")

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
        info = comments.get(sid, {})
        rejected = info.get("moderated") == "-1"
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

        eligible = (not rejected and sid not in JUNK_IDS and
                    all(by_group.get(g, {}).get("votes", 0) >= MIN_GROUP_VOTES
                        for g in CLUSTERED_GROUPS))
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
            "text": info.get("text", ""),
            "source": "seed" if info.get("author") == SEED_AUTHOR else "live",
            "junk": sid in JUNK_IDS,
            "rejected": rejected,
            "total": total,
            "agree_rate": round(total["agrees"] / votes, 4) if votes else None,
            "pass_rate": round(total["passes"] / votes, 4) if votes else None,
            "net_agree": (round((total["agrees"] - total["disagrees"]) / votes, 4)
                          if votes else None),
            "groups": by_group,
            "eligible_for_rankings": eligible,
            "consensus_min_agree_rate": round(min(abc_agree), 4) if eligible else None,
            "divisiveness": (round(max(abc_net) - min(abc_net), 4) if eligible else None),
            "within_group_splits": splits,
        }

    rankable = [s for s in statements.values() if s["eligible_for_rankings"]]
    consensus = sorted(rankable, key=lambda s: -s["consensus_min_agree_rate"])
    divisive = sorted(rankable, key=lambda s: -s["divisiveness"])
    passed = sorted(
        (s for s in statements.values()
         if not s["junk"] and not s["rejected"]
         and s["total"]["votes"] >= MIN_TOTAL_VOTES_PASS_RANK),
        key=lambda s: -s["pass_rate"])

    live = [s for s in statements.values() if s["source"] == "live"]
    shown = [s for s in statements.values() if not s["junk"] and not s["rejected"]]
    results = {
        "source_files": {
            "participant_votes": "participant-votes.csv",
            "comments": "comments.csv",
            "report": "https://pol.is/report/r2fdeyrm3xmhrn2e8eekt",
        },
        "export_summary": {
            "voters": summary.get("voters"),
            "voters_in_conv": summary.get("voters-in-conv"),
            "commenters": summary.get("commenters"),
            "comments": summary.get("comments"),
            "groups": summary.get("groups"),
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
            "shown_statements": len(shown),
            "rejected_statements": sum(1 for s in statements.values() if s["rejected"]),
            "seed_statements": sum(1 for s in statements.values() if s["source"] == "seed"),
            "live_statements": len(live),
            "live_share": round(len(live) / len(stmt_ids), 4),
            "group_sizes": group_sizes,
            "unclustered": unclustered,
            "opinion_groups": len(CLUSTERED_GROUPS),
            "bloc_participants": sum(group_sizes.get(g, 0) for g in CLUSTERED_GROUPS),
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

    group_letters = [g for g in CLUSTERED_GROUPS if g in group_sizes]
    with open(CSV_PATH, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        header = ["statement_id", "statement", "source", "non_substantive",
                  "moderator_rejected", "votes", "agrees", "disagrees", "passes"]
        for g in group_letters:
            header += [f"group_{g}_votes", f"group_{g}_agrees",
                       f"group_{g}_disagrees", f"group_{g}_passes"]
        w.writerow(header)
        for sid in stmt_ids:
            s = statements[str(sid)]
            row = [s["id"], s["text"], s["source"],
                   "yes" if s["junk"] else "no",
                   "yes" if s["rejected"] else "no",
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
          f"statements {p['total_statements']} ({p['shown_statements']} shown, "
          f"{p['live_statements']} live) | groups {p['group_sizes']} + "
          f"{p['unclustered']} unclustered")
    print(f"  top consensus: {results['rankings']['consensus'][:10]}")
    print(f"  most divisive: {results['rankings']['divisive'][:10]}")


if __name__ == "__main__":
    main()

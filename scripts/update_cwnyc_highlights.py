#!/usr/bin/env python3
"""Build src/site/_data/communityweekHighlights.json from Polis exports.

Pulls public CSV exports for conversation 6epckxncim / report
r45wsbrxmtk78wndwbhpm and writes the JSON file that
src/site/communityweeknyc/index.njk reads.

This script produces a mid-conversation snapshot including:

- `topStatements`: three at-a-glance cards (highest agreement /
  most divided / most engaged)
- `consensus`: top 5 statements with the highest minimum-across-groups
  agree rate (i.e. agreed-on by both opinion groups)
- `groups`: per-group representative statements computed using Polis's
  documented representative-comments algorithm
  (https://compdemocracy.org/representative-comments/) — Laplace-
  smoothed group-vs-complement representativeness ratio combined with
  Fisher's exact test p-value

If the substantive content matches what's already on disk, lastUpdated
is preserved so `git diff` sees no change.

Data source: Polis CSV exports, licensed CC BY 4.0 to The Computational
Democracy Project (https://compdemocracy.org/).
"""

from __future__ import annotations

import csv
import io
import json
import logging
import math
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable

import pandas as pd
import requests
from scipy.stats import fisher_exact

# ---- Constants -------------------------------------------------------------

REPORT_ID = "r45wsbrxmtk78wndwbhpm"
EXPORT_BASE = f"https://pol.is/api/v3/reportExport/{REPORT_ID}"
TIMEOUT_SECONDS = 30

# Section-level safety gate. Below either threshold the script writes an
# empty `topStatements` list — the template's hide-if-empty gate then
# keeps the whole section off the page.
MIN_TOTAL_VOTES = 0
MIN_PARTICIPANTS = 0

# Per-statement vote floor for the top three at-a-glance cards. The
# ratio scales with the conversation; the hard floor protects against
# pulling cards from too thin a slice. Uses `voters` (everyone who cast
# any vote) as the participant base — same as before.
MIN_VOTES_PER_STATEMENT_FLOOR = 5
MIN_VOTES_PER_STATEMENT_RATIO = 0.3

# Min-votes threshold for consensus selection. Uses `voters_in_conv`
# (the population Polis itself uses for analysis — people who voted on
# enough comments to be assigned a group), not `voters`. ceil() so
# that "25% of voters_in_conv" rounds up — at 31 voters_in_conv this
# gives 8.
def min_votes_for_findings(voters_in_conv: int) -> int:
    return max(5, math.ceil(0.25 * voters_in_conv))

# Noise filter for per-group representative statements: a statement
# with fewer than this many in-group voters is dropped from the
# candidate set before ranking. Better 2 strong cards per group than 3
# with one being noise from a small sample.
MIN_IN_GROUP_VOTERS = 4

OUT_PATH = Path("src/site/_data/communityweekHighlights.json")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
)
log = logging.getLogger("cwnyc-highlights")


# ---- IO --------------------------------------------------------------------


def fetch_table(name: str) -> pd.DataFrame:
    """Fetch a Polis CSV export and parse it as a table."""
    url = f"{EXPORT_BASE}/{name}.csv"
    log.info("GET %s", url)
    r = requests.get(url, timeout=TIMEOUT_SECONDS)
    r.raise_for_status()
    return pd.read_csv(io.StringIO(r.text))


def fetch_summary() -> dict[str, str]:
    """summary.csv is a 2-column key/value list, not a normal table."""
    url = f"{EXPORT_BASE}/summary.csv"
    log.info("GET %s", url)
    r = requests.get(url, timeout=TIMEOUT_SECONDS)
    r.raise_for_status()
    out: dict[str, str] = {}
    for row in csv.reader(io.StringIO(r.text)):
        if len(row) >= 2:
            out[row[0]] = row[1]
    return out


# ---- Pure helpers (covered by tests) --------------------------------------


def percentages_to_100(parts: list[int]) -> list[int]:
    """Convert raw counts to integer percentages summing to 100.

    Largest-remainder rounding. Empty or zero-sum input returns zeros.
    """
    total = sum(parts)
    if total <= 0:
        return [0] * len(parts)
    raw = [p * 100.0 / total for p in parts]
    floors = [math.floor(v) for v in raw]
    deficit = 100 - sum(floors)
    if deficit <= 0:
        return floors
    order = sorted(
        range(len(parts)),
        key=lambda i: raw[i] - floors[i],
        reverse=True,
    )
    for i in range(deficit):
        floors[order[i % len(order)]] += 1
    return floors


def compute_comment_stats(
    comments_df: pd.DataFrame,
    vote_matrix: pd.DataFrame,
) -> list[dict[str, Any]]:
    """Per-comment vote stats for moderated>=0 comments (used by the
    top three cards). isUserSubmitted is true when author-id != 0."""
    out: list[dict[str, Any]] = []
    for _, c in comments_df.iterrows():
        if c["moderated"] < 0:
            continue
        cid = int(c["comment-id"])
        col_name = str(cid)
        if col_name not in vote_matrix.columns:
            continue
        col = vote_matrix[col_name]
        agree = int((col == 1).sum())
        disagree = int((col == -1).sum())
        pass_ = int((col == 0).sum())
        total = agree + disagree + pass_
        out.append(
            {
                "comment_id": cid,
                "text": str(c["comment-body"]),
                "isUserSubmitted": int(c["author-id"]) != 0,
                "agree": agree,
                "disagree": disagree,
                "pass": pass_,
                "total": total,
            }
        )
    return out


def _build_card(label: str, c: dict[str, Any]) -> dict[str, Any]:
    pct_agree, pct_disagree, pct_pass = percentages_to_100(
        [c["agree"], c["disagree"], c["pass"]]
    )
    return {
        "label": label,
        "text": c["text"],
        "isUserSubmitted": c["isUserSubmitted"],
        "votes": {
            "agree": pct_agree,
            "disagree": pct_disagree,
            "pass": pct_pass,
            "total": c["total"],
        },
    }


def select_cards(
    comment_stats: list[dict[str, Any]],
    participants_count: int,
) -> list[dict[str, Any]]:
    """Select up to 3 at-a-glance cards: highest agreement / most
    divided / most engaged. Same logic as before. Collisions fall back
    to next-best by that rule's criterion."""
    min_votes = max(
        MIN_VOTES_PER_STATEMENT_FLOOR,
        int(MIN_VOTES_PER_STATEMENT_RATIO * participants_count),
    )
    eligible = [r for r in comment_stats if r["total"] >= min_votes]
    log.info(
        "Top-card eligibility: %d votes/statement; %d/%d statements eligible",
        min_votes,
        len(eligible),
        len(comment_stats),
    )

    cards: list[dict[str, Any]] = []
    used: set[int] = set()

    def pick(label: str, sort_key, why) -> None:
        for c in sorted(eligible, key=sort_key):
            if c["comment_id"] in used:
                continue
            cards.append(_build_card(label, c))
            used.add(c["comment_id"])
            log.info("%s: comment-id=%d (%s)", label, c["comment_id"], why(c))
            return
        log.info("%s: no eligible comment", label)

    pick(
        "Highest agreement",
        lambda r: (-(r["agree"] / r["total"]), -r["total"]),
        lambda c: f"{c['agree']}/{c['total']} = {100*c['agree']/c['total']:.0f}% agree",
    )
    pick(
        "Most divided",
        lambda r: (abs(r["agree"] - r["disagree"]) / r["total"], -r["total"]),
        lambda c: f"|a-d|/total = {abs(c['agree']-c['disagree'])/c['total']:.2f}, total {c['total']}",
    )
    pick(
        "Most engaged",
        lambda r: -r["total"],
        lambda c: f"{c['total']} total votes",
    )
    return cards


# ---- Per-comment per-group analysis ---------------------------------------


def parse_comment_groups(
    comments_df: pd.DataFrame,
    comment_groups_df: pd.DataFrame,
) -> list[dict[str, Any]]:
    """Join comment-groups.csv with comments.csv and produce one dict
    per visible (moderated>=0) comment with per-group vote breakdowns.

    Assumes the standard Polis 2-group export schema: comment-groups.csv
    has `group-a-*` and `group-b-*` columns mapping to participant-votes
    group-id 0 and 1 respectively.
    """
    moderated_ok = comments_df[comments_df["moderated"] >= 0][
        ["comment-id", "author-id", "comment-body"]
    ]
    merged = comment_groups_df.merge(moderated_ok, on="comment-id", how="inner")

    out: list[dict[str, Any]] = []
    for _, r in merged.iterrows():
        ga_v = int(r["group-a-votes"])
        gb_v = int(r["group-b-votes"])
        ga_a = int(r["group-a-agrees"])
        ga_d = int(r["group-a-disagrees"])
        ga_p = int(r["group-a-passes"])
        gb_a = int(r["group-b-agrees"])
        gb_d = int(r["group-b-disagrees"])
        gb_p = int(r["group-b-passes"])
        total_v = int(r["total-votes"])
        total_a = int(r["total-agrees"])
        total_d = int(r["total-disagrees"])
        total_p = int(r["total-passes"])
        out.append(
            {
                "comment_id": int(r["comment-id"]),
                "text": str(r["comment-body"]),
                "isUserSubmitted": int(r["author-id"]) != 0,
                "total": total_v,
                "total_agree": total_a,
                "total_disagree": total_d,
                "total_pass": total_p,
                # Per-group counts: g0 = group A, g1 = group B
                "g0_voted": ga_v,
                "g0_agree": ga_a,
                "g0_disagree": ga_d,
                "g0_pass": ga_p,
                "g1_voted": gb_v,
                "g1_agree": gb_a,
                "g1_disagree": gb_d,
                "g1_pass": gb_p,
            }
        )
    return out


# ---- Polis representative-comments algorithm ------------------------------


def representativeness_with_priors(
    in_a: int, in_voted: int, out_a: int, out_voted: int
) -> float:
    """Laplace-smoothed representativeness ratio.

    P_v(g, c) = (N_a_v + 1) / (N_v + 2). The +1/+2 Laplace pseudocounts
    keep the ratio finite when either group has zero votes of type v
    and avoid wild ratios on small denominators.
    """
    p_in = (in_a + 1) / (in_voted + 2)
    p_out = (out_a + 1) / (out_voted + 2)
    return p_in / p_out


def fisher_p_two_tailed(
    in_a: int, in_voted: int, out_a: int, out_voted: int
) -> float:
    """Two-sided Fisher's exact test p-value for the 2x2 table:

        in-group:    voted_v=in_a    not_v=in_voted-in_a
        out-group:   voted_v=out_a   not_v=out_voted-out_a

    The "not_v" cells include both opposite-vote AND pass — i.e.
    everything that wasn't a vote of type v. Returns 1.0 on a degenerate
    table (zero-row or zero-column) — those should never beat any well-
    formed pairing on the score anyway.
    """
    a = in_a
    b = in_voted - in_a
    c = out_a
    d = out_voted - out_a
    if a + b == 0 or c + d == 0 or a + c == 0 or b + d == 0:
        return 1.0
    _, p = fisher_exact([[a, b], [c, d]], alternative="two-sided")
    return float(p)


def representative_score(
    in_a: int, in_voted: int, out_a: int, out_voted: int
) -> tuple[float, float, float]:
    """Returns (R, p, score). score = R * (1 - p)."""
    r = representativeness_with_priors(in_a, in_voted, out_a, out_voted)
    p = fisher_p_two_tailed(in_a, in_voted, out_a, out_voted)
    return r, p, r * (1 - p)


# ---- Consensus / per-group selection --------------------------------------


def select_consensus(
    cg_stats: list[dict[str, Any]],
    min_votes: int,
    top_n: int = 5,
) -> list[dict[str, Any]]:
    """Statements with the highest minimum-across-groups agree rate.

    `min` (not mean) of the two group agree rates: a statement only
    counts as consensus if BOTH groups actually agreed at a high rate.
    """
    candidates = [r for r in cg_stats if r["total"] >= min_votes]
    enriched = []
    for r in candidates:
        # Agree rate per group (denominator = group voters who voted at all)
        g0_rate = r["g0_agree"] / r["g0_voted"] if r["g0_voted"] > 0 else 0.0
        g1_rate = r["g1_agree"] / r["g1_voted"] if r["g1_voted"] > 0 else 0.0
        enriched.append(
            {
                **r,
                "g0_agree_rate": g0_rate,
                "g1_agree_rate": g1_rate,
                "min_group_agree_rate": min(g0_rate, g1_rate),
            }
        )
    enriched.sort(key=lambda r: (-r["min_group_agree_rate"], -r["total"]))
    return enriched[:top_n]


def select_representative_per_group(
    cg_stats: list[dict[str, Any]],
    groups_count: int,
    per_group: int = 3,
    group_sizes: dict[int, int] | None = None,
) -> list[dict[str, Any]]:
    """For each group in [0, groups_count): rank all (statement, vote
    type) pairs by representativeness score and take the top
    `per_group` distinct statements (across both vote types) that pass
    the in-group noise filter.

    `group_sizes`: optional dict mapping group_id -> participant count.
    If supplied, used for the rendered `size`. Otherwise we fall back
    to max(in_voted across comments), which undercounts when not every
    member of a group voted on a single comment.

    If groups_count != 2, returns []: this implementation reads
    comment-groups.csv columns hardcoded to 2 groups.
    """
    if groups_count != 2:
        log.info(
            "Skipping per-group selection: groups_count=%d != 2. "
            "The 2-group case is the only one comment-groups.csv supports.",
            groups_count,
        )
        return []

    groups_out: list[dict[str, Any]] = []
    for g in (0, 1):
        in_prefix = "g0" if g == 0 else "g1"
        out_prefix = "g1" if g == 0 else "g0"

        candidates: list[dict[str, Any]] = []
        for r in cg_stats:
            in_voted = r[f"{in_prefix}_voted"]
            if in_voted < MIN_IN_GROUP_VOTERS:
                continue  # noise filter
            for vote_type, in_a_key, out_a_key in (
                ("agree", "agree", "agree"),
                ("disagree", "disagree", "disagree"),
            ):
                in_a = r[f"{in_prefix}_{in_a_key}"]
                out_a = r[f"{out_prefix}_{out_a_key}"]
                out_voted = r[f"{out_prefix}_voted"]
                rep_r, p, score = representative_score(
                    in_a, in_voted, out_a, out_voted
                )
                in_rate = in_a / in_voted if in_voted > 0 else 0.0
                out_rate = out_a / out_voted if out_voted > 0 else 0.0
                candidates.append(
                    {
                        "comment_id": r["comment_id"],
                        "text": r["text"],
                        "isUserSubmitted": r["isUserSubmitted"],
                        "voteType": vote_type,
                        "inGroupRate": round(in_rate, 4),
                        "outGroupRate": round(out_rate, 4),
                        "inGroupN": in_voted,
                        "outGroupN": out_voted,
                        "R": round(rep_r, 4),
                        "p": round(p, 4),
                        "score": round(score, 4),
                    }
                )

        # Rank by score desc; pick top per_group distinct comment_ids
        candidates.sort(key=lambda c: -c["score"])
        chosen: list[dict[str, Any]] = []
        chosen_ids: set[int] = set()
        for c in candidates:
            if c["comment_id"] in chosen_ids:
                continue
            chosen.append(c)
            chosen_ids.add(c["comment_id"])
            log.info(
                "Group %d: comment-id=%d (%s, R=%.2f, p=%.3f, in=%d/%d, out=%d/%d)",
                g,
                c["comment_id"],
                c["voteType"],
                c["R"],
                c["p"],
                int(c["inGroupRate"] * c["inGroupN"]),
                c["inGroupN"],
                int(c["outGroupRate"] * c["outGroupN"]),
                c["outGroupN"],
            )
            if len(chosen) >= per_group:
                break

        # Group size: prefer the authoritative count from
        # participant-votes.csv if caller passed it in. Fall back to
        # max(in_voted) across comments — that undercounts when not
        # every group member voted on a single comment.
        if group_sizes is not None and g in group_sizes:
            size = int(group_sizes[g])
        else:
            size = int(max(
                (r[f"{in_prefix}_voted"] for r in cg_stats), default=0
            ))

        groups_out.append(
            {
                "id": g,
                "size": size,
                "representativeStatements": [
                    {
                        "text": c["text"],
                        "isUserSubmitted": c["isUserSubmitted"],
                        "voteType": c["voteType"],
                        "inGroupRate": c["inGroupRate"],
                        "outGroupRate": c["outGroupRate"],
                        "inGroupN": c["inGroupN"],
                        "outGroupN": c["outGroupN"],
                        "score": c["score"],
                    }
                    for c in chosen
                ],
            }
        )
    return groups_out


# ---- Output ----------------------------------------------------------------


def now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def merge_lastupdated(payload: dict[str, Any]) -> dict[str, Any]:
    """If everything except lastUpdated matches what's on disk, retain
    the existing timestamp so the workflow's byte-equality check
    skips the commit."""
    fresh = now_iso()
    if not OUT_PATH.exists():
        payload["lastUpdated"] = fresh
        return payload
    try:
        existing = json.loads(OUT_PATH.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        payload["lastUpdated"] = fresh
        return payload
    sans = {k: v for k, v in payload.items() if k != "lastUpdated"}
    existing_sans = {k: v for k, v in existing.items() if k != "lastUpdated"}
    if sans == existing_sans:
        payload["lastUpdated"] = existing.get("lastUpdated") or fresh
    else:
        payload["lastUpdated"] = fresh
    return payload


def write_payload(payload: dict[str, Any]) -> None:
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with OUT_PATH.open("w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False, sort_keys=True)
        f.write("\n")
    log.info("Wrote %s", OUT_PATH)


# ---- Output shaping for JSON ----------------------------------------------


def _consensus_card(r: dict[str, Any]) -> dict[str, Any]:
    pct_a, pct_d, pct_p = percentages_to_100(
        [r["total_agree"], r["total_disagree"], r["total_pass"]]
    )
    return {
        "text": r["text"],
        "isUserSubmitted": r["isUserSubmitted"],
        "votes": {
            "agree": pct_a,
            "disagree": pct_d,
            "pass": pct_p,
            "total": r["total"],
        },
        "minGroupAgreeRate": round(r["min_group_agree_rate"], 4),
    }


# ---- Main ------------------------------------------------------------------


def main() -> int:
    try:
        summary = fetch_summary()
        comments = fetch_table("comments")
        vote_matrix = fetch_table("participant-votes")
        comment_groups = fetch_table("comment-groups")
        # Also fetched per spec; not currently consumed (comment-groups.csv
        # has the per-group aggregates we need).
        fetch_table("votes")
    except Exception as e:
        log.error("Fetch failed: %s", e)
        return 1

    voters = int(summary.get("voters", 0))
    voters_in_conv = int(summary.get("voters-in-conv", 0))
    commenters = int(summary.get("commenters", 0))
    groups_count = int(summary.get("groups", 0))

    total_votes = int(vote_matrix["n-votes"].sum()) if "n-votes" in vote_matrix.columns else 0
    statements_count = (
        int((comments["moderated"] >= 0).sum()) if "moderated" in comments.columns else 0
    )

    log.info(
        "voters=%d voters_in_conv=%d commenters=%d statements=%d groups=%d total_votes=%d",
        voters, voters_in_conv, commenters, statements_count, groups_count, total_votes,
    )

    if total_votes < MIN_TOTAL_VOTES or voters < MIN_PARTICIPANTS:
        log.info("Below safety gate. Writing empty state.")
        payload: dict[str, Any] = {
            "consensus": [],
            "groups": [],
            "stats": None,
            "topStatements": [],
        }
    else:
        # Top three at-a-glance cards (existing logic; uses participant-votes
        # for per-vote breakdowns including pass counts).
        comment_stats = compute_comment_stats(comments, vote_matrix)
        top_cards = select_cards(comment_stats, voters)

        # Per-group analysis source.
        cg_stats = parse_comment_groups(comments, comment_groups)
        min_findings_votes = min_votes_for_findings(voters_in_conv)
        log.info(
            "Consensus eligibility: votes>=%d (max(5, ceil(0.25*%d)))",
            min_findings_votes, voters_in_conv,
        )

        consensus_rows = select_consensus(cg_stats, min_findings_votes, top_n=5)
        for r in consensus_rows:
            log.info(
                "Consensus: comment-id=%d (min group agree=%.0f%%, total=%d)",
                r["comment_id"], r["min_group_agree_rate"] * 100, r["total"],
            )

        # Authoritative group sizes come from participant-votes.csv —
        # the number of voters assigned to each group-id.
        group_sizes: dict[int, int] = {}
        if "group-id" in vote_matrix.columns:
            for gid, count in vote_matrix["group-id"].dropna().astype(int).value_counts().items():
                group_sizes[int(gid)] = int(count)

        groups_rows = select_representative_per_group(
            cg_stats, groups_count, per_group=3, group_sizes=group_sizes
        )

        payload = {
            "consensus": [_consensus_card(r) for r in consensus_rows],
            "groups": groups_rows,
            "stats": {
                "votes": total_votes,
                "statements": statements_count,
                "participants": voters,
                "votersInConv": voters_in_conv,
                "commenters": commenters,
                "groups": groups_count,
            },
            "topStatements": top_cards,
        }

    payload = merge_lastupdated(payload)
    write_payload(payload)
    return 0


if __name__ == "__main__":
    sys.exit(main())

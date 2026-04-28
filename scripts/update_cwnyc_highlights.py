#!/usr/bin/env python3
"""Build src/site/_data/communityweekHighlights.json from live Polis exports.

Pulls public CSV exports for conversation 6epckxncim / report
r45wsbrxmtk78wndwbhpm and writes the small JSON file that
src/site/communityweeknyc/index.njk reads.

Run by .github/workflows/update-cwnyc-highlights.yml on a 4-hour cron.

If the substantive content matches what's already on disk, lastUpdated
is preserved so `git diff` sees no change and the workflow skips the
commit.

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

# ---- Constants -------------------------------------------------------------

REPORT_ID = "r45wsbrxmtk78wndwbhpm"
EXPORT_BASE = f"https://pol.is/api/v3/reportExport/{REPORT_ID}"
TIMEOUT_SECONDS = 30

# Section-level safety gate. Below either threshold the script writes an
# empty `statements` list — the template's hide-if-empty gate then keeps
# the whole section off the page until the conversation has enough data
# to be worth showing.
MIN_TOTAL_VOTES = 50
MIN_PARTICIPANTS = 20

# Per-statement vote floor for cards. The ratio (20% of participants)
# scales with the conversation: as more people participate, the bar for a
# card to appear rises proportionally. The hard floor (20) prevents
# pulling cards from too thin a slice in early days.
MIN_VOTES_PER_STATEMENT_FLOOR = 20
MIN_VOTES_PER_STATEMENT_RATIO = 0.2

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

    Largest-remainder method: floor each share, then distribute the
    leftover percentage points to the entries with the largest fractional
    remainders. Returns all zeros if input is empty or sums to zero.
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
    """Build per-comment vote stats from comments.csv + participant-votes.csv.

    Excludes comments with `moderated < 0` (removed). `vote_matrix` is the
    wide-format participant-votes.csv with per-comment columns named "0",
    "1", …, "N-1" — vote codes 1=agree, -1=disagree, 0=pass, blank=not
    yet voted.
    """
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
    """Select up to 3 statement cards by the three rules.

    All three rules are gated by the same per-statement vote threshold
    so a card only appears once at least one statement has crossed a
    real engagement bar. If two rules pick the same comment, the second
    occurrence falls back to the next-best by that rule's criterion.
    """
    min_votes = max(
        MIN_VOTES_PER_STATEMENT_FLOOR,
        int(MIN_VOTES_PER_STATEMENT_RATIO * participants_count),
    )
    eligible = [r for r in comment_stats if r["total"] >= min_votes]
    log.info(
        "Eligibility threshold: %d votes per statement; %d/%d statements eligible",
        min_votes,
        len(eligible),
        len(comment_stats),
    )

    cards: list[dict[str, Any]] = []
    used: set[int] = set()

    def pick(
        label: str,
        sort_key: Callable[[dict[str, Any]], Any],
        why: Callable[[dict[str, Any]], str],
    ) -> None:
        for c in sorted(eligible, key=sort_key):
            if c["comment_id"] in used:
                continue
            cards.append(_build_card(label, c))
            used.add(c["comment_id"])
            log.info("%s: comment-id=%d (%s)", label, c["comment_id"], why(c))
            return
        log.info("%s: no eligible comment", label)

    # (a) Highest agreement: agree fraction desc; total desc as tie-break
    pick(
        "Highest agreement",
        lambda r: (-(r["agree"] / r["total"]), -r["total"]),
        lambda c: f"{c['agree']}/{c['total']} = {100 * c['agree'] / c['total']:.0f}% agree",
    )

    # (b) Most divided: smallest |agree-disagree| share; total desc as tie-break
    pick(
        "Most divided",
        lambda r: (
            abs(r["agree"] - r["disagree"]) / r["total"],
            -r["total"],
        ),
        lambda c: (
            f"|agree-disagree| = "
            f"{abs(c['agree'] - c['disagree']) / c['total']:.2f}, total {c['total']}"
        ),
    )

    # (c) Most engaged: highest total vote count, gated by min_votes too —
    # so the card only appears once a statement has cleared a real bar,
    # not just edged out very-low-vote peers in the first hours.
    pick(
        "Most engaged",
        lambda r: -r["total"],
        lambda c: f"{c['total']} total votes",
    )

    return cards


# ---- Output ----------------------------------------------------------------


def now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def merge_lastupdated(payload: dict[str, Any]) -> dict[str, Any]:
    """If everything except `lastUpdated` matches what's on disk, retain
    the existing timestamp so the workflow's byte-equality check skips
    the commit."""
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


# ---- Main ------------------------------------------------------------------


def main() -> int:
    try:
        summary = fetch_summary()
        comments = fetch_table("comments")
        votes = fetch_table("participant-votes")
    except Exception as e:
        log.error("Fetch failed: %s", e)
        return 1

    # `summary.csv:voters` = "people who cast >=1 vote", NOT "people who
    # loaded the page". This is the count we display as `participants` and
    # also the denominator for the per-statement min-vote ratio.
    voters = int(summary.get("voters", 0))

    # Total votes cast = sum of n-votes across all participants in
    # participant-votes.csv. summary.csv doesn't expose this.
    total_votes = (
        int(votes["n-votes"].sum()) if "n-votes" in votes.columns else 0
    )

    # Statement count = comments visible to participants (moderated >= 0).
    # summary.csv:comments is the same number when nothing's been removed,
    # but counting from comments.csv directly keeps a single source for
    # both stats.statements and the card-selection eligible set.
    statements_count = (
        int((comments["moderated"] >= 0).sum())
        if "moderated" in comments.columns
        else 0
    )

    log.info(
        "voters=%d total_votes=%d statements=%d",
        voters,
        total_votes,
        statements_count,
    )

    if total_votes < MIN_TOTAL_VOTES or voters < MIN_PARTICIPANTS:
        log.info(
            "Below safety gate (need votes>=%d AND participants>=%d). "
            "Writing empty state.",
            MIN_TOTAL_VOTES,
            MIN_PARTICIPANTS,
        )
        payload: dict[str, Any] = {"stats": None, "statements": []}
    else:
        comment_stats = compute_comment_stats(comments, votes)
        cards = select_cards(comment_stats, voters)
        payload = {
            "stats": {
                "votes": total_votes,
                "statements": statements_count,
                "participants": voters,
            },
            "statements": cards,
        }

    payload = merge_lastupdated(payload)
    write_payload(payload)
    return 0


if __name__ == "__main__":
    sys.exit(main())

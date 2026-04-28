"""Unit tests for scripts/update_cwnyc_highlights.py.

Run with: python -m unittest scripts/test_update_cwnyc_highlights.py

The selection logic is tested against fixture comment_stats lists
(plain dicts) so the tests don't need pandas DataFrames or live network
calls. compute_comment_stats() — which reads the dataframes — is
indirectly exercised by the script's CI run.
"""

from __future__ import annotations

import unittest
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path

_SPEC = spec_from_file_location(
    "uch", Path(__file__).resolve().parent / "update_cwnyc_highlights.py"
)
uch = module_from_spec(_SPEC)
_SPEC.loader.exec_module(uch)


def _stat(cid: int, agree: int, disagree: int, pass_: int) -> dict:
    return {
        "comment_id": cid,
        "text": f"comment-{cid}",
        "agree": agree,
        "disagree": disagree,
        "pass": pass_,
        "total": agree + disagree + pass_,
    }


class PercentagesTo100Tests(unittest.TestCase):
    def test_empty(self):
        self.assertEqual(uch.percentages_to_100([]), [])

    def test_all_zeros(self):
        self.assertEqual(uch.percentages_to_100([0, 0, 0]), [0, 0, 0])

    def test_single(self):
        self.assertEqual(uch.percentages_to_100([42]), [100])

    def test_already_round(self):
        self.assertEqual(uch.percentages_to_100([50, 30, 20]), [50, 30, 20])

    def test_sums_to_100_with_remainders(self):
        # 1, 1, 1 -> 33.33 each, floors 33+33+33=99, deficit 1 -> one
        # entry gets +1. Output: total exactly 100.
        result = uch.percentages_to_100([1, 1, 1])
        self.assertEqual(sum(result), 100)
        self.assertIn(34, result)
        self.assertEqual(result.count(33), 2)

    def test_largest_remainder_picks_correctly(self):
        # 7+13+7 = 27.
        # Raw shares:    25.926, 48.148, 25.926
        # Floors:        25, 48, 25  (sum 98, deficit 2)
        # Remainders:    .926, .148, .926
        # Largest two remainders are indexes 0 and 2 (tied at .926); deficit
        # of 2 means BOTH get +1. Final: [26, 48, 26].
        self.assertEqual(uch.percentages_to_100([7, 13, 7]), [26, 48, 26])

    def test_negative_total_returns_zeros(self):
        # Defensive: never blow up on degenerate input
        self.assertEqual(uch.percentages_to_100([0, 0]), [0, 0])


class SelectCardsTests(unittest.TestCase):
    def test_empty_input_returns_empty(self):
        self.assertEqual(uch.select_cards([], participants_count=100), [])

    def test_below_threshold_returns_empty(self):
        # min_votes = max(20, 0.2 * 100) = 20. All comments below 20.
        stats = [_stat(0, 5, 1, 1), _stat(1, 4, 2, 2)]
        self.assertEqual(uch.select_cards(stats, participants_count=100), [])

    def test_three_distinct_winners(self):
        # comment 0: highest agree% (95/100 = 95%), total 100
        # comment 1: most divided (40 agree, 38 disagree on 80 -> gap 2.5%)
        # comment 2: most engaged (total 120) — different from 0 because (0)
        #            has total 100 < 120.
        stats = [
            _stat(0, 95, 3, 2),
            _stat(1, 40, 38, 2),
            _stat(2, 50, 30, 40),
        ]
        cards = uch.select_cards(stats, participants_count=100)
        self.assertEqual(len(cards), 3)
        self.assertEqual(cards[0]["label"], "Highest agreement")
        self.assertEqual(cards[0]["text"], "comment-0")
        self.assertEqual(cards[1]["label"], "Most divided")
        self.assertEqual(cards[1]["text"], "comment-1")
        self.assertEqual(cards[2]["label"], "Most engaged")
        self.assertEqual(cards[2]["text"], "comment-2")

    def test_rule_a_c_collision_falls_back_to_next_by_total(self):
        # comment 0 has BOTH the highest agree share AND the highest total.
        # When rule (a) takes comment 0, rule (c) must fall back to
        # comment 1 (next-highest total among remaining eligible).
        stats = [
            _stat(0, 95, 3, 22),   # agree 76% (95/120), total 120 — highest both
            _stat(1, 60, 5, 35),   # agree 60% (60/100), total 100 — second-highest total
            _stat(2, 30, 28, 32),  # agree 33% (30/90),  total 90  — most divided
        ]
        cards = uch.select_cards(stats, participants_count=100)
        self.assertEqual(len(cards), 3)

        # Highest agreement -> comment 0 (76%, beats 60% and 33%)
        self.assertEqual(cards[0]["label"], "Highest agreement")
        self.assertEqual(cards[0]["text"], "comment-0")

        # Most divided -> comment 2 (gap = |30-28|/90 ~= 2%; way smaller
        # than the others). Doesn't collide with rule (a).
        self.assertEqual(cards[1]["label"], "Most divided")
        self.assertEqual(cards[1]["text"], "comment-2")

        # Most engaged -> comment 1 (next-highest total at 100, since
        # comment 0 is taken). This is the fallback path under test.
        self.assertEqual(cards[2]["label"], "Most engaged")
        self.assertEqual(cards[2]["text"], "comment-1")

    def test_rule_a_b_c_all_collide_yields_one_card(self):
        # Only one eligible comment — rule (a) takes it, rules (b) and (c)
        # find nothing to fall back to.
        stats = [_stat(0, 18, 1, 1)]  # total 20 — exactly the floor
        cards = uch.select_cards(stats, participants_count=100)
        self.assertEqual(len(cards), 1)
        self.assertEqual(cards[0]["label"], "Highest agreement")
        self.assertEqual(cards[0]["text"], "comment-0")

    def test_card_votes_are_percentages_summing_to_100(self):
        stats = [_stat(0, 50, 30, 20), _stat(1, 40, 38, 22), _stat(2, 35, 30, 35)]
        cards = uch.select_cards(stats, participants_count=100)
        for c in cards:
            v = c["votes"]
            self.assertEqual(v["agree"] + v["disagree"] + v["pass"], 100)
            self.assertEqual(v["total"], 100)


if __name__ == "__main__":
    unittest.main()

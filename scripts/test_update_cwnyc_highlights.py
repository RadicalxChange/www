"""Unit tests for scripts/update_cwnyc_highlights.py.

Run with: python -m unittest scripts/test_update_cwnyc_highlights.py
"""

from __future__ import annotations

import unittest
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path

from scipy.stats import fisher_exact as _scipy_fisher

_SPEC = spec_from_file_location(
    "uch", Path(__file__).resolve().parent / "update_cwnyc_highlights.py"
)
uch = module_from_spec(_SPEC)
_SPEC.loader.exec_module(uch)


# ---- Helpers --------------------------------------------------------------


def _stat(cid, agree, disagree, pass_, is_user=False):
    return {
        "comment_id": cid,
        "text": f"comment-{cid}",
        "isUserSubmitted": is_user,
        "agree": agree,
        "disagree": disagree,
        "pass": pass_,
        "total": agree + disagree + pass_,
    }


def _cg_stat(
    cid, *,
    g0_voted, g0_agree, g0_disagree, g0_pass,
    g1_voted, g1_agree, g1_disagree, g1_pass,
    is_user=False, text=None,
):
    """Construct a comment-group stat row mirroring parse_comment_groups()."""
    return {
        "comment_id": cid,
        "text": text or f"comment-{cid}",
        "isUserSubmitted": is_user,
        "total": g0_voted + g1_voted,
        "total_agree": g0_agree + g1_agree,
        "total_disagree": g0_disagree + g1_disagree,
        "total_pass": g0_pass + g1_pass,
        "g0_voted": g0_voted,
        "g0_agree": g0_agree,
        "g0_disagree": g0_disagree,
        "g0_pass": g0_pass,
        "g1_voted": g1_voted,
        "g1_agree": g1_agree,
        "g1_disagree": g1_disagree,
        "g1_pass": g1_pass,
    }


# ---- Existing percentage rounding ----------------------------------------


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
        result = uch.percentages_to_100([1, 1, 1])
        self.assertEqual(sum(result), 100)
        self.assertIn(34, result)
        self.assertEqual(result.count(33), 2)

    def test_largest_remainder_picks_correctly(self):
        # 7+13+7=27 -> 25.93, 48.15, 25.93 -> floors 25,48,25=98, deficit 2,
        # two largest remainders (indexes 0 and 2 at .926) each get +1.
        self.assertEqual(uch.percentages_to_100([7, 13, 7]), [26, 48, 26])

    def test_negative_or_zero_total(self):
        self.assertEqual(uch.percentages_to_100([0, 0]), [0, 0])


# ---- Existing top-three card selection (unchanged logic, kept covered) ---


class SelectCardsTests(unittest.TestCase):
    def test_empty_input(self):
        self.assertEqual(uch.select_cards([], participants_count=100), [])

    def test_below_threshold_returns_empty(self):
        # min_votes = max(5, int(0.3*100)) = 30. Both stats below 30.
        stats = [_stat(0, 5, 1, 1), _stat(1, 4, 2, 2)]
        self.assertEqual(uch.select_cards(stats, participants_count=100), [])

    def test_three_distinct_winners(self):
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
        # Comment 0 has highest agree share AND highest total -> rule (c)
        # falls back to next-highest total (comment 1).
        stats = [
            _stat(0, 95, 3, 22),  # agree 79%, total 120
            _stat(1, 60, 5, 35),  # agree 60%, total 100
            _stat(2, 30, 28, 32),  # gap 2/90 ~ 2%, total 90
        ]
        cards = uch.select_cards(stats, participants_count=100)
        self.assertEqual(len(cards), 3)
        self.assertEqual(cards[0]["text"], "comment-0")
        self.assertEqual(cards[1]["text"], "comment-2")
        self.assertEqual(cards[2]["text"], "comment-1")

    def test_card_carries_isUserSubmitted_flag(self):
        stats = [_stat(0, 28, 1, 1, is_user=True)]
        cards = uch.select_cards(stats, participants_count=100)
        self.assertEqual(len(cards), 1)
        self.assertTrue(cards[0]["isUserSubmitted"])


# ---- Polis representative-comments algorithm ------------------------------


class RepresentativenessTests(unittest.TestCase):
    """Pseudocount-priored representativeness ratio: P_in/P_out where
    P_x = (a + 1) / (n + 2)."""

    def test_balanced_returns_one(self):
        # 5/10 in-group vs 5/10 out-group -> P_in = 6/12 = .5, same for
        # out -> R = 1.
        r = uch.representativeness_with_priors(5, 10, 5, 10)
        self.assertAlmostEqual(r, 1.0)

    def test_in_group_much_higher(self):
        # 9/10 in-group (P=.833) vs 1/10 out (P=.167) -> R=5.0
        r = uch.representativeness_with_priors(9, 10, 1, 10)
        self.assertAlmostEqual(r, (10 / 12) / (2 / 12))

    def test_zero_in_group_with_priors(self):
        # 0/5 in (P=1/7) vs 5/5 out (P=6/7) -> R = 1/6 ~ 0.167. The +1/+2
        # priors keep the ratio finite (no div-by-zero).
        r = uch.representativeness_with_priors(0, 5, 5, 5)
        self.assertAlmostEqual(r, (1 / 7) / (6 / 7))

    def test_zero_voted_either_side_does_not_explode(self):
        # Edge case: nobody in either group voted on this comment. Priors
        # still return a defined value (1/2 / 1/2 = 1).
        r = uch.representativeness_with_priors(0, 0, 0, 0)
        self.assertAlmostEqual(r, 1.0)


class FisherExactTests(unittest.TestCase):
    """Verify our wrapper matches scipy.stats.fisher_exact directly."""

    def test_matches_scipy_two_tailed(self):
        cases = [
            (5, 10, 1, 10),   # in: 5/10, out: 1/10
            (8, 8, 2, 23),    # tight one-sided table
            (0, 10, 10, 10),  # extreme
            (3, 10, 3, 10),   # null
        ]
        for in_a, in_v, out_a, out_v in cases:
            with self.subTest(args=(in_a, in_v, out_a, out_v)):
                table = [[in_a, in_v - in_a], [out_a, out_v - out_a]]
                _, ref_p = _scipy_fisher(table, alternative="two-sided")
                got = uch.fisher_p_two_tailed(in_a, in_v, out_a, out_v)
                self.assertAlmostEqual(got, float(ref_p), places=10)

    def test_degenerate_returns_one(self):
        # Any zero row or column -> 1.0 (no information).
        self.assertEqual(uch.fisher_p_two_tailed(0, 0, 5, 5), 1.0)
        self.assertEqual(uch.fisher_p_two_tailed(0, 5, 0, 5), 1.0)


class RepresentativeScoreTests(unittest.TestCase):
    def test_strong_distinctive_high_score(self):
        # In-group strongly agrees, out-group does not. Score = R * (1-p)
        # should be substantially above 1 (R>>1) and (1-p) close to 1.
        r, p, score = uch.representative_score(8, 8, 2, 23)
        self.assertGreater(r, 5.0)
        self.assertLess(p, 0.05)
        self.assertGreater(score, 5.0)

    def test_balanced_low_score(self):
        # No distinction -> R~1, p~1, score~0.
        r, p, score = uch.representative_score(5, 10, 5, 10)
        self.assertAlmostEqual(r, 1.0)
        self.assertGreater(p, 0.9)
        self.assertLess(score, 0.2)


# ---- Per-group representative selection ----------------------------------


class SelectRepresentativePerGroupTests(unittest.TestCase):
    def test_groups_eq_1_returns_empty(self):
        # Edge case: single-group conversation. comment-groups.csv only
        # supports the 2-group schema; we short-circuit cleanly.
        stats = [_cg_stat(0, g0_voted=5, g0_agree=4, g0_disagree=0, g0_pass=1,
                          g1_voted=0, g1_agree=0, g1_disagree=0, g1_pass=0)]
        self.assertEqual(
            uch.select_representative_per_group(stats, groups_count=1), []
        )

    def test_low_in_group_voters_are_filtered(self):
        # Comment 0: only 3 group-0 voters -> below MIN_IN_GROUP_VOTERS (4)
        # -> dropped from group-0 candidate set. Group-1 still picks it
        # because group-1 has plenty of voters.
        stats = [
            _cg_stat(
                0,
                g0_voted=3, g0_agree=3, g0_disagree=0, g0_pass=0,
                g1_voted=10, g1_agree=2, g1_disagree=7, g1_pass=1,
            ),
            _cg_stat(
                1,
                g0_voted=6, g0_agree=5, g0_disagree=0, g0_pass=1,
                g1_voted=8, g1_agree=1, g1_disagree=6, g1_pass=1,
            ),
        ]
        groups = uch.select_representative_per_group(stats, groups_count=2)
        # Group 0 should not contain comment 0 (filtered out by noise floor)
        g0 = next(g for g in groups if g["id"] == 0)
        g0_comment_texts = {s["text"] for s in g0["representativeStatements"]}
        self.assertNotIn("comment-0", g0_comment_texts)

    def test_picks_distinct_comments_per_group(self):
        # 3 comments, each strongly distinctive for one direction. Verify
        # each group gets back its strongest signals.
        stats = [
            # Comment 0: group 0 strongly agrees; group 1 disagrees
            _cg_stat(
                0,
                g0_voted=8, g0_agree=8, g0_disagree=0, g0_pass=0,
                g1_voted=20, g1_agree=2, g1_disagree=16, g1_pass=2,
            ),
            # Comment 1: group 0 strongly disagrees; group 1 agrees
            _cg_stat(
                1,
                g0_voted=8, g0_agree=0, g0_disagree=7, g0_pass=1,
                g1_voted=20, g1_agree=18, g1_disagree=1, g1_pass=1,
            ),
            # Comment 2: balanced (no distinction)
            _cg_stat(
                2,
                g0_voted=8, g0_agree=4, g0_disagree=3, g0_pass=1,
                g1_voted=20, g1_agree=10, g1_disagree=8, g1_pass=2,
            ),
        ]
        groups = uch.select_representative_per_group(
            stats, groups_count=2, per_group=2
        )
        self.assertEqual(len(groups), 2)

        # Group 0's top two should be comment 0 (agree) and comment 1 (disagree)
        g0 = next(g for g in groups if g["id"] == 0)
        g0_ids = {s["text"] for s in g0["representativeStatements"]}
        self.assertEqual(g0_ids, {"comment-0", "comment-1"})
        # And the vote types should be opposite (one agree, one disagree)
        g0_votes = {(s["text"], s["voteType"]) for s in g0["representativeStatements"]}
        self.assertIn(("comment-0", "agree"), g0_votes)
        self.assertIn(("comment-1", "disagree"), g0_votes)

        # Group 1's signs should be flipped on the same comments
        g1 = next(g for g in groups if g["id"] == 1)
        g1_votes = {(s["text"], s["voteType"]) for s in g1["representativeStatements"]}
        self.assertIn(("comment-0", "disagree"), g1_votes)
        self.assertIn(("comment-1", "agree"), g1_votes)


# ---- Consensus ----------------------------------------------------------


class ConsensusTests(unittest.TestCase):
    def test_consensus_picks_minimum_across_groups(self):
        # Comment 0: both groups strongly agree -> consensus
        # Comment 1: group 0 agrees, group 1 doesn't -> not consensus
        # Comment 2: both groups partly agree but neither very strongly
        stats = [
            _cg_stat(
                0,
                g0_voted=8, g0_agree=7, g0_disagree=0, g0_pass=1,
                g1_voted=20, g1_agree=17, g1_disagree=1, g1_pass=2,
            ),
            _cg_stat(
                1,
                g0_voted=8, g0_agree=7, g0_disagree=0, g0_pass=1,
                g1_voted=20, g1_agree=4, g1_disagree=14, g1_pass=2,
            ),
            _cg_stat(
                2,
                g0_voted=8, g0_agree=4, g0_disagree=2, g0_pass=2,
                g1_voted=20, g1_agree=10, g1_disagree=6, g1_pass=4,
            ),
        ]
        consensus = uch.select_consensus(stats, min_votes=8, top_n=5)
        self.assertEqual(len(consensus), 3)
        # Comment 0 should be first (min agree rate is the highest)
        self.assertEqual(consensus[0]["comment_id"], 0)

    def test_consensus_respects_min_votes(self):
        # Comment 0: high min-group agree rate but only 5 total votes
        # (below min_votes=10) -> excluded.
        stats = [
            _cg_stat(
                0,
                g0_voted=2, g0_agree=2, g0_disagree=0, g0_pass=0,
                g1_voted=3, g1_agree=3, g1_disagree=0, g1_pass=0,
            ),
        ]
        self.assertEqual(uch.select_consensus(stats, min_votes=10), [])


# ---- Output shape: isUserSubmitted propagates --------------------------


class IsUserSubmittedPropagationTests(unittest.TestCase):
    def test_consensus_card_carries_flag(self):
        stats = [
            _cg_stat(
                0,
                g0_voted=8, g0_agree=7, g0_disagree=0, g0_pass=1,
                g1_voted=20, g1_agree=17, g1_disagree=1, g1_pass=2,
                is_user=True,
            ),
        ]
        consensus = uch.select_consensus(stats, min_votes=8)
        cards = [uch._consensus_card(r) for r in consensus]
        self.assertEqual(len(cards), 1)
        self.assertTrue(cards[0]["isUserSubmitted"])


if __name__ == "__main__":
    unittest.main()

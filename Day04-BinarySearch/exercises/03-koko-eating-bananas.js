/**
 * LeetCode #875: Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * Koko loves bananas. There are `n` piles; pile `i` has `piles[i]` bananas.
 * Guards return in `h` hours. Each hour Koko picks a pile and eats `k` bananas
 * from that pile (ceil hours per pile). Return the **minimum integer `k`**
 * such that she can eat all bananas within `h` hours.
 *
 * Examples:
 *   minEatingSpeed([3,6,7,11], 8)           → 4
 *   minEatingSpeed([30,11,23,4,20], 5)       → 30
 *   minEatingSpeed([30,11,23,4,20], 6)      → 23
 *
 * Goal: binary search on the answer (eating speed k).
 */

function minEatingSpeed(piles, h) {
  // YOUR CODE HERE
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));  // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23

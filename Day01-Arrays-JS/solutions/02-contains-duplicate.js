/**
 * SOLUTION: Contains Duplicate (LeetCode 217)
 *
 * Approach and Intuition:
 * - Brute Force: Compare every pair (i, j) — O(n²) time, O(1) space. Simple but wasteful.
 * - Optimal (Set): Track seen numbers in a Set; if num is already in the Set, return true.
 *   Single pass, early exit on first duplicate.
 * - Alternative: Sort then check adjacent elements — O(n log n) time, O(1) extra space
 *   if sorting in place is allowed (mutates input).
 *
 * Time & Space Complexity:
 * - Time: O(n) — one pass
 * - Space: O(n) — Set holds up to n unique values
 *
 * INTERVIEW TIP: "A Set gives O(1) average membership checks, so I can detect duplicates
 * in one linear scan without sorting the input."
 */

function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));     // true
console.log(containsDuplicate([1, 2, 3, 4]));     // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

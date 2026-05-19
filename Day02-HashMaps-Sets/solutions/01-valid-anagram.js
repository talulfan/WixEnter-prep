/**
 * SOLUTION: Valid Anagram (LeetCode 242)
 *
 * Approach and Intuition:
 * - Brute Force: Sort both strings and compare — O(n log n) time, O(n) space for sorted copies.
 * - Optimal: If lengths differ, return false. Count character frequencies in a fixed-size
 *   array (26 letters) or a Map; increment for s, decrement for t; all counts must be zero.
 *
 * Time & Space Complexity:
 * - Time: O(n) — n is string length
 * - Space: O(1) — at most 26 counters (lowercase English letters)
 *
 * INTERVIEW TIP: "Anagrams have identical character counts — I'll verify with a frequency
 * table instead of sorting, which keeps this linear."
 */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - base]++;
    count[t.charCodeAt(i) - base]--;
  }

  return count.every((c) => c === 0);
}

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car'));         // false
console.log(isAnagram('a', 'ab'));            // false

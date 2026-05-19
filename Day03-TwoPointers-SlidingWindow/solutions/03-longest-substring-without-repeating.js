/**
 * SOLUTION: Longest Substring Without Repeating Characters (LeetCode 3)
 *
 * Approach and Intuition:
 * - Brute Force: Check every substring start/end — O(n³) or O(n²) with a Set per window.
 * - Optimal: Sliding window with left and right pointers. Expand right; if char is in the
 *   window, shrink from left until duplicate is removed. Track max window size.
 *   Use a Map from character → last index for O(1) jumps of left.
 *
 * Time & Space Complexity:
 * - Time: O(n) — right pointer visits each index once; left only moves forward
 * - Space: O(min(n, m)) — m is charset size (Map size bounded by alphabet)
 *
 * INTERVIEW TIP: "This is a classic sliding window — I expand the right edge and shrink
 * the left only when a duplicate appears, keeping the window valid at all times."
 */

function lengthOfLongestSubstring(s) {
  const lastIndex = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (lastIndex.has(char) && lastIndex.get(char) >= left) {
      left = lastIndex.get(char) + 1;
    }
    lastIndex.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb'));     // 1
console.log(lengthOfLongestSubstring('pwwkew'));   // 3
console.log(lengthOfLongestSubstring(''));         // 0

/**
 * LeetCode #3: Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string `s`, find the length of the longest substring without
 * repeating characters.
 *
 * Examples:
 *   lengthOfLongestSubstring('abcabcbb')  → 3  ('abc')
 *   lengthOfLongestSubstring('bbbbb')     → 1
 *   lengthOfLongestSubstring('pwwkew')    → 3  ('wke')
 *   lengthOfLongestSubstring('')          → 0
 *
 * Goal: O(n) time — sliding window with Map or Set.
 */

function lengthOfLongestSubstring(s) {
  // YOUR CODE HERE
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb'));     // 1
console.log(lengthOfLongestSubstring('pwwkew'));   // 3
console.log(lengthOfLongestSubstring(''));         // 0

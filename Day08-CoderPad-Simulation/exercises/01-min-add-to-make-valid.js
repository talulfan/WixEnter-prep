/**
 * LeetCode #921: Minimum Add to Make Parentheses Valid
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 *
 * A parentheses string is valid if and only if it is one of:
 * - Empty string
 * - Concatenation of two valid strings
 * - '(' + valid string + ')'
 *
 * In one move you can insert a parenthesis anywhere. Return the minimum number of
 * moves required to make `s` valid.
 *
 * Examples:
 *   minAddToMakeValid('()))')  → 1
 *   minAddToMakeValid('(((')   → 3
 *   minAddToMakeValid('()')    → 0
 *   minAddToMakeValid('')      → 0
 *
 * Goal: O(n) time, O(1) space — balance counter (no stack required).
 */

function minAddToMakeValid(s) {
  // YOUR CODE HERE
}

console.log(minAddToMakeValid('()))'));  // 1
console.log(minAddToMakeValid('((('));   // 3
console.log(minAddToMakeValid('()'));    // 0
console.log(minAddToMakeValid(''));      // 0

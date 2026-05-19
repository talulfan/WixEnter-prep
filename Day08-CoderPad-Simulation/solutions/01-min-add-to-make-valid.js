/**
 * SOLUTION: Minimum Add to Make Parentheses Valid (LeetCode 921)
 *
 * Approach and Intuition:
 * - Brute Force: Try adding parentheses at each position and validate — exponential, not viable.
 * - Optimal: Single pass balance counter. '(' increments open deficit; ')' decrements.
 *   If balance goes negative, we need an extra '(' — increment adds and reset balance to 0.
 *   After the pass, remaining open count needs closing ')'. Answer = adds + open left.
 *
 * Time & Space Complexity:
 * - Time: O(n) — one pass over the string
 * - Space: O(1) — only counters
 *
 * INTERVIEW TIP: "I track unmatched opening and closing parentheses in one pass — each time
 * balance drops below zero I count one required insert and continue."
 */

function minAddToMakeValid(s) {
  let balance = 0;
  let adds = 0;

  for (const char of s) {
    if (char === '(') balance++;
    else balance--;

    if (balance < 0) {
      adds++;
      balance = 0;
    }
  }

  return adds + balance;
}

console.log(minAddToMakeValid('()))'));  // 1
console.log(minAddToMakeValid('((('));   // 3
console.log(minAddToMakeValid('()'));    // 0
console.log(minAddToMakeValid(''));      // 0

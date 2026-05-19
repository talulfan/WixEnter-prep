/**
 * SOLUTION: Valid Palindrome (LeetCode 125)
 *
 * Approach and Intuition:
 * - Brute Force: Filter string to alphanumeric only, reverse a copy, compare — O(n) time
 *   but O(n) extra space for the reversed string.
 * - Optimal: Two pointers from both ends; skip non-alphanumeric chars; compare lowercase
 *   letters in place. No extra string built.
 *
 * Time & Space Complexity:
 * - Time: O(n) — each pointer moves at most n steps
 * - Space: O(1) — only indices and a helper to test alphanumeric
 *
 * INTERVIEW TIP: "I'll use two pointers inward and skip non-alphanumeric characters so
 * we validate the palindrome in one pass with constant extra space."
 */

function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) left++;
    while (left < right && !isAlphanumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car'));                     // false
console.log(isPalindrome(' '));                              // true

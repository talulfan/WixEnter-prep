/**
 * SOLUTION: Binary Search (LeetCode 704)
 *
 * Approach and Intuition:
 * - Brute Force: Linear scan for target — O(n) time. Fine for tiny arrays; not for interviews.
 * - Optimal: Maintain [left, right] inclusive range. Compare nums[mid] to target; discard
 *   half the range each step. Use mid = left + Math.floor((right - left) / 2) to avoid overflow.
 *
 * Time & Space Complexity:
 * - Time: O(log n) — halving search space each iteration
 * - Space: O(1) — iterative implementation
 *
 * INTERVIEW TIP: "I'll use the standard inclusive bounds template and update left/right
 * based on whether the target lies in the left or right half."
 */

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));  // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));  // -1
console.log(search([5], 5));                    // 0
console.log(search([5], -5));                   // -1

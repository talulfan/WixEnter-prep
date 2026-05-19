/**
 * SOLUTION: Two Sum II - Input Array Is Sorted (LeetCode 167)
 *
 * Approach and Intuition:
 * - Brute Force: Check every pair (i, j) — O(n²) time. Ignores sorted order.
 * - Optimal: Two pointers at left = 0 and right = n - 1. If sum < target, move left right
 *   (need larger value). If sum > target, move right left. Sorted order guarantees we
 *   never skip the valid pair. Return 1-based indices per problem statement.
 *
 * Time & Space Complexity:
 * - Time: O(n) — each pointer moves at most n times
 * - Space: O(1) — only pointer indices
 *
 * INTERVIEW TIP: "Because the input is sorted, I replace the hash map from Two Sum I with
 * two pointers for O(n) time and O(1) extra space."
 */

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));   // [1, 2]
console.log(twoSum([2, 3, 4], 6));        // [1, 3]
console.log(twoSum([-1, 0], -1));         // [1, 2]

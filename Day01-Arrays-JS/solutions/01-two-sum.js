/**
 * SOLUTION: Two Sum (LeetCode 1)
 *
 * Approach and Intuition:
 * - Brute Force: For each index i, scan all j > i and check if nums[i] + nums[j] === target.
 *   Correct but O(n²) time — too slow for large inputs in a live interview.
 * - Optimal: One pass with a Map storing value → index. For each num, check if
 *   (target - num) was seen before; if yes, return both indices. Each lookup is O(1).
 *
 * Time & Space Complexity:
 * - Time: O(n) — single pass over the array
 * - Space: O(n) — Map may store up to n entries
 *
 * INTERVIEW TIP: "I'll use a hash map for complement lookup so we trade a little extra
 * space for linear time instead of nested loops."
 */

function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));         // [0, 1]

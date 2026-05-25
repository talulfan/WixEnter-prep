/**
 * SOLUTION: Sort Colors (LeetCode 75)
 *
 * Approach and Intuition:
 * - Brute Force: Count 0s, 1s, 2s then overwrite — O(n) two passes.
 * - Optimal: Dutch national flag — pointers low, mid, high. mid scans; swap 0 to low++,
 *   2 to high--, advance mid on 1.
 *
 * Time & Space Complexity:
 * - Time: O(n) — single pass
 * - Space: O(1) — in-place
 *
 * INTERVIEW TIP: "Three-way partition with two pointers bounding 0s and 2s is the classic
 * one-pass solution interviewers expect."
 */

function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

const a = [2, 0, 2, 1, 1, 0];
sortColors(a);
console.log(JSON.stringify(a));

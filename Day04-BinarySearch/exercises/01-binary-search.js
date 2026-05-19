/**
 * LeetCode #704: Binary Search
 * https://leetcode.com/problems/binary-search/
 *
 * Given an array of integers `nums` which is sorted in ascending order,
 * and an integer `target`, write a function to search `target` in `nums`.
 * If the target exists, return its index. Otherwise, return `-1`.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Examples:
 *   search([-1,0,3,5,9,12], 9)  → 4
 *   search([-1,0,3,5,9,12], 2)  → -1
 *   search([5], 5)              → 0
 *
 * Goal: classic binary search with inclusive left/right bounds.
 */

function search(nums, target) {
  // YOUR CODE HERE
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));  // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));  // -1
console.log(search([5], 5));                    // 0
console.log(search([5], -5));                   // -1

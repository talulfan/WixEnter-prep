/**
 * LeetCode #74: Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/
 *
 * You are given an `m x n` matrix with the following properties:
 * - Each row is sorted in non-decreasing order.
 * - The first integer of each row is greater than the last integer of the previous row.
 *
 * Given `target`, return `true` if `target` is in the matrix, or `false` otherwise.
 *
 * Examples:
 *   searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)   → true
 *   searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)  → false
 *
 * Goal: O(log(m * n)) — treat matrix as one sorted array.
 */

function searchMatrix(matrix, target) {
  // YOUR CODE HERE
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); // true

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); // false

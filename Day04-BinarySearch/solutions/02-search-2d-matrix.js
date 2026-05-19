/**
 * SOLUTION: Search a 2D Matrix (LeetCode 74)
 *
 * Approach and Intuition:
 * - Brute Force: Scan every cell — O(m * n) time.
 * - Optimal: Rows are sorted and first element of each row > last of previous row, so the
 *   matrix is one sorted array of length m * n. Binary search with index i mapped to
 *   row = Math.floor(i / n), col = i % n.
 *
 * Time & Space Complexity:
 * - Time: O(log(m * n)) — binary search on virtual 1D array
 * - Space: O(1)
 *
 * INTERVIEW TIP: "I'll treat the 2D matrix as a flattened sorted array and run standard
 * binary search with index-to-coordinate conversion."
 */

function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const row = Math.floor(mid / cols);
    const col = mid % cols;
    const value = matrix[row][col];

    if (value === target) return true;
    if (value < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
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

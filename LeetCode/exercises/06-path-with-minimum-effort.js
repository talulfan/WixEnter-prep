/**
 * LeetCode #1631: Path With Minimum Effort
 * https://leetcode.com/problems/path-with-minimum-effort/
 *
 * Difficulty: Medium
 * Suggested time: ~35 minutes
 *
 * You are a hiker on an `heights` grid. Effort to move between adjacent cells is
 * the absolute difference in height. Return the minimum effort to travel from
 * top-left to bottom-right (4-directional moves).
 *
 * Example:
 *   minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]) → 2
 *
 * Topics: Dijkstra, binary search on answer, union-find
 */

function minimumEffortPath(heights) {
  // YOUR CODE HERE
}

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ])
); // 2

console.log(
  minimumEffortPath([
    [1, 2, 3],
    [3, 8, 4],
    [5, 3, 5],
  ])
); // 1

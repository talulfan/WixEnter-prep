/**
 * LeetCode #200: Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 *
 * Difficulty: Medium
 * Suggested time: ~25 minutes
 *
 * Given an `m x n` grid of '1' (land) and '0' (water), return the number of islands.
 * An island is formed by connecting adjacent lands horizontally or vertically.
 *
 * Topics: DFS, BFS, grid graph
 */

function numIslands(grid) {
  // YOUR CODE HERE
}

function cloneGrid(g) {
  return JSON.parse(JSON.stringify(g));
}

const g1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(cloneGrid(g1))); // 1

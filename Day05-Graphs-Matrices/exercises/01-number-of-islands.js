/**
 * LeetCode #200: Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 *
 * Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land)
 * and '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges are surrounded by water.
 *
 * Examples:
 *   numIslands(small map with one island)  → 1
 *   numIslands(map with three islands)    → 3
 *
 * Goal: O(m * n) — DFS or BFS flood fill from each unvisited '1'.
 * Note: the solution mutates the grid; copy grids in tests if you re-run locally.
 */

function numIslands(grid) {
  // YOUR CODE HERE
}

const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
function cloneGrid(g) {
  return JSON.parse(JSON.stringify(g));
}

console.log(numIslands(cloneGrid(grid1))); // 1

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
console.log(numIslands(cloneGrid(grid2))); // 3

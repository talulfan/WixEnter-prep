/**
 * SOLUTION: Number of Islands (LeetCode 200)
 *
 * Approach and Intuition:
 * - Brute Force: For each land cell, flood-fill (DFS/BFS) to mark entire island, count starts.
 *   Same complexity as optimal but clarity matters in interviews.
 * - Optimal: Iterate grid; on '1', increment count and DFS/BFS to sink the island (mark '0'
 *   or use visited). Each unvisited '1' is one new island. 4-directional neighbors only.
 *
 * Time & Space Complexity:
 * - Time: O(m * n) — each cell visited at most once
 * - Space: O(m * n) — worst-case recursion stack or BFS queue for full grid of land
 *
 * INTERVIEW TIP: "I'll treat connected '1' cells as a graph component and run DFS from each
 * unvisited land cell to count islands in linear time relative to grid size."
 */

function numIslands(grid) {
  if (!grid.length || !grid[0].length) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;
    grid[r][c] = '0';

    for (const [dr, dc] of directions) {
      dfs(r + dr, c + dc);
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}

const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(grid1)); // 1

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
console.log(numIslands(grid2)); // 3

/**
 * SOLUTION: Number of Islands (LeetCode 200)
 *
 * Approach and Intuition:
 * - Brute Force: Same as optimal — must visit each cell once.
 * - Optimal: For each '1', run DFS/BFS to sink island (mark '0'). Increment count per new start.
 *
 * Time & Space Complexity:
 * - Time: O(m * n)
 * - Space: O(m * n) worst-case recursion or queue
 *
 * INTERVIEW TIP: "Each DFS from an unvisited land cell counts one connected component."
 */

function numIslands(grid) {
  if (!grid.length || !grid[0].length) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;
    grid[r][c] = '0';
    for (const [dr, dc] of dirs) dfs(r + dr, c + dc);
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

function cloneGrid(g) {
  return JSON.parse(JSON.stringify(g));
}

console.log(
  numIslands(
    cloneGrid([
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ])
  )
);

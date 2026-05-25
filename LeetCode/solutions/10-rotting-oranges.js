/**
 * SOLUTION: Rotting Oranges (LeetCode 994)
 *
 * Approach and Intuition:
 * - Brute Force: Simulate minute by minute scanning whole grid — O(minutes * m * n).
 * - Optimal: Multi-source BFS — enqueue all rotten oranges at time 0, expand layer by layer,
 *   track fresh count; when queue empty, return minutes if fresh === 0 else -1.
 *
 * Time & Space Complexity:
 * - Time: O(m * n)
 * - Space: O(m * n) queue
 *
 * INTERVIEW TIP: "All rotten oranges spread simultaneously — multi-source BFS is the
 * standard pattern for minimum time in grid diffusion."
 */

function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) fresh++;
      else if (grid[r][c] === 2) queue.push([r, c, 0]);
    }
  }

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let minutes = 0;

  while (queue.length) {
    const [r, c, t] = queue.shift();
    minutes = t;

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== 1) continue;
      grid[nr][nc] = 2;
      fresh--;
      queue.push([nr, nc, t + 1]);
    }
  }

  return fresh === 0 ? minutes : -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));

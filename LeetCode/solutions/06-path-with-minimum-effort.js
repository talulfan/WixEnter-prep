/**
 * SOLUTION: Path With Minimum Effort (LeetCode 1631)
 *
 * Approach and Intuition:
 * - Brute Force: DFS try all paths — exponential.
 * - Optimal: Dijkstra on grid — state is cell, cost is max effort along path (minimax).
 *   Priority queue by current effort; relax neighbors with effort = max(current, diff).
 *   Alternative: binary search effort limit + BFS/Union-Find connectivity.
 *
 * Time & Space Complexity:
 * - Time: O(m * n * log(m * n)) — Dijkstra with heap
 * - Space: O(m * n) — dist array and heap
 *
 * INTERVIEW TIP: "The path minimizes the maximum edge weight on the route — Dijkstra with
 * minimax edge relaxation handles that, not plain sum-of-weights Dijkstra."
 */

function minimumEffortPath(heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  const dist = Array.from({ length: rows }, () => new Array(cols).fill(Infinity));
  dist[0][0] = 0;

  const heap = [[0, 0, 0]]; // [effort, r, c]

  function push(effort, r, c) {
    let i = heap.length;
    heap.push([effort, r, c]);
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[parent][0] <= heap[i][0]) break;
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
    }
  }

  function pop() {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let smallest = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (l < heap.length && heap[l][0] < heap[smallest][0]) smallest = l;
        if (r < heap.length && heap[r][0] < heap[smallest][0]) smallest = r;
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }
    }
    return top;
  }

  while (heap.length) {
    const [effort, r, c] = pop();
    if (r === rows - 1 && c === cols - 1) return effort;
    if (effort > dist[r][c]) continue;

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
      const nextEffort = Math.max(effort, Math.abs(heights[r][c] - heights[nr][nc]));
      if (nextEffort < dist[nr][nc]) {
        dist[nr][nc] = nextEffort;
        push(nextEffort, nr, nc);
      }
    }
  }

  return 0;
}

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ])
);
console.log(
  minimumEffortPath([
    [1, 2, 3],
    [3, 8, 4],
    [5, 3, 5],
  ])
);

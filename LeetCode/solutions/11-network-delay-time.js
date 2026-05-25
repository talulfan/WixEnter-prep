/**
 * SOLUTION: Network Delay Time (LeetCode 743)
 *
 * Approach and Intuition:
 * - Brute Force: Bellman-Ford O(VE) — works but slower.
 * - Optimal: Dijkstra from node k on weighted adjacency list. Track dist[1..n];
 *   answer is max distance reachable; if any node unreachable return -1.
 *
 * Time & Space Complexity:
 * - Time: O(E log V) with binary heap
 * - Space: O(V + E)
 *
 * INTERVIEW TIP: "This is single-source shortest path on a weighted graph — Dijkstra is
 * the right tool when edge weights are non-negative."
 */

function networkDelayTime(times, n, k) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  const heap = [[0, k]];

  function push(d, node) {
    heap.push([d, node]);
    let i = heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  }

  function pop() {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let s = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
        if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
        if (s === i) break;
        [heap[i], heap[s]] = [heap[s], heap[i]];
        i = s;
      }
    }
    return top;
  }

  while (heap.length) {
    const [d, u] = pop();
    if (d > dist[u]) continue;

    for (const [v, w] of graph[u]) {
      const nd = d + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        push(nd, v);
      }
    }
  }

  let max = 0;
  for (let i = 1; i <= n; i++) {
    if (dist[i] === Infinity) return -1;
    max = Math.max(max, dist[i]);
  }
  return max;
}

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);
console.log(networkDelayTime([[1, 2, 1]], 2, 1));

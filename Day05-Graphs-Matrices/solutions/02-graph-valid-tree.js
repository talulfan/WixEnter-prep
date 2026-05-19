/**
 * SOLUTION: Graph Valid Tree (LeetCode 261 — Premium; same idea as Redundant Connection)
 *
 * Approach and Intuition:
 * - Brute Force: Build adjacency list, DFS from node 0; valid tree iff all nodes reachable
 *   and exactly n - 1 edges with no cycle (check back-edge to parent carefully).
 * - Optimal (Union-Find): A tree on n nodes has exactly n - 1 edges and is fully connected
 *   with no cycles. For each edge, if both endpoints already share a root, cycle exists.
 *   After processing all edges, one component means connected.
 *
 * Time & Space Complexity:
 * - Time: O(n * α(n)) — Union-Find with path compression, α is inverse Ackermann (~constant)
 * - Space: O(n) — parent and rank arrays
 *
 * INTERVIEW TIP: "A valid tree has n - 1 edges and no cycles — Union-Find lets me detect
 * a cycle the moment I try to union two nodes already in the same component."
 */

function validTree(n, edges) {
  if (edges.length !== n - 1) return false;

  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);

  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;

    if (rank[rootA] < rank[rootB]) parent[rootA] = rootB;
    else if (rank[rootA] > rank[rootB]) parent[rootB] = rootA;
    else {
      parent[rootB] = rootA;
      rank[rootA]++;
    }
    return true;
  }

  for (const [u, v] of edges) {
    if (!union(u, v)) return false;
  }

  return true;
}

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
); // true

console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 4],
    [3, 4],
  ])
); // false

console.log(validTree(1, [])); // true

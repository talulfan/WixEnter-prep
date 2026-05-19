/**
 * LeetCode #261: Graph Valid Tree (Premium)
 * https://leetcode.com/problems/graph-valid-tree/
 *
 * Given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges,
 * return `true` if the edges form a valid tree.
 *
 * A valid tree has exactly `n - 1` edges and is connected with no cycles.
 *
 * Examples:
 *   validTree(5, [[0,1],[0,2],[0,3],[1,4]])           → true
 *   validTree(5, [[0,1],[1,2],[2,3],[1,4],[3,4]])    → false
 *   validTree(1, [])                                   → true
 *
 * Goal: Union-Find or BFS/DFS cycle detection.
 */

function validTree(n, edges) {
  // YOUR CODE HERE
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

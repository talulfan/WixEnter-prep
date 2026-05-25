/**
 * LeetCode #133: Clone Graph
 * https://leetcode.com/problems/clone-graph/
 *
 * Difficulty: Medium
 * Suggested time: ~25 minutes
 *
 * Given a reference to a node in a connected undirected graph, return a deep copy
 * of the graph. Node val is unique. Neighbors list may be empty.
 *
 * Topics: BFS, DFS, hash map old → clone
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

function cloneGraph(node) {
  // YOUR CODE HERE
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
n1.neighbors = [n2, n3];
n2.neighbors = [n1, n3];
n3.neighbors = [n1, n2];
const cloned = cloneGraph(n1);
console.log(cloned?.val, cloned?.neighbors.length); // 1 2

/**
 * SOLUTION: Clone Graph (LeetCode 133)
 *
 * Approach and Intuition:
 * - Brute Force: JSON parse/stringify if allowed — often disallowed in interviews.
 * - Optimal: BFS/DFS with Map from original node → clone. First visit: create clone node,
 *   store in map, then wire neighbors recursively/iteratively.
 *
 * Time & Space Complexity:
 * - Time: O(V + E)
 * - Space: O(V) map and graph storage
 *
 * INTERVIEW TIP: "I use a hash map so each original node maps to exactly one cloned node —
 * that prevents infinite loops and duplicate nodes."
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

function cloneGraph(node) {
  if (!node) return null;

  const map = new Map();
  const queue = [node];
  map.set(node, new Node(node.val));

  while (queue.length) {
    const cur = queue.shift();
    const clone = map.get(cur);

    for (const neighbor of cur.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      clone.neighbors.push(map.get(neighbor));
    }
  }

  return map.get(node);
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
n1.neighbors = [n2, n3];
n2.neighbors = [n1, n3];
n3.neighbors = [n1, n2];
const cloned = cloneGraph(n1);
console.log(cloned?.val, cloned?.neighbors.length);

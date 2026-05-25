/**
 * SOLUTION: Binary Tree Level Order Traversal (LeetCode 102)
 *
 * Approach and Intuition:
 * - Brute Force: DFS with depth tracking, sort by depth — extra work.
 * - Optimal: BFS with queue. Track `levelSize` at start of each level; pop that many
 *   nodes, push children, collect values into current level array.
 *
 * Time & Space Complexity:
 * - Time: O(n) — visit each node once
 * - Space: O(n) — queue holds up to widest level
 *
 * INTERVIEW TIP: "Level order is BFS — I process the queue in chunks sized by the current
 * level width."
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(JSON.stringify(levelOrder(tree)));
console.log(JSON.stringify(levelOrder(null)));

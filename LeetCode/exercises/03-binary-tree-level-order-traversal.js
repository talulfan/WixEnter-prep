/**
 * LeetCode #102: Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Difficulty: Medium
 * Suggested time: ~25 minutes
 *
 * Given the root of a binary tree, return the level order traversal of its nodes'
 * values (left to right, level by level).
 *
 * Example:
 *   tree [3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]
 *
 * Topics: BFS, queue
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function levelOrder(root) {
  // YOUR CODE HERE
}

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(JSON.stringify(levelOrder(tree))); // [[3],[9,20],[15,7]]
console.log(JSON.stringify(levelOrder(null))); // []

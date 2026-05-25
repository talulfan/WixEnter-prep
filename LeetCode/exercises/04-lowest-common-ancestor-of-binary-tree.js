/**
 * LeetCode #236: Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 *
 * Difficulty: Medium
 * Suggested time: ~30 minutes
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes
 * `p` and `q` in the tree. All nodes are unique. p and q exist in the tree.
 *
 * Topics: DFS, recursion, divide and conquer on tree
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function lowestCommonAncestor(root, p, q) {
  // YOUR CODE HERE
}

const root = new TreeNode(
  3,
  new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);
const p = root.left;
const q = root.right;
console.log(lowestCommonAncestor(root, p, q)?.val); // 3

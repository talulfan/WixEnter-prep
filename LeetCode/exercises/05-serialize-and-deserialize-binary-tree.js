/**
 * LeetCode #297: Serialize and Deserialize Binary Tree
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 *
 * Difficulty: Hard
 * Suggested time: ~45 minutes
 *
 * Design an algorithm to serialize and deserialize a binary tree.
 * Implement `Codec` class with:
 *   - serialize(root) → string
 *   - deserialize(data) → root
 *
 * Topics: tree DFS preorder, BFS with null markers, design
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class Codec {
  serialize(root) {
    // YOUR CODE HERE
  }

  deserialize(data) {
    // YOUR CODE HERE
  }
}

const codec = new Codec();
const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
const data = codec.serialize(tree);
const restored = codec.deserialize(data);
console.log(restored?.val, restored?.left?.val, restored?.right?.val); // 1 2 3

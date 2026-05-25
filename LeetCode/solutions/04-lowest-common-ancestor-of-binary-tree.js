/**
 * SOLUTION: Lowest Common Ancestor of a Binary Tree (LeetCode 236)
 *
 * Approach and Intuition:
 * - Brute Force: Store root-to-p and root-to-q paths, compare first mismatch — O(n) space two paths.
 * - Optimal: Post-order DFS. If node is p or q return node. Recurse left/right.
 *   If both sides return non-null, current node is LCA. If one side non-null, propagate it up.
 *
 * Time & Space Complexity:
 * - Time: O(n)
 * - Space: O(h) — recursion stack, h = tree height
 *
 * INTERVIEW TIP: "The LCA is the first node where searches for p and q diverge from the same
 * subtree into both subtrees."
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;
}

const root = new TreeNode(
  3,
  new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);
console.log(lowestCommonAncestor(root, root.left, root.right)?.val); // 3

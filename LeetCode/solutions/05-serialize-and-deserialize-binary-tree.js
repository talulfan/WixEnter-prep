/**
 * SOLUTION: Serialize and Deserialize Binary Tree (LeetCode 297)
 *
 * Approach and Intuition:
 * - Brute Force: JSON.stringify tree with custom replacer — works but discuss edge cases.
 * - Optimal: Preorder DFS with 'null' markers, comma-separated. Deserialize with index pointer
 *   or shift from array. BFS serialization with queue is also valid.
 *
 * Time & Space Complexity:
 * - Time: O(n) serialize and deserialize
 * - Space: O(n) output string and recursion stack
 *
 * INTERVIEW TIP: "Preorder with explicit null tokens lets me reconstruct the tree uniquely —
 * same pattern as LeetCode's array-with-null representation."
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class Codec {
  serialize(root) {
    const parts = [];

    function dfs(node) {
      if (!node) {
        parts.push('null');
        return;
      }
      parts.push(String(node.val));
      dfs(node.left);
      dfs(node.right);
    }

    dfs(root);
    return parts.join(',');
  }

  deserialize(data) {
    const tokens = data.split(',');
    let i = 0;

    function build() {
      if (tokens[i] === 'null') {
        i++;
        return null;
      }
      const node = new TreeNode(Number(tokens[i]));
      i++;
      node.left = build();
      node.right = build();
      return node;
    }

    return build();
  }
}

const codec = new Codec();
const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
const restored = codec.deserialize(codec.serialize(tree));
console.log(restored?.val, restored?.left?.val, restored?.right?.val);

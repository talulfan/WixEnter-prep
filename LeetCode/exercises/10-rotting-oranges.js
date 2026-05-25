/**
 * LeetCode #994: Rotting Oranges
 * https://leetcode.com/problems/rotting-oranges/
 *
 * Difficulty: Medium
 * Suggested time: ~30 minutes
 *
 * In a grid: 0 = empty, 1 = fresh orange, 2 = rotten. Each minute, rotten oranges
 * rot adjacent fresh ones (4-directional). Return minimum minutes until no fresh
 * orange remains, or -1 if impossible.
 *
 * Topics: multi-source BFS
 */

function orangesRotting(grid) {
  // YOUR CODE HERE
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4

console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])); // -1

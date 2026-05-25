/**
 * LeetCode #743: Network Delay Time
 * https://leetcode.com/problems/network-delay-time/
 *
 * Difficulty: Medium
 * Suggested time: ~35 minutes
 *
 * Given `times` as directed edges `[u, v, w]` (signal time w from u to v) and `n` nodes
 * labeled 1..n, starting from node `k`, return the time for all nodes to receive the signal.
 * Return -1 if impossible.
 *
 * Topics: Dijkstra, weighted graph shortest path
 */

function networkDelayTime(times, n, k) {
  // YOUR CODE HERE
}

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
); // 2

console.log(networkDelayTime([[1, 2, 1]], 2, 1)); // 1

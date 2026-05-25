/**
 * LeetCode #207: Course Schedule
 * https://leetcode.com/problems/course-schedule/
 *
 * Difficulty: Medium
 * Suggested time: ~30 minutes
 *
 * There are `numCourses` courses labeled `0` to `numCourses - 1`. You are given
 * prerequisites `prerequisites[i] = [a, b]` meaning you must take course `b` before `a`.
 *
 * Return `true` if you can finish all courses (no cycle in dependency graph).
 *
 * Examples:
 *   canFinish(2, [[1,0]])           → true
 *   canFinish(2, [[1,0],[0,1]])     → false
 *
 * Topics: graph, topological sort, DFS cycle detection, BFS (Kahn's algorithm)
 */

function canFinish(numCourses, prerequisites) {
  // YOUR CODE HERE
}

console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
console.log(canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // true

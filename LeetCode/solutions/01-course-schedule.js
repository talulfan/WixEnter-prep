/**
 * SOLUTION: Course Schedule (LeetCode 207)
 *
 * Approach and Intuition:
 * - Brute Force: Try every permutation of courses — factorial, not viable.
 * - Optimal: Build adjacency list + indegree count. Kahn's BFS: enqueue courses with
 *   indegree 0, process edges, decrement indegrees. If processed count === numCourses,
 *   no cycle. Alternatively DFS 3-color cycle detection.
 *
 * Time & Space Complexity:
 * - Time: O(V + E) — V courses, E prerequisites
 * - Space: O(V + E) — graph storage
 *
 * INTERVIEW TIP: "Finishing all courses is possible iff the prerequisite graph is a DAG —
 * I'll detect that with topological sort using indegrees."
 */

function canFinish(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const graph = Array.from({ length: numCourses }, () => []);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    indegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let processed = 0;
  while (queue.length) {
    const node = queue.shift();
    processed++;
    for (const next of graph[node]) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return processed === numCourses;
}

console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
console.log(canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // true

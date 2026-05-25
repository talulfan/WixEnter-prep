/**
 * SOLUTION: Word Ladder (LeetCode 127)
 *
 * Approach and Intuition:
 * - Brute Force: DFS all paths — exponential.
 * - Optimal: BFS from beginWord. For each word, try changing each position to a-z;
 *   if neighbor in Set(wordList), enqueue. First time we reach endWord return level count.
 *   Build generic neighbors via wildcard patterns (hot -> *ot, h*t, ho*) for optimization
 *   in interviews; letter-by-letter also works for clarity.
 *
 * Time & Space Complexity:
 * - Time: O(N * L * 26) — N words, L word length (simplified per-word expansion)
 * - Space: O(N) — queue and visited set
 *
 * INTERVIEW TIP: "Shortest transformation is unweighted shortest path — BFS guarantees
 * the minimum number of steps."
 */

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];
  const visited = new Set([beginWord]);

  while (queue.length) {
    const [word, steps] = queue.shift();

    if (word === endWord) return steps;

    const chars = word.split('');
    for (let i = 0; i < chars.length; i++) {
      const original = chars[i];
      for (let c = 97; c <= 122; c++) {
        chars[i] = String.fromCharCode(c);
        const next = chars.join('');
        if (wordSet.has(next) && !visited.has(next)) {
          visited.add(next);
          queue.push([next, steps + 1]);
        }
      }
      chars[i] = original;
    }
  }

  return 0;
}

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
); // 5
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0

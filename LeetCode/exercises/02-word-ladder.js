/**
 * LeetCode #127: Word Ladder
 * https://leetcode.com/problems/word-ladder/
 *
 * Difficulty: Hard
 * Suggested time: ~40 minutes
 *
 * Given `beginWord`, `endWord`, and `wordList`, return the length of the shortest
 * transformation sequence from begin to end, changing one letter at a time.
 * Each intermediate word must be in `wordList`. Return 0 if impossible.
 *
 * Examples:
 *   ladderLength('hit','cog',['hot','dot','dog','lot','log','cog']) → 5
 *   ladderLength('hit','cog',['hot','dot','dog','lot','log'])         → 0
 *
 * Topics: BFS on implicit graph, hash set for O(1) word lookup
 */

function ladderLength(beginWord, endWord, wordList) {
  // YOUR CODE HERE
}

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
); // 5
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0

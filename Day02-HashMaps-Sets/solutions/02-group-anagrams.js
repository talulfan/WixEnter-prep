/**
 * SOLUTION: Group Anagrams (LeetCode 49)
 *
 * Approach and Intuition:
 * - Brute Force / Sort key: Sort each word's characters to form a canonical key
 *   (e.g. "eat" → "aet"). Group strings with the same key in a Map.
 *   Time O(N * K log K) where N = number of strings, K = max word length (sort per word).
 * - Optimal / Count key: Build a key from 26 letter counts (e.g. "#1#0#1..." or tuple).
 *   No sorting per word — counting is O(K). Total time O(N * K), space O(N * K) for output.
 *
 * Time & Space Complexity:
 * - Time: O(N * K) — count-based key per string
 * - Space: O(N * K) — storing all strings in groups
 *
 * INTERVIEW TIP: "Sorting each word is fine for interviews, but character counting avoids
 * the log K factor and is the standard optimal approach when K is large."
 */

function groupAnagrams(strs) {
  const groups = new Map();

  for (const word of strs) {
    const count = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for (let i = 0; i < word.length; i++) {
      count[word.charCodeAt(i) - base]++;
    }

    const key = count.join('#');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }

  return Array.from(groups.values());
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams(['']));
// [[""]]

console.log(groupAnagrams(['a']));
// [["a"]]

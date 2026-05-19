/**
 * LeetCode #49: Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 *
 * Given an array of strings `strs`, group the anagrams together.
 * You can return the answer in any order.
 *
 * Examples:
 *   groupAnagrams(['eat','tea','tan','ate','nat','bat'])
 *     → [['eat','tea','ate'], ['tan','nat'], ['bat']]
 *   groupAnagrams(['']) → [['']]
 *   groupAnagrams(['a']) → [['a']]
 *
 * Goal: O(N * K) with a count-based Map key (or O(N * K log K) with sort keys).
 */

function groupAnagrams(strs) {
  // YOUR CODE HERE
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));

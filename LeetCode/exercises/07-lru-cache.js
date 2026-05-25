/**
 * LeetCode #146: LRU Cache
 * https://leetcode.com/problems/lru-cache/
 *
 * Difficulty: Medium
 * Suggested time: ~40 minutes
 *
 * Design a structure that supports:
 *   - LRUCache(capacity)
 *   - get(key) → value or -1
 *   - put(key, value) — evict least recently used if over capacity
 *
 * Both get and put must be O(1) average time.
 *
 * Topics: HashMap + doubly linked list, design
 */

class LRUCache {
  constructor(capacity) {
    // YOUR CODE HERE
  }

  get(key) {
    // YOUR CODE HERE
  }

  put(key, value) {
    // YOUR CODE HERE
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1
cache.put(4, 4);
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4

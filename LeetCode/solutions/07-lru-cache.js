/**
 * SOLUTION: LRU Cache (LeetCode 146)
 *
 * Approach and Intuition:
 * - Brute Force: Array — get/put O(n) from shifting.
 * - Optimal: Map key → node in doubly linked list. Head = MRU, tail = LRU.
 *   get: move node to head. put: update or insert at head; evict tail if over capacity.
 *
 * Time & Space Complexity:
 * - Time: O(1) average per get and put
 * - Space: O(capacity)
 *
 * INTERVIEW TIP: "I combine a hash map for lookup with a doubly linked list for O(1)
 * reordering when an entry is accessed."
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = { prev: null, next: null };
    this.tail = { prev: null, next: null };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _insertAtHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node);
    this._insertAtHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this._remove(node);
      this._insertAtHead(node);
      return;
    }

    const node = { key, value, prev: null, next: null };
    this.map.set(key, node);
    this._insertAtHead(node);

    if (this.map.size > this.capacity) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));

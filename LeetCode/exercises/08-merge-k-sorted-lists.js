/**
 * LeetCode #23: Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * Difficulty: Hard
 * Suggested time: ~40 minutes
 *
 * You are given an array of `k` linked lists, each sorted in ascending order.
 * Merge all into one sorted linked list and return it.
 *
 * Topics: min-heap, divide and conquer, merge two lists
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeKLists(lists) {
  // YOUR CODE HERE
}

function buildList(arr) {
  const dummy = new ListNode(0);
  let cur = dummy;
  for (const v of arr) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const out = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

const lists = [buildList([1, 4, 5]), buildList([1, 3, 4]), buildList([2, 6])];
console.log(listToArray(mergeKLists(lists))); // [1,1,2,3,4,4,5,6]

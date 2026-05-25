/**
 * SOLUTION: Merge k Sorted Lists (LeetCode 23)
 *
 * Approach and Intuition:
 * - Brute Force: Collect all values, sort, build list — O(N log N).
 * - Optimal: Min-heap of size k — push head of each list; pop smallest, append to result,
 *   push that node's next. Divide & conquer merge pairs also O(N log k).
 *
 * Time & Space Complexity:
 * - Time: O(N log k) — N total nodes, heap size k
 * - Space: O(k) — heap
 *
 * INTERVIEW TIP: "I always compare only the current head of each list — a size-k min-heap
 * gives the next global minimum in O(log k) time."
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeKLists(lists) {
  const heap = [];

  function heapPush(node) {
    heap.push(node);
    let i = heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (heap[p].val <= heap[i].val) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  }

  function heapPop() {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let s = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (l < heap.length && heap[l].val < heap[s].val) s = l;
        if (r < heap.length && heap[r].val < heap[s].val) s = r;
        if (s === i) break;
        [heap[i], heap[s]] = [heap[s], heap[i]];
        i = s;
      }
    }
    return top;
  }

  for (const head of lists) {
    if (head) heapPush(head);
  }

  const dummy = new ListNode(0);
  let cur = dummy;

  while (heap.length) {
    const node = heapPop();
    cur.next = node;
    cur = cur.next;
    if (node.next) heapPush(node.next);
  }

  return dummy.next;
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
console.log(listToArray(mergeKLists(lists)));

/**
 * SOLUTION: Kth Largest Element in an Array (LeetCode 215)
 *
 * Approach and Intuition:
 * - Brute Force: Sort array descending, return nums[k-1] — O(n log n).
 * - Optimal: Min-heap of size k — push each num; if size > k pop smallest root.
 *   Root after processing is k-th largest. Quickselect O(n) average also great to mention.
 *
 * Time & Space Complexity:
 * - Time: O(n log k) — heap operations
 * - Space: O(k) — heap size
 *
 * INTERVIEW TIP: "To find the k-th largest, I keep a min-heap of k elements so the smallest
 * among the top k candidates is always at the root."
 */

function findKthLargest(nums, k) {
  const heap = [];

  function push(val) {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  }

  function pop() {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let s = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (l < heap.length && heap[l] < heap[s]) s = l;
        if (r < heap.length && heap[r] < heap[s]) s = r;
        if (s === i) break;
        [heap[i], heap[s]] = [heap[s], heap[i]];
        i = s;
      }
    }
    return top;
  }

  for (const num of nums) {
    push(num);
    if (heap.length > k) pop();
  }

  return heap[0];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

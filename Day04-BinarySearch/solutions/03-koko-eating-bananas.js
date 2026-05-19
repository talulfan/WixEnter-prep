/**
 * SOLUTION: Koko Eating Bananas (LeetCode 875)
 *
 * Approach and Intuition:
 * - Brute Force: Try every speed k from 1 to max(piles) until hours <= h — O(n * max).
 * - Optimal: Binary search on the answer (eating speed k). For a candidate k, compute
 *   total hours = sum(ceil(pile / k)). If hours <= h, try smaller k (right = mid);
 *   else need faster eating (left = mid + 1). Monotonic feasibility enables binary search.
 *
 * Time & Space Complexity:
 * - Time: O(n * log(max pile)) — log range of k, each check is O(n)
 * - Space: O(1)
 *
 * INTERVIEW TIP: "When the problem asks for the minimum maximum satisfying a constraint,
 * I binary search on the answer space rather than simulating every possibility linearly."
 */

function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  function hoursNeeded(speed) {
    let total = 0;
    for (const pile of piles) {
      total += Math.ceil(pile / speed);
    }
    return total;
  }

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (hoursNeeded(mid) <= h) right = mid;
    else left = mid + 1;
  }

  return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));  // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23

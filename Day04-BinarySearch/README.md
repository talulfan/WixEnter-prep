# Day 04 — Binary Search

## Folder structure

```
Day04-BinarySearch/
├── README.md
├── exercises/     # 01-binary-search.js, 02-search-2d-matrix.js, 03-koko-eating-bananas.js
└── solutions/     # full reference implementations
```

## Learning objectives

- Implement the **inclusive bounds** binary search template.
- Map 2D matrix indices to a **virtual 1D** sorted array.
- Recognize **binary search on the answer** (Koko eating bananas).

## Core concept: halve the search space

When data is sorted (or monotonic feasibility), binary search gives O(log n) instead of linear scan.

## JavaScript Essential Concepts & Methods

| Topic | What to know |
|-------|----------------|
| **Mid index** | `left + Math.floor((right - left) / 2)` — avoids overflow issues. |
| **Bounds** | `while (left <= right)` for inclusive; shrink with `mid ± 1`. |
| **2D indexing** | `row = Math.floor(i / cols)`, `col = i % cols`. |
| **Math.ceil** | `Math.ceil(pile / speed)` for hours per pile. |
| **Math.max spread** | `Math.max(...piles)` for upper bound on speed. |

```javascript
let left = 0, right = nums.length - 1;
while (left <= right) {
  const mid = left + Math.floor((right - left) / 2);
  if (nums[mid] === target) return mid;
  if (nums[mid] < target) left = mid + 1;
  else right = mid - 1;
}
```

## Common patterns

1. **Classic BS:** find exact target in sorted array.
2. **Flattened matrix:** index `0 .. rows*cols-1`.
3. **Search on answer:** smallest `k` such that `feasible(k)` is true.

## Interview pitfalls

- Infinite loops from wrong `left`/`right` updates.
- Confusing **lower bound** vs **upper bound** templates — pick one and stick to it.
- For “minimize maximum,” search the **answer range**, not array indices.

## Today's roadmap

| Step | Task | File |
|------|------|------|
| 1 | Binary Search template | `exercises/01-binary-search.js` |
| 2 | Search 2D Matrix | `exercises/02-search-2d-matrix.js` |
| 3 | Koko Eating Bananas | `exercises/03-koko-eating-bananas.js` |
| 4 | Verbal: when is BS on answer valid? (monotonic feasibility) | — |

## Problems

- **Binary Search (LC 704)**
- **Search a 2D Matrix (LC 74)**
- **Koko Eating Bananas (LC 875)**

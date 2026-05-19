# Day 03 — Two Pointers & Sliding Window

## Folder structure

```
Day03-TwoPointers-SlidingWindow/
├── README.md
├── exercises/
│   ├── 01-valid-palindrome.js
│   ├── 02-two-sum-ii.js
│   └── 03-longest-substring-without-repeating.js
└── solutions/
    └── (same file names)
```

**Practice:** `node exercises/02-two-sum-ii.js` · **Check:** `solutions/`

## Learning objectives

- Apply **two pointers** on sorted arrays and palindrome checks.
- Maintain a **valid window** with left/right pointers and a `Map` of last indices.
- State **1-based vs 0-based** indexing when required.

## Core concept: shrink the search space with structure

Sorted input → opposite pointers. Substring problems → expand right, shrink left when invalid.

## JavaScript Essential Concepts & Methods

| Topic | What to know |
|-------|----------------|
| **While loops** | `while (left < right)` — classic two-pointer guard. |
| **String methods** | `s[left]`, `s.toLowerCase()`, compare characters. |
| **Math** | `Math.max(a, b)` for tracking maximum window length. |
| **Map for window** | Store `char → lastIndex`; jump `left` when duplicate inside window. |
| **Increment/decrement** | `left++`, `right--` — move pointers toward center or expand window. |

```javascript
while (left < right) {
  const sum = nums[left] + nums[right];
  if (sum === target) return [left + 1, right + 1]; // 1-indexed
  if (sum < target) left++;
  else right--;
}
```

## Common patterns

1. **Valid Palindrome:** skip non-alphanumeric inward pointers.
2. **Two Sum II:** sorted array, opposite pointers.
3. **Longest substring:** expand `right`, update `left` from `Map` when duplicate.

## Interview pitfalls

- **Two Sum II** returns **1-indexed** positions.
- Palindrome: compare **lowercase** letters only.
- Sliding window: `left` only moves forward — still O(n).

## Today's roadmap

| Step | Task | File |
|------|------|------|
| 1 | Valid Palindrome | `exercises/01-valid-palindrome.js` |
| 2 | Two Sum II | `exercises/02-two-sum-ii.js` |
| 3 | Longest substring without repeating | `exercises/03-longest-substring-without-repeating.js` |
| 4 | Mock: explain all three in 15 minutes total | — |

## Problems

- **Valid Palindrome (LC 125)**
- **Two Sum II (LC 167)**
- **Longest Substring Without Repeating Characters (LC 3)**

# Day 02 — Hash Maps & Sets

## Folder structure

```
Day02-HashMaps-Sets/
├── README.md
├── exercises/
│   ├── 01-valid-anagram.js
│   └── 02-group-anagrams.js
└── solutions/
    ├── 01-valid-anagram.js
    └── 02-group-anagrams.js
```

**Practice:** `node exercises/01-valid-anagram.js` · **Check:** `solutions/` (after your attempt)

## Learning objectives

- Use **frequency counting** for character problems.
- Build canonical **keys** for grouping (sort vs count array).
- Compare **O(N · K log K)** vs **O(N · K)** approaches confidently.

## Core concept: hash maps turn “search” into O(1)

When the problem asks whether two strings are anagrams, or how to group equivalent strings, a hash map (or fixed-size count array) avoids repeated comparisons.

## JavaScript Essential Concepts & Methods

| Topic | What to know |
|-------|----------------|
| **Strings** | Immutable; `s[i]` or `s.charAt(i)`; `s.length`. |
| **char codes** | `s.charCodeAt(i) - 'a'.charCodeAt(0)` → index 0–25 for lowercase a–z. |
| **Array fill** | `new Array(26).fill(0)` for frequency buckets. |
| **Map grouping** | `if (!map.has(k)) map.set(k, [])` then `map.get(k).push(item)`. |
| **Set** | Track unique characters or seen keys. |
| **Sort (alternative)** | `[...word].sort().join('')` — mutates copy, not original string. |
| **every()** | `arr.every((x) => x === 0)` — all frequencies balanced. |

```javascript
const groups = new Map();
const key = count.join('#');
if (!groups.has(key)) groups.set(key, []);
groups.get(key).push(word);
```

## Common patterns

1. **Valid Anagram:** increment for `s`, decrement for `t`; all counts zero.
2. **Group Anagrams:** count-based key (optimal) or sorted-string key (simpler to code).

## Interview pitfalls

- Forgetting length mismatch early exit on anagrams.
- Using object `{}` for keys with special characters — `Map` is safer for arbitrary keys.
- Sort approach: remember **O(K log K)** per string, not just O(N).

## Today's roadmap

| Step | Task | File |
|------|------|------|
| 1 | Valid Anagram with count array | `exercises/01-valid-anagram.js` |
| 2 | Group Anagrams — optimal count key | `exercises/02-group-anagrams.js` |
| 3 | Compare verbally: sort key vs count key | — |
| 4 | Timed redo (25 min both problems) | — |

## Problems

- **Valid Anagram (LC 242)**
- **Group Anagrams (LC 49)** — see JSDoc for complexity comparison.

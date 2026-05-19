# Day 01 — Arrays (JavaScript)

## Folder structure

```
Day01-Arrays-JS/
├── README.md
├── exercises/          # Your practice (empty function bodies)
│   ├── 01-two-sum.js
│   └── 02-contains-duplicate.js
└── solutions/          # Reference solutions (after you attempt)
    ├── 01-two-sum.js
    └── 02-contains-duplicate.js
```

**Practice:** `node exercises/01-two-sum.js`  
**Check:** `node solutions/01-two-sum.js` (only after your attempt)

## Learning objectives

- Solve array problems in **O(n)** with hash-based lookups.
- Explain tradeoffs between brute force and optimal solutions aloud.
- Run and debug solutions with Node.js.

## Core concept: arrays as the default interview structure

Arrays are ordered, indexable collections. Most Wix-style coding rounds start here: find a pair, detect duplicates, scan once while remembering what you have seen.

**Pattern:** one pass + auxiliary `Map` or `Set` when you need “have I seen X before?” in O(1) average time.

## JavaScript Essential Concepts & Methods

| Topic | What to know |
|-------|----------------|
| **Variables** | Use `const` by default; `let` when reassigned. Avoid `var`. |
| **Arrays** | `arr.length`, `arr[i]`, `arr.push(x)`, spread `[...arr]` for copies. |
| **Loops** | `for (let i = 0; i < arr.length; i++)` for indices; `for (const x of arr)` for values. |
| **Map** | `map.set(key, val)`, `map.get(key)`, `map.has(key)` — O(1) average lookup. |
| **Set** | `set.add(x)`, `set.has(x)` — membership tests. |
| **Functions** | `function name(a, b) { return ...; }` |
| **Equality** | `===` for primitives; `undefined` when `map.get` misses. |
| **Run code** | `node exercises/01-two-sum.js` from this day folder. |

```javascript
const seen = new Map();
seen.set(7, 0);
seen.has(7);   // true
seen.get(7);   // 0
```

## Common patterns

1. **Complement lookup (Two Sum):** store `value → index`, check `target - num`.
2. **Seen set (Contains Duplicate):** add each element; if already in set, return true.

## Interview pitfalls

- Returning **indices** vs **values** — read the problem.
- Off-by-one in loops (`<=` vs `<`).
- Using `==` instead of `===`.
- Forgetting that `Map` keys can be numbers (stored as given).

## Today's roadmap

| Step | Task | File |
|------|------|------|
| 1 | Read this README | — |
| 2 | Implement & run Two Sum | `exercises/01-two-sum.js` |
| 3 | Implement & run Contains Duplicate | `exercises/02-contains-duplicate.js` |
| 4 | Review solutions & explain brute force vs optimal | `solutions/` |
| 5 | Re-solve from `exercises/` without peeking (30 min) | — |

## Problems

- **Two Sum (LC 1)** — `Map`, one pass.
- **Contains Duplicate (LC 217)** — `Set`, one pass.

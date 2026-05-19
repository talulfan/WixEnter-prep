# WixEnter-prep — 9-Day Interview Preparation Workspace

A structured, English-language prep track for **Wix technical interviews**: LeetCode Easy/Medium patterns, React fundamentals, a mini site-builder exercise, CoderPad simulation, and behavioral preparation.

## How to use

| Day | Folder | Focus |
|-----|--------|--------|
| 1 | `Day01-Arrays-JS` | Arrays, `Map`, `Set` basics |
| 2 | `Day02-HashMaps-Sets` | Frequency maps, anagram keys |
| 3 | `Day03-TwoPointers-SlidingWindow` | Two pointers, sliding window |
| 4 | `Day04-BinarySearch` | Binary search & search on answer |
| 5 | `Day05-Graphs-Matrices` | DFS/BFS, Union-Find |
| 6 | `Day06-React-Fundamentals` | Components, state, lists |
| 7 | `Day07-Fullstack-Builder` | Site Builder Lite + `Set` uniqueness |
| 8 | `Day08-CoderPad-Simulation` | Timed practice, empty mock file |
| 9 | `Day09-Behavioral-WixPrep` | STAR, culture, Why Wix |

### Folder layout (Days 1–8)

Each coding day uses two subfolders:

| Folder | Purpose |
|--------|---------|
| `exercises/` | Problem statement JSDoc + empty function (`// YOUR CODE HERE`) + tests |
| `solutions/` | Full JSDoc (SOLUTION, complexity, INTERVIEW TIP) + working code + tests |

Day 9 is README-only (behavioral).

### Run practice (exercises)

```bash
node Day01-Arrays-JS/exercises/01-two-sum.js
```

### Check answers (solutions)

```bash
node Day01-Arrays-JS/solutions/01-two-sum.js
```

### React (Days 6–7)

Implement files under `exercises/`, then compare with `solutions/`. Use Vite/CRA and copy the folder into `src/`.

## File conventions

**Exercises:** LeetCode-style description, empty body, `console.log` tests at the bottom.

**Solutions:** Expanded JSDoc with `SOLUTION`, brute force vs optimal, complexity, `INTERVIEW TIP`, full code, and tests.

Good luck — practice explaining your approach out loud, not only passing tests.

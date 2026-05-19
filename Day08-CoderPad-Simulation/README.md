# Day 08 — CoderPad Simulation

## Folder structure

```
Day08-CoderPad-Simulation/
├── README.md
├── exercises/
│   ├── 01-min-add-to-make-valid.js
│   └── 02-mock-challenge.js    # empty — surprise mock (no spoilers)
└── solutions/
    ├── 01-min-add-to-make-valid.js
    └── 02-mock-challenge.js    # also empty — fill in after timed mock
```

## Learning objectives

- Code under **time pressure** with a clean template.
- Practice **parentheses / stack** problems common in live pads.
- Use `02-mock-challenge.js` as a **blank** practice shell.

## Core concept: interview rhythm on CoderPad

1. Clarify inputs, outputs, edge cases (2 min).
2. State brute force, then optimal (3 min).
3. Code optimal solution (15–20 min).
4. Run examples, fix bugs (5 min).
5. Discuss complexity and follow-ups.

## JavaScript Essential Concepts & Methods

| Topic | What to know |
|-------|----------------|
| **Single pass balance** | Track `open` count; when `)` makes balance negative, add `(` |
| **Stack** | `stack.push('(')`, `stack.pop()` for matching brackets |
| **for...of** | `for (const char of s)` over strings |
| **console.log** | Quick tests at bottom — CoderPad supports `console.log` |
| **Empty practice file** | Only JSDoc + signature in `02-mock-challenge.js` |

## Common patterns

1. **Min add to make valid:** balance counter, no stack needed.
2. **Valid parentheses (mock):** stack of open brackets; on close, check top matches.

## Interview pitfalls

- Not handling **empty string**.
- Forgetting to add remaining `open` count at end (min-add problem).
- Over-engineering with extra classes or helpers in timed round.

## Today's roadmap

| Step | Task | File |
|------|------|------|
| 1 | Implement min-add | `exercises/01-min-add-to-make-valid.js` |
| 2 | Check solution | `solutions/01-min-add-to-make-valid.js` |
| 3 | **45 min timer:** mock challenge (no peeking) | `exercises/02-mock-challenge.js` |
| 3 | Compare with stack solution (Valid Parentheses) | — |
| 4 | Repeat mock once more same day | — |

## Files

- `exercises/01-min-add-to-make-valid.js` — practice
- `solutions/01-min-add-to-make-valid.js` — reference after attempt
- `exercises/02-mock-challenge.js` — **empty body** for timed surprise mock
- `solutions/02-mock-challenge.js` — fill in after your mock

Run: `node exercises/01-min-add-to-make-valid.js`

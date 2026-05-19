# Day 06 — React Fundamentals

## Folder structure

```
Day06-React-Fundamentals/
├── README.md
├── exercises/     # 01-greeting.jsx, 02-counter.jsx, 03-todo-list.jsx (empty bodies)
└── solutions/     # complete components
```

Implement under `exercises/`, then compare with `solutions/` in a Vite/CRA app.

## Learning objectives

- Build **controlled** inputs with `useState`.
- Update state **immutably** (arrays of objects).
- Use stable **`key`** props in lists.

## Core concept: UI = f(state)

React re-renders when state changes. You declare state; events call setters; JSX reflects current state.

## JavaScript Essential Concepts & Methods

| Topic | What to know |
|-------|----------------|
| **JSX** | HTML-like syntax in `.jsx` files; one parent element per return. |
| **import** | `import { useState } from 'react'`. |
| **useState** | `const [value, setValue] = useState(initial)`. |
| **Events** | `onChange={(e) => setValue(e.target.value)}`. |
| **Forms** | `onSubmit={(e) => { e.preventDefault(); ... }}`. |
| **Lists** | `items.map((item) => <li key={item.id}>...</li>)`. |
| **Spread** | `[...prev, newItem]`, `{ ...obj, done: true }`. |
| **Functional updates** | `setCount((c) => c + 1)` when next state depends on previous. |

```jsx
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />
```

## Common patterns

1. **Controlled input:** `value` + `onChange` tied to state.
2. **List CRUD:** map to render, filter to delete, map to toggle fields.
3. **Props:** pass read-only config (`title`, `step`) from parent.

## Interview pitfalls

- Mutating state directly (`todos.push(x)` without new array).
- Using **index as key** when list order changes.
- Missing `e.preventDefault()` on forms.
- Stale closures — use functional `setState` when needed.

## Today's roadmap

| Step | Task | File |
|------|------|------|
| 1 | Greeting + controlled input | `exercises/01-greeting.jsx` |
| 2 | Counter + functional updates | `exercises/02-counter.jsx` |
| 3 | Todo list + filters | `exercises/03-todo-list.jsx` |
| 4 | Explain reconciliation & keys out loud | — |

## Setup tip

Create a Vite React app (`npm create vite@latest`) and copy components into `src/`, or paste into [CodeSandbox](https://codesandbox.io).

## Files

- `exercises/01-greeting.jsx` — props + controlled input
- `exercises/02-counter.jsx` — `useState`, functional updates
- `exercises/03-todo-list.jsx` — list state, keys, filters

# Day 07 — Fullstack Builder (Site Builder Lite)

## Folder structure

```
Day07-Fullstack-Builder/
├── README.md
├── exercises/
│   ├── App.jsx
│   └── App.css
└── solutions/
    ├── App.jsx
    └── App.css
```

## Learning objectives

- Model a **component canvas** with React state.
- Enforce **unique IDs** with a `Set` in O(1) average time.
- **Filter** the canvas with `useMemo` when search changes.

## Core concept: editor-like state

A site builder tracks a list of blocks (id, type, label). Adding blocks must avoid duplicate IDs — same idea as unique React keys in a real editor tree.

## JavaScript Essential Concepts & Methods

| Topic | What to know |
|-------|----------------|
| **useMemo** | `useMemo(() => compute(), [deps])` — avoid recomputing filtered list every render. |
| **Set in state** | Clone on update: `new Set(prev).add(id)` — React needs new reference. |
| **Immutable remove** | `setComponents(prev => prev.filter(...))`. |
| **includes** | `str.toLowerCase().includes(q)` for search. |
| **CSS modules / import** | `import './App.css'` in `App.jsx`. |

```javascript
const [usedIds, setUsedIds] = useState(() => new Set());
if (usedIds.has(id)) { /* reject duplicate */ }
setUsedIds((prev) => new Set(prev).add(id));
```

## Common patterns

1. **Dual state:** array for display order + `Set` for membership.
2. **Derived data:** filtered list from `useMemo`, not separate state.
3. **Form validation:** trim strings; show inline error message.

## Interview pitfalls

- Storing `Set` in state without creating a **new** Set on update (React won’t re-render).
- Putting filtered results in state when they can be **derived**.
- Forgetting accessibility (`label`, `button type`).

## Today's roadmap

| Step | Task | File |
|------|------|------|
| 1 | Build Site Builder in exercises | `exercises/App.jsx` |
| 2 | Run in Vite; compare with `solutions/App.jsx` | `solutions/App.css` |
| 3 | Explain why `Set` beats scanning array for each add | — |
| 4 | Extension idea: drag-and-drop order (verbal only) | — |

## Files

- `exercises/App.jsx` — your implementation
- `solutions/App.jsx` + `solutions/App.css` — reference

/**
 * SOLUTION: Site Builder Lite (Fullstack Builder Simulation)
 *
 * Approach and Intuition:
 * - Brute Force: Allow duplicate component IDs and filter in render with nested loops — O(n²)
 *   on every add and confusing UX when duplicates slip through.
 * - Optimal: Maintain components array plus a Set of used IDs for O(1) uniqueness checks;
 *   useMemo for filtered list when search query changes; immutable state updates for React.
 *
 * Time & Space Complexity:
 * - Time: O(n) per add/search where n = number of components; Set lookup O(1) average
 * - Space: O(n) for components array and id Set
 *
 * INTERVIEW TIP: "For a site builder, I enforce unique block IDs with a Set so duplicate
 * inserts fail fast — that mirrors how a real editor would prevent conflicting node keys."
 */

import { useMemo, useState } from 'react';
import './App.css';

const COMPONENT_TYPES = ['header', 'text', 'image', 'button', 'section'];

let idCounter = 1;

export default function App() {
  const [label, setLabel] = useState('');
  const [type, setType] = useState('text');
  const [search, setSearch] = useState('');
  const [components, setComponents] = useState([]);
  const [usedIds, setUsedIds] = useState(() => new Set());
  const [error, setError] = useState('');

  function generateId() {
    return `block-${idCounter++}`;
  }

  function handleAdd(e) {
    e.preventDefault();
    setError('');

    const trimmedLabel = label.trim();
    if (!trimmedLabel) {
      setError('Label is required.');
      return;
    }

    const id = generateId();
    if (usedIds.has(id)) {
      setError('Duplicate component ID — try again.');
      return;
    }

    const newComponent = { id, type, label: trimmedLabel };

    setComponents((prev) => [...prev, newComponent]);
    setUsedIds((prev) => new Set(prev).add(id));
    setLabel('');
  }

  function handleRemove(id) {
    setComponents((prev) => prev.filter((c) => c.id !== id));
    setUsedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }

  const filteredComponents = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return components;
    return components.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.type.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q)
    );
  }, [components, search]);

  return (
    <motionDiv className="app">
      <header className="app-header">
        <h1>Site Builder Lite</h1>
        <p>Add blocks to your page. IDs are unique — enforced with a Set.</p>
      </header>

      <main className="app-main">
        <section className="panel add-panel">
          <h2>Add component</h2>
          <form onSubmit={handleAdd}>
            <label>
              Label
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Hero title"
              />
            </label>
            <label>
              Type
              <select value={type} onChange={(e) => setType(e.target.value)}>
                {COMPONENT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">Add to canvas</button>
          </form>
          {error && <p className="error">{error}</p>}
        </section>

        <section className="panel canvas-panel">
          <motionDiv className="toolbar">
            <h2>Canvas ({filteredComponents.length})</h2>
            <input
              type="search"
              placeholder="Filter by label, type, or id..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </motionDiv>

          <ul className="component-list">
            {filteredComponents.length === 0 ? (
              <li className="empty">No components yet. Add one on the left.</li>
            ) : (
              filteredComponents.map((c) => (
                <li key={c.id} className="component-card">
                  <span className="badge">{c.type}</span>
                  <strong>{c.label}</strong>
                  <code>{c.id}</code>
                  <button type="button" onClick={() => handleRemove(c.id)}>
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
    </motionDiv>
  );
}

/**
 * SOLUTION: Todo List Component (React Fundamentals)
 *
 * Approach and Intuition:
 * - Brute Force: Store todos as comma-separated string — hard to toggle/delete items correctly.
 * - Optimal: Array of objects { id, text, done } in state; stable unique id per todo;
 *   map to list with key={id}; filter for Active/Completed/All views; immutable updates via map/filter.
 *
 * Time & Space Complexity:
 * - Time: O(n) per render where n = number of todos
 * - Space: O(n) for todo list in memory
 *
 * INTERVIEW TIP: "I never use array index as key when items can be reordered or deleted — a
 * stable id keeps React's reconciliation correct and avoids subtle UI bugs."
 */

import { useState } from 'react';

let nextId = 1;

export function TodoList() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  function addTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, { id: nextId++, text: trimmed, done: false }]);
    setText('');
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  const visible = todos.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'completed') return t.done;
    return true;
  });

  const filters = ['all', 'active', 'completed'];

  return (
    <section className="todo-list">
      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add</button>
      </form>

      <nav className="todo-filters">
        {filters.map((opt) => (
          <button
            key={opt}
            type="button"
            aria-pressed={filter === opt}
            onClick={() => setFilter(opt)}
          >
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </button>
        ))}
      </nav>

      <ul>
        {visible.map((t) => (
          <li key={t.id}>
            <label>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTodo(t.id)}
              />
              <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
                {t.text}
              </span>
            </label>
            <button type="button" onClick={() => deleteTodo(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p>{todos.filter((t) => !t.done).length} items left</p>
    </section>
  );
}

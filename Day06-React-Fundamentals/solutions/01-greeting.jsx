/**
 * SOLUTION: Greeting Component (React Fundamentals)
 *
 * Approach and Intuition:
 * - Brute Force: Hard-code static JSX with no user input — not reusable.
 * - Optimal: Controlled component with useState for name; derive greeting from state;
 *   pass read-only display text via props where appropriate (e.g. app title).
 *
 * Time & Space Complexity:
 * - Time: O(1) per render — trivial UI
 * - Space: O(1) — single string in state
 *
 * INTERVIEW TIP: "I keep the input controlled so React owns the source of truth — the value
 * always comes from state and updates through onChange."
 */

import { useState } from 'react';

export function Greeting({ title = 'Welcome' }) {
  const [name, setName] = useState('');

  return (
    <section className="greeting">
      <h2>{title}</h2>
      <label htmlFor="name-input">Your name</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>{name.trim() ? `Hello, ${name.trim()}!` : 'Hello, guest!'}</p>
    </section>
  );
}

/**
 * SOLUTION: Counter Component (React Fundamentals)
 *
 * Approach and Intuition:
 * - Brute Force: Mutate a global variable and force re-render manually — anti-pattern in React.
 * - Optimal: useState for count; functional updates setCount((c) => c + 1) when next state
 *   depends on previous (safe with batching). Separate handlers for increment/decrement/reset.
 *
 * Time & Space Complexity:
 * - Time: O(1) per interaction
 * - Space: O(1)
 *
 * INTERVIEW TIP: "When the new count depends on the old count, I use the functional form of
 * setState so I never rely on a stale closure from a batched update."
 */

import { useState } from 'react';

export function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <section className="counter">
      <p data-testid="count-value">Count: {count}</p>
      <button type="button" onClick={() => setCount((c) => c - step)}>
        −{step}
      </button>
      <button type="button" onClick={() => setCount((c) => c + step)}>
        +{step}
      </button>
      <button type="button" onClick={() => setCount(initialCount)}>
        Reset
      </button>
    </section>
  );
}

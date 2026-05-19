/**
 * Exercise: Site Builder Lite (Fullstack Builder)
 *
 * Build a React app `App` that simulates a minimal site builder:
 * - Form to add a component: `label` (required, trimmed) and `type` (select from:
 *   header, text, image, button, section).
 * - Each component has a unique auto-generated `id` (e.g. block-1, block-2).
 * - Use a **Set** to reject duplicate IDs instantly (O(1) check).
 * - Canvas lists components; each card shows type badge, label, id, and Remove button.
 * - Search input filters canvas by label, type, or id (case-insensitive).
 * - Use `useMemo` for the filtered list.
 * - Show inline error when label is empty.
 *
 * Styling: `import './App.css'` (included in this folder).
 *
 * Export: `export default function App() { ... }`
 */

import { useMemo, useState } from 'react';
import './App.css';

export default function App() {
  // YOUR CODE HERE
}

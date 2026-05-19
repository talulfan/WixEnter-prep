# Day 05 — Graphs & Matrices

## Folder structure

```
Day05-Graphs-Matrices/
├── README.md
├── exercises/
│   ├── 01-number-of-islands.js
│   └── 02-graph-valid-tree.js
└── solutions/
```

## Learning objectives

- Represent graphs with an **adjacency list** (`Map` in JavaScript).
- Run **DFS/BFS** on a 2D grid (islands, flood fill).
- Detect cycles / validate trees with **Union-Find**.

## Core concept: grids are implicit graphs

Each cell is a node; edges connect adjacent cells (4-directional). Each unvisited `'1'` in a grid starts a new DFS/BFS component.

---

## Graph representation: adjacency list with `Map`

```javascript
/**
 * Build undirected adjacency list for n nodes (0 .. n-1).
 * @param {number} n - number of nodes
 * @param {number[][]} edges - pairs [u, v]
 * @returns {Map<number, number[]>}
 */
function buildAdjacencyList(n, edges) {
  const graph = new Map();
  for (let i = 0; i < n; i++) graph.set(i, []);
  for (const [u, v] of edges) {
    graph.get(u).push(v);
    graph.get(v).push(u);
  }
  return graph;
}
```

**DFS on adjacency list:**

```javascript
function dfs(node, graph, visited) {
  visited.add(node);
  for (const neighbor of graph.get(node)) {
    if (!visited.has(neighbor)) dfs(neighbor, graph, visited);
  }
}
```

**BFS on adjacency list:**

```javascript
function bfs(start, graph) {
  const visited = new Set([start]);
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    for (const neighbor of graph.get(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

---

## Matrix DFS template (4 directions)

```javascript
const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

function inBounds(r, c, rows, cols) {
  return r >= 0 && r < rows && c >= 0 && c < cols;
}

function dfsMatrix(grid, r, c) {
  const rows = grid.length;
  const cols = grid[0].length;
  if (!inBounds(r, c, rows, cols) || grid[r][c] === '0') return;

  grid[r][c] = '0'; // mark visited (sink land)

  for (const [dr, dc] of DIRECTIONS) {
    dfsMatrix(grid, r + dr, c + dc);
  }
}
```

## Matrix BFS template

```javascript
function bfsMatrix(grid, startR, startC) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [[startR, startC]];
  grid[startR][startC] = '0';

  while (queue.length) {
    const [r, c] = queue.shift();
    for (const [dr, dc] of DIRECTIONS) {
      const nr = r + dr;
      const nc = c + dc;
      if (inBounds(nr, nc, rows, cols) && grid[nr][nc] === '1') {
        grid[nr][nc] = '0';
        queue.push([nr, nc]);
      }
    }
  }
}
```

---

## JavaScript Essential Concepts & Methods

| Topic | What to know |
|-------|----------------|
| **2D arrays** | `grid[r][c]`, `grid.length`, `grid[0].length`. |
| **Destructuring** | `const [dr, dc] = DIRECTIONS[i]`. |
| **Set** | `visited.add(node)`, `visited.has(node)`. |
| **Queue** | `queue.push(x)`, `queue.shift()` (BFS). |
| **Map** | Adjacency list: `graph.get(u).push(v)`. |
| **Recursion** | DFS; watch stack depth on large grids. |

## Interview pitfalls

- Forgetting to mark visited → infinite loops.
- Using 8 directions when problem says **4**.
- Tree validation: need **exactly `n - 1` edges** and **no cycle**.
- Mutating input grid — confirm with interviewer.

## Today's roadmap

| Step | Task | File |
|------|------|------|
| 1 | Study templates above | README |
| 2 | Number of Islands (DFS) | `exercises/01-number-of-islands.js` |
| 3 | Graph Valid Tree (Union-Find) | `exercises/02-graph-valid-tree.js` |
| 4 | Optional: rewrite islands with BFS | — |

## Problems

- **Number of Islands (LC 200)**
- **Graph Valid Tree (LC 261)**

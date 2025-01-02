---
slug: breadth-first-search
title: Breadth First Search (BFS)
description: Understanding Breadth First Search algorithm and its implementation
keywords: [bfs, breadth first search, graph algorithms, graph traversal]
---

import { GraphBFS } from '@patternize/components';

## Interactive Visualization

Try out BFS on this interactive graph:

<GraphBFS />
<br/>


# Breadth First Search (BFS)

:::info
BFS is a graph traversal algorithm that explores all vertices at the present depth before moving on to vertices at the next depth level.
:::

## How BFS Works

Breadth First Search works like exploring a maze level by level:
1. Start at a chosen vertex
2. Visit all its neighbors
3. Then visit all neighbors of those neighbors
4. Continue this pattern until all reachable vertices are visited

## Key Characteristics
- Uses a queue data structure
- Time Complexity: O(V + E) where V is vertices and E is edges
- Space Complexity: O(V)
- Guarantees shortest path in unweighted graphs
- Explores nodes level by level

## Common Applications
- Finding shortest path in unweighted graphs
- Social networking (finding people within N connections)
- Web crawlers
- GPS Navigation systems
- Broadcasting in network 
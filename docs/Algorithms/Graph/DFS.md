---
slug: depth-first-search
title: Depth First Search (DFS)
description: Understanding Depth First Search algorithm and its implementation
keywords: [dfs, depth first search, graph algorithms, graph traversal]
---

import { GraphDFS } from '@patternize/components';

## Interactive Visualization

Experiment with DFS using this interactive visualization:

<GraphDFS />
<br/>

# Depth First Search (DFS)

:::info
DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking.
:::

## How DFS Works

Depth First Search works like exploring a maze by following these steps:
1. Start at a chosen vertex
2. Explore as far as possible along each branch
3. Backtrack when you reach a dead end
4. Continue until all vertices are visited

## Key Characteristics
- Uses a stack (or recursion)
- Time Complexity: O(V + E) where V is vertices and E is edges
- Space Complexity: O(V)
- Goes deep before going wide
- Useful for topological sorting


## Common Applications
- Topological Sorting
- Finding cycles in a graph
- Solving puzzles with only one solution
- Finding connected components
- Maze generation algorithms 
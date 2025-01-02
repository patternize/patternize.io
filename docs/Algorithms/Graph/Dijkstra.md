---
slug: dijkstra-algorithm
title: Dijkstra's Algorithm
description: Understanding Dijkstra's shortest path algorithm and its implementation
keywords: [dijkstra, shortest path, graph algorithms, weighted graphs]
---

import { GraphDijkstra } from '@patternize/components';

# Dijkstra's Algorithm

:::info
Dijkstra's algorithm finds the shortest path between nodes in a weighted graph, which may represent, for example, road networks.
:::

## Interactive Visualization

Try Dijkstra's algorithm on this interactive graph:

<GraphDijkstra />
<br/>


## How Dijkstra's Algorithm Works

The algorithm maintains a set of unvisited nodes and operates as follows:
1. Initialize distances to all vertices as infinity, except the source (which is zero)
2. Select the unvisited vertex with the smallest distance
3. Calculate distances to all unvisited neighbors
4. Update the neighbor's distance if a shorter path is found
5. Mark the current vertex as visited
6. Repeat until all vertices are visited

## Key Characteristics
- Uses a priority queue for efficiency
- Time Complexity: O((V + E) log V) with binary heap
- Space Complexity: O(V)
- Works only with non-negative weights
- Finds the optimal (shortest) path


## Common Applications
- GPS and Navigation systems
- Network routing protocols
- Social networks
- Flight scheduling
- Games (finding shortest path for NPCs)

:::caution
Dijkstra's algorithm doesn't work with negative edge weights. For graphs with negative weights, use the Bellman-Ford algorithm instead.
::: 
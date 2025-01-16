---
slug: manhattan-distance
title: Manhattan Distance - Optimized Navigation 🏙
description: "The Manhattan Distance Mystery: Finding the Farthest Friends"
keywords: [manhattan distance, geometry, distance, algorithm]
authors: [gazcn007]
tags: [geometry, manhattan distance, algorithm]
---


import { ManhattanDistanceBruteForceStory, ManhattanDistanceOptimizedStory } from '@patternize/components';
import BrowserOnly from '@docusaurus/BrowserOnly';

## Finding the Farthest Friends
Imagine you’re hanging out with six friends in a city with a perfect grid layout, like New York. Each of your friends is standing at different street corners, and you’re all wondering: Which two of us are the farthest apart, according to the Manhattan distance?

If you’re not familiar with it, Manhattan distance is like how a taxi drives in a grid-based city. It’s the sum of the horizontal and vertical distances between two points, not the straight line (diagonal) distance. For example, if your friend is 3 blocks east and 4 blocks north of you, the Manhattan distance is:

> **3 blocks east + 4 blocks north = 7 blocks**

Now, to find out which two friends are the farthest apart, you might think:
“Let’s just have everyone check their distance to everyone else and pick the largest.”

## The Brute-Force Approach: Checking Every Pair

:::info Playground
This is the brute-force approach, which is not efficient.


<BrowserOnly>
{() => (<ManhattanDistanceBruteForceStory />)}
</BrowserOnly>

:::

In our group of six friends, there are 15 unique pairs (since each pair is counted once). That means we’d need to calculate the Manhattan distance for each pair, and then find the largest. If we had 10 friends, there would be 45 pairs. With 100 friends? A whopping 4,950 pairs! - **This approach as having O(n²) runtime complexity.**

## The Trick: Reducing the Problem with Linear Forms

Here's the key insight: The maximum Manhattan distance can be determined by calculating the distances between each point and the four corners of the bounding box (top-left, top-right, bottom-left, bottom-right), then finding the difference between the maximum and minimum distances. This reduces the time complexity from O(n²) to O(n).


:::info Playground


<BrowserOnly>
{() => (<ManhattanDistanceOptimizedStory />)}
</BrowserOnly>

:::

Runtime Analysis:
1.	Compute the values of  x+y ,  x-y ,  -x+y , and  -x-y  for all  n  points:  O(n) 
2.	Find the maximum and minimum for each of the four linear forms:  O(n) 
3.	Compute the differences between the max and min for each form:  O(1) 

Thus, the overall runtime is: **O(n)**

## Real-World Applications

This trick isn't just for finding the farthest friends on a grid. It has some exciting real-world applications:

| Application | Description |
|------------|-------------|
| Urban Planning | City planners use Manhattan distance to model traffic patterns or design delivery routes in grid-based cities. The algorithm helps optimize which delivery points are farthest apart to allocate resources. |
| Cluster Analysis in Data Science | When analyzing data points in a grid-like feature space, Manhattan distance can help determine the spread of data or the maximum separation between clusters. |
| Network Design | In networking, Manhattan distance is used to optimize layouts for computer chips or communication nodes. |
| Game Development | Grid-based games (like chess or strategy games) often use Manhattan distance to calculate movement or range between characters. |
| Robotics and Pathfinding | Robots navigating through grid-like environments, such as warehouses, use Manhattan distance to determine optimal paths. |

### Related Problems

[1131. Maximum of Absolute Value Expression](/docs/QuestionBank/Leetcode/LC1131)

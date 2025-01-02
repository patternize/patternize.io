---
id: MergeIntervals
title: Merge Intervals Pattern
sidebar_label: Merge Intervals
---

## Pattern Description
The Merge Intervals pattern deals with problems involving overlapping intervals. These problems typically require:
1. Sorting intervals by start time
2. Merging overlapping intervals
3. Finding intersections or unions of intervals

## Common Problems

### 1. Merge Overlapping Intervals
```java
public int[][] merge(int[][] intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort by start time
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    
    List<int[]> result = new ArrayList<>();
    int[] currentInterval = intervals[0];
    result.add(currentInterval);
    
    for (int[] interval : intervals) {
        if (interval[0] <= currentInterval[1]) {
            currentInterval[1] = Math.max(currentInterval[1], interval[1]);
        } else {
            currentInterval = interval;
            result.add(currentInterval);
        }
    }
    
    return result.toArray(new int[result.size()][]);
}
```

### 2. Insert Interval
### 3. Interval List Intersections
### 4. Non-overlapping Intervals
### 5. Meeting Rooms

## Common Techniques
1. Sort intervals by start/end time
2. Track previous interval
3. Use min-heap for meeting rooms
4. Merge overlapping intervals
5. Count overlapping intervals 
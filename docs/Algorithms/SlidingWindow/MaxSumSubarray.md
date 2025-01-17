---
id: MaxSumSubarray
title: Maximum Sum Subarray
sidebar_label: Maximum Sum Subarray
description: Learn how to solve the Maximum Sum Subarray problem using the Sliding Window technique. Interactive visualization and step-by-step solution explained.
keywords: [maximum sum subarray, sliding window, kadane's algorithm, algorithm visualization, dynamic programming, array algorithms, coding problems]
---

import { Array, VerticalBarChart, Button } from '@patternize/components';

## Problem
Given an array of integers and a number k, find the maximum sum of a subarray of size k.

## Example
```
Input: [1, 4, 2, 10, 2, 3, 1, 0, 20], k = 4
Output: 24
Explanation: Maximum sum subarray of size 4 is [2, 10, 2, 3]
```

## Solution Approach
1. Calculate sum of first k elements
2. Keep sliding window by one position
3. Remove first element of previous window
4. Add last element of current window
5. Update maximum sum found so far

## Implementation
```java
public static int maxSum(int arr[], int k) {
    if (arr.length < k) return -1;
    
    // Compute sum of first window of size k
    int maxSum = 0;
    for (int i = 0; i < k; i++)
        maxSum += arr[i];
    
    // Compute sums of remaining windows by
    // removing first element of previous
    // window and adding last element of
    // current window.
    int windowSum = maxSum;
    for (int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i-k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

## Time and Space Complexity
- Time Complexity: O(n)
- Space Complexity: O(1)

## Related Problems
1. [Maximum Average Subarray I (LeetCode 643)](https://leetcode.com/problems/maximum-average-subarray-i/)
2. [Subarray Sum Equals K (LeetCode 560)](https://leetcode.com/problems/subarray-sum-equals-k/) 
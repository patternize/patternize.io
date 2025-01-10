---
id: OddEvenSort
title: Odd-Even Sort
sidebar_label: Odd-Even Sort
+head:
+  - tag: link
+    attributes:
+      rel: stylesheet
+      href: /css/sorting.css
+      precedence: high
---

import { Sorting } from '@patternize/components';
import BrowserOnly from '@docusaurus/BrowserOnly';

## Idea
- Also known as Brick Sort
- Compare all (odd,even) indexed pairs of adjacent elements
- If a pair is in the wrong order, switch elements
- Then alternate between (odd,even) and (even,odd) pairs
- Similar to bubble sort but with a different pattern of comparisons

## Visualization

<br/>
<BrowserOnly>
{() => (
  <Sorting
    data={[
    [6,3,8,1,5,2,7,4],     // Initial array
    [6,3,8,1,5,2,7,4],     // Start even phase
    [3,6,1,8,2,5,4,7],     // After even phase swaps
    [3,6,1,8,2,5,4,7],     // Start odd phase
    [3,1,6,2,8,4,5,7],     // After odd phase swaps
    [3,1,6,2,8,4,5,7],     // Start even phase
    [1,3,2,6,4,8,5,7],     // After even phase swaps
    [1,3,2,6,4,8,5,7],     // Start odd phase
    [1,2,3,4,6,5,8,7],     // After odd phase swaps
    [1,2,3,4,6,5,8,7],     // Start even phase
    [1,2,3,4,5,6,7,8],     // After final swaps
    [1,2,3,4,5,6,7,8]      // Final sorted array
    ]}
    steps={[
    'Initial array',
    'Start even phase: Compare (0,1),(2,3),(4,5),(6,7) pairs',
    'After even phase swaps: [3,6,1,8,2,5,4,7]',
    'Start odd phase: Compare (1,2),(3,4),(5,6) pairs',
    'After odd phase swaps: [3,1,6,2,8,4,5,7]',
    'Start even phase: Compare (0,1),(2,3),(4,5),(6,7) pairs',
    'After even phase swaps: [1,3,2,6,4,8,5,7]',
    'Start odd phase: Compare (1,2),(3,4),(5,6) pairs',
    'After odd phase swaps: [1,2,3,4,6,5,8,7]',
    'Start even phase: Compare (0,1),(2,3),(4,5),(6,7) pairs',
    'After final swaps: [1,2,3,4,5,6,7,8]',
    'Final sorted array'
    ]}
  />
)}
</BrowserOnly>

## How It Works

1. The algorithm divides sorting into two phases:
   - Even phase: Compare and swap elements at even indices with their next element
   - Odd phase: Compare and swap elements at odd indices with their next element

2. In each phase:
   - Even phase compares (0,1), (2,3), (4,5), etc.
   - Odd phase compares (1,2), (3,4), (5,6), etc.

3. The phases alternate until no more swaps are needed

## Implementation
```java
public class OddEvenSort {
    public static void sort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        boolean sorted = false;
        int len = arr.length;
        while (!sorted) {
            sorted = true;
            // Even phase: (even,odd) pairs
            for (int i = 0; i < len-1; i += 2) {
                if (arr[i] > arr[i+1]) {
                    swap(arr, i, i+1);
                    sorted = false;
                }
            }
            // Odd phase: (odd,even) pairs
            for (int i = 1; i < len-1; i += 2) {
                if (arr[i] > arr[i+1]) {
                    swap(arr, i, i+1);
                    sorted = false;
                }
            }
        }
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

## Time and Space Analysis
- Time Complexity:
  - Best Case: O(n) when array is already sorted
  - Average Case: O(n²)
  - Worst Case: O(n²)
- Space Complexity: O(1) as it sorts in-place

## Properties
- Stable sorting algorithm
- In-place algorithm
- Parallel implementation possible (all even/odd comparisons can be done simultaneously)
- Similar to bubble sort but with different comparison pattern
- Good for parallel processing as comparisons are independent

## Use Cases
- Parallel processing environments
- When stable sort is required
- When memory space is limited
- When hardware implementation is needed (easier to implement in hardware)

## Advantages Over Bubble Sort
1. Better parallel implementation
2. More cache-friendly in some cases
3. Can be implemented efficiently in hardware
4. All comparisons in a phase are independent

## References
- [Odd Even Sort / Brick Sort - GeeksforGeeks](https://www.geeksforgeeks.org/odd-even-sort-brick-sort/)
- [Parallel Odd-Even Sort Algorithm](https://www.sciencedirect.com/science/article/abs/pii/0167819181900146)

---
id: MergeSort
title: Merge Sort
sidebar_label: Merge Sort
head:
  - tag: link
    attributes:
      rel: stylesheet
      href: /css/sorting.css
      precedence: high
---

import { MergeSortStory } from '@patternize/components';
import BrowserOnly from '@docusaurus/BrowserOnly';

## Idea
- Uses divide and conquer paradigm
- Divides array into two halves, recursively sorts them, then merges
- Stable sorting algorithm that maintains relative order of equal elements
- Guaranteed O(n log n) performance regardless of input data

## Visualization

<br/>
<BrowserOnly>
{() => (<MergeSortStory />)}
</BrowserOnly>

## How It Works

1. **Divide Phase**:
   - Recursively divide the array into two halves
   - Continue dividing until each subarray has one element
   - Single element arrays are considered sorted

2. **Merge Phase**:
   - Merge pairs of sorted subarrays to create larger sorted arrays
   - Compare elements from both arrays and place smaller one first
   - Continue until all elements are merged
   - Use temporary arrays to store intermediate results

3. **Example Process**:
   ```
   Original: [38,27,43,3,9,82,10]
   
   Divide:
   [38,27,43,3] | [9,82,10]
   [38,27] | [43,3] | [9,82] | [10]
   [38] | [27] | [43] | [3] | [9] | [82] | [10]
   
   Merge:
   [27,38] | [3,43] | [9,82] | [10]
   [3,27,38,43] | [9,10,82]
   [3,9,10,27,38,43,82]
   ```

## Implementation
```java
public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            
            // Sort first and second halves
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            
            // Merge the sorted halves
            merge(arr, left, mid, right);
        }
    }
    
    private static void merge(int[] arr, int left, int mid, int right) {
        // Create temporary arrays
        int[] leftArray = new int[mid - left + 1];
        int[] rightArray = new int[right - mid];
        
        // Copy data to temporary arrays
        for (int i = 0; i < leftArray.length; i++) {
            leftArray[i] = arr[left + i];
        }
        for (int i = 0; i < rightArray.length; i++) {
            rightArray[i] = arr[mid + 1 + i];
        }
        
        // Merge the temporary arrays back
        int i = 0, j = 0, k = left;
        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] <= rightArray[j]) {
                arr[k] = leftArray[i];
                i++;
            } else {
                arr[k] = rightArray[j];
                j++;
            }
            k++;
        }
        
        // Copy remaining elements if any
        while (i < leftArray.length) {
            arr[k] = leftArray[i];
            i++;
            k++;
        }
        while (j < rightArray.length) {
            arr[k] = rightArray[j];
            j++;
            k++;
        }
    }
}
```

## Time and Space Analysis
- Time Complexity:
  - Best Case: O(n log n)
  - Average Case: O(n log n)
  - Worst Case: O(n log n)
- Space Complexity: O(n) for temporary arrays

## Properties
- Stable sorting algorithm
- Not in-place (requires extra space)
- Divide and conquer algorithm
- Predictable performance (always O(n log n))
- Parallelizable (different parts can be sorted concurrently)

## Use Cases
- When stable sort is needed
- When predictable performance is required
- External sorting (sorting large files)
- When data is in linked lists (no random access needed)
- Parallel processing environments

## Advantages
1. Stable sorting algorithm
2. Guaranteed O(n log n) performance
3. Parallelizable
4. Works well with linked lists

## Disadvantages
1. Requires O(n) extra space
2. Overkill for small arrays
3. Not cache friendly in basic implementation

## Variants
- Bottom-up merge sort (iterative version)
- Natural merge sort
- Parallel merge sort
- In-place merge sort (complex but possible)

## References
- [Merge Sort - GeeksforGeeks](https://www.geeksforgeeks.org/merge-sort/)
- [External Merge Sort](https://en.wikipedia.org/wiki/External_sorting)


---
id: SelectionSort
title: Selection Sort
sidebar_label: Selection Sort
---

## Idea
The idea is to select the smallest element of remaining array and then swap it to the front.

## Implementation
- scan array, find the minimum element's index min_idx
- swap the element to the index i, then incrememnt i

```java
void selectionSort(int arr[]) {
    int n = arr.length; 

    // One by one move boundary of unsorted subarray 
    for (int i = 0; i < n-1; i++) { 
        // Find the minimum element in the input array 
        int min_idx = i; 
        for (int j = i+1; j < n; j++) 
            if (arr[j] < arr[min_idx]) 
                min_idx = j; 

        // Swap the found minimum element with the ith element
        int temp = arr[min_idx]; 
        arr[min_idx] = arr[i]; 
        arr[i] = temp; 
    }
}
```

## Time and Space Analysis
- Time O(n^2)
- Space O(1)


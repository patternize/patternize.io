---
id: BubbleSort
title: Bubble Sort
sidebar_label: Bubble Sort
head:
  - tag: link
    attributes:
      rel: stylesheet
      href: /css/sorting.css
      precedence: high
---

import { Sorting } from '@patternize/components';
import BrowserOnly from '@docusaurus/BrowserOnly';

## Idea 
- compare each item wth the item next to it, and swap positions if required
- the largest element will be bubbled to the end of the array
- algorithm repeats until we have a pass without swapping any elements

## Visualization
<BrowserOnly>
{() => (
  <Sorting
    data={[
    [5, 1, 4, 2, 8], // Initial array
    [1, 5, 4, 2, 8], // After first comparison and swap
    [1, 4, 5, 2, 8], // After second comparison and swap
    [1, 4, 2, 5, 8], // After third comparison and swap
    [1, 4, 2, 5, 8], // After fourth comparison (no swap)
    [1, 4, 2, 5, 8], // After fifth comparison (no swap)
    [1, 2, 4, 5, 8], // After sixth comparison and swap
    [1, 2, 4, 5, 8], // After seventh comparison (no swap)
    [1, 2, 4, 5, 8], // After eighth comparison (no swap)
    [1, 2, 4, 5, 8], // After ninth comparison (no swap)
    [1, 2, 4, 5, 8] // Final sorted array
    ]}
    steps={[
    'Initial array',
    'Compare 5,1: Swap since 5 > 1',
    'Compare 5,4: Swap since 5 > 4',
    'Compare 5,2: Swap since 5 > 2',
    'Compare 5,8: No swap since 5 < 8 (largest element bubbled to end)',
    'Compare 1,4: No swap since 1 < 4',
    'Compare 4,2: Swap since 4 > 2',
    'Compare 4,5: No swap since 4 < 5',
    'Compare 1,2: No swap since 1 < 2',
    'Compare 2,4: No swap since 2 < 4',
    'Array is now sorted!'
    ]}
  />
)}
</BrowserOnly>

## Implementation
- for every step, move largest element in left unsorted array to the end; in this caes, avoid inner loop to iterate through right sorted subarray
- for every step, swap unordered adjacent pair until no swap is needed 
- note that in one pass, more than one element can be placed into their final positions, so the position after last swap is sorted and do not need to traverse again

```java
void bubbleSort(int arr[]) { 
    int n = arr.length; 
    for (int i = 0; i < n-1; i++) 
        for (int j = 0; j < n-i-1; j++) 
            if (arr[j] > arr[j+1]) { 
                // swap arr[j+1] and arr[i] 
                int temp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp; 
            } 
} 
```

## Time and Space Analysis
- Time O(n^2)
- Space O(1)

## Properties
- the algorithm garantees that the list is sorted
- Turtle and Hare Problem:
    - larger elements at the beginning get swapped to the end quickly, but small elements at the end get swapped very slowly to the beginning
    - this property is good to find k largest elements - use outer loop of bubble sort for k times

## Variants
- [Odd Even Sort / Brick Sort](https://www.geeksforgeeks.org/odd-even-sort-brick-sort/)
- [Cocktail Sort](https://www.geeksforgeeks.org/cocktail-sort/)

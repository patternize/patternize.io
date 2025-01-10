---
id: SelectionSort
title: Selection Sort
sidebar_label: Selection Sort
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
The idea is to select the smallest element of remaining array and then swap it to the front.

## Visualization

<br/>
<BrowserOnly>
{() => (
  <Sorting
    data={[
    [29, 72, 98, 13, 87, 66, 52, 51, 36],     // Initial array
    [13, 72, 98, 29, 87, 66, 52, 51, 36],     // After first swap
    [13, 29, 98, 72, 87, 66, 52, 51, 36],     // After second swap
    [13, 29, 36, 72, 87, 66, 52, 51, 98],     // After third swap
    [13, 29, 36, 51, 87, 66, 52, 72, 98],     // After fourth swap
    [13, 29, 36, 51, 52, 66, 87, 72, 98],     // After fifth swap
    [13, 29, 36, 51, 52, 66, 72, 87, 98]      // Final sorted array
    ]}
    steps={[
    'Initial array',
    'Find minimum (13) and swap with first element',
    'Find minimum in remaining array (29) and swap with second element',
    'Find minimum (36) and swap with third element',
    'Find minimum (51) and swap with fourth element', 
    'Find minimum (52) and swap with fifth element',
    'Array is now sorted'
    ]}
  />
)}
</BrowserOnly>

## Implementation
- scan array, find the minimum element's index min_idx
- swap the element to the index i, then incrememnt i

```java
public class SelectionSort{
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
}
```

## Time and Space Analysis
- Time O(n^2)
- Space O(1)


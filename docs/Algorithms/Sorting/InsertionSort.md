---
id: InsertionSort
title: Insertion Sort
sidebar_label: Insertion Sort
---

import { Array, VerticalBarChart, Button } from '@patternize/components';

## Idea
- The algorithm works similar to sorting playing cards in your hands
- Start from the second element, compare with previous elements and insert it in its correct position
- The array is virtually split into a sorted and unsorted part
- Values from the unsorted part are picked and placed in the correct position in the sorted part

## Visualization

export const InsertionSort = ({ data }) => {
    const [index, setIndex] = React.useState(0);
    const steps = [
        "Initial array: [7,3,5,1,9,4,6,2,8]",
        "Take 3: Compare with 7, shift 7 right, place 3 at start",
        "Take 5: Compare with 7 and 3, place 5 between 3 and 7",
        "Take 1: Compare and shift all larger elements right, place 1 at start",
        "Take 9: Compare with 7, no shift needed as 9 > 7",
        "Take 4: Compare and shift larger elements, place 4 between 3 and 5",
        "Take 6: Compare and shift, place 6 between 5 and 7",
        "Take 2: Compare and shift larger elements, place 2 between 1 and 3",
        "Take 8: Compare and shift, place 8 between 7 and 9"
    ];
    return (
        <div className={'controller'}>
            <Array data={data[index]} />
            <VerticalBarChart data={data[index]} />
            <br/>
            <Button onClick={() => setIndex(index-1)} disabled={index == 0}>
                Previous
            </Button>
            <Button onClick={() => setIndex(index+1)} disabled={index == data.length - 1}>
                Next
            </Button>
            <span style={{marginLeft: '10px'}}>{steps[index]}</span>
        </div>
    )
};

<br/>
<InsertionSort data={[
    [7,3,5,1,9,4,6,2,8],     // Initial array
    [3,7,5,1,9,4,6,2,8],     // After inserting 3
    [3,5,7,1,9,4,6,2,8],     // After inserting 5
    [1,3,5,7,9,4,6,2,8],     // After inserting 1
    [1,3,5,7,9,4,6,2,8],     // After inserting 9 (already in position)
    [1,3,4,5,7,9,6,2,8],     // After inserting 4
    [1,3,4,5,6,7,9,2,8],     // After inserting 6
    [1,2,3,4,5,6,7,9,8],     // After inserting 2
    [1,2,3,4,5,6,7,8,9]      // After inserting 8
]}/>


## Implementation
```java
void insertionSort(int arr[]) {  
    int n = arr.length;
    for (int i = 1; i < n; i++) {  
        int key = arr[i];  
        int j = i - 1;  
        
        // Move elements that are greater than key 
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
}  
```

## Time and Space Analysis
- Time Complexity:
  - Best Case: O(n) when array is already sorted
  - Average Case: O(n²)
  - Worst Case: O(n²) when array is reverse sorted
- Space Complexity: O(1) as it sorts in-place

## Properties
- Stable sorting algorithm
- In-place algorithm
- Adaptive: number of operations reduces if array is already somewhat sorted
- Very efficient for small data sets
- More efficient in practice than bubble sort and selection sort

## Use Cases
- Small data sets
- Nearly sorted arrays
- When stable sort is required
- When memory space is limited
- Online algorithm (can sort as data is being received)

## Variants
- Binary Insertion Sort (uses binary search to find insertion position)
- Shell Sort (extension of insertion sort that allows exchange of items that are far apart)
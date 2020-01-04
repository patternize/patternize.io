---
id: README
title: Introduction to Backtracking
sidebar_label: Introduction to Backtracking
---

import Backtracking from './backtracking.js'

## Backtracking
>"Backtracking can be defined as a general algorithmic technique that considers searching every possible combination in order to solve a computational problem."

<Backtracking width={window.innerWidth > 500 ? window.innerWidth * 0.65: 500} height={700}/>

## Intuitions of A Backtracking Problem
1. The problem is about combinations, combinatorics, and permutation. Usually the problem has multiple possible solutions and it asks you to "list" or "enumerate" all the possible solutions.
2. When you try to come up with an combination of both iteration and recursion. For example, you need to have a loop inside of a recursive function, and the loop's range depends on the function parameters:

```java
void recursiveFunction(int x, int y, int z){
	for(int i = 0; i < y; i++){
		recursiveFunction(x, i, z+1);
	}
}
```

3. When you can prove that the solution needs a runtime of <img src="https://render.githubusercontent.com/render/math?math=O(n!)"/>

## Backtracking Template

```java
class Solution {
    // Declare private data structures:
    private ArrayList<Integer> solutions;
    public List<List<Integer>> permute(int[] nums) {
        // declare private data structures
        solutions = new ArrayList<>();
        // call backtrack
        backtrack(param1, param2);
        // return results
        return this.results;
    }

    private void backtrack(int param1, int param2){
    	// handle base case!
        if(BaseCase qualified){
        	// Add current result to the solution collection
        	solutions.add(param2)
            return;
        }

        for(int i = 0; i< param1; i++){
        	// 1. Handle edge case
            if(count[i] == 0) continue;
            // 2. Prepare a possible solution using some variable
            result.set(level, nums[i]);
            // 3. Remove used variable in step 2
            count[i]--;
            // 4. Call backtrack recursively
            backtrack(param1, param2+1);
            // 5. Add used variable in step 2 and 4 back to the set
            count[i]++;
        }
    }
}
```

## References
- [Geeksforgeeks: Intro to Backtracking](https://www.geeksforgeeks.org/backtracking-introduction/)
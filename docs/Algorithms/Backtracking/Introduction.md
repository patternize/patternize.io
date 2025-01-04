---
id: Introduction
title: Introduction to Backtracking
sidebar_label: Introduction to Backtracking
---

import { TreeChart } from '@patternize/components'
import BrowserOnly from '@docusaurus/BrowserOnly'

Ever faced these intriguing puzzles in your daily life? 🤔
- Cracking the perfect combination for your luggage lock - how many cool patterns could you create? 🔐
- Playing interior designer in your living room - what's the most stylish way to arrange your furniture? 📺
- Here's a fun one: channeling your inner mixologist - what amazing cocktails could you craft from your home bar? 🍹

export const Backtracking = () => {
    const tree = {
        "name": "🥃",
        "children": [{
            "name": "Bourbon",
            "children": [
                { "name": "Mint",
                    "children": [{"name": "Mint Julep"}]
                },
                { "name": "Vermouth",
                    "children": [{
                        "name": "Manhattan"
                    }]
                },
                { "name": "Lime",
                    "children": [{
                        "name": "Cherry",
                        "children": [{
                            "name": "Whiskey Sour"
                        }]
                    }]
                },
                { "name": "Ice Cube",
                    "children": [{
                        "name": "Orange Peel",
                        "children": [{
                            "name": "Old Fashioned"
                        }]
                    }]
                }
            ]},{
            "name": "Vodka",
            "children": [
                { "name": "Tomato",
                    "children": [{
                        "name": "Bloody Mary"
                    }]
                },
                { "name": "Kahlua",
                    "children": [{
                        "name": "Cream",
                        "children": [{
                            "name": "White Russian"
                        }]
                    }]
                },
                { "name": "Cranberry",
                    "children": [{
                        "name": "Grapefruit",
                        "children": [{
                            "name": "Sea Breeze"
                        }, {
                            "name": "Lime",
                            "children": [{"name": "Cosmopolitan"}]
                        }]
                    }]
                }
            ]},{
            "name": "Rum",
            "children": [
                {
                    "name": "Pineapple",
                    "children": [{
                        "name": "Coconut",
                        "children": [{
                            "name": "Pina Colada"
                        }]
                    }]
                },
                {
                    "name": "Lime",
                    "children": [{
                        "name": "Mojito"
                    },{
                        "name": "Cola",
                        "children": [{
                            "name": "Cuba Libre"
                        }]
                    }]
                }
            ]}
        ],
    };
    return <BrowserOnly>
        {() => <TreeChart data={tree}/>}
    </BrowserOnly>
}

<Backtracking />

## Backtracking: The Art of Exploring All Possibilities
>"Backtracking is like being a detective who methodically explores every possible clue to solve a mystery. It's an algorithmic technique that systematically searches through all potential combinations to find the perfect solution."

## How to Spot a Backtracking Problem 🔍
1. **The Combination Challenge**: You're dealing with puzzles involving combinations, permutations, or multiple possible solutions. Think of it like creating different playlists from your favorite songs - there are many valid ways to arrange them!

2. **The Recursive Dance**: Your solution needs both iteration and recursion working together in perfect harmony. Like a nested loop within a recursive function, where each iteration opens up new possibilities:

```
void someRecursiveFunction(int x, int y){
    /* do something... */
    for(int i = 0; i < y; i++){
        /* do something in the for loop... */
        // call someRecursiveFunction with updated parameters
        someRecursiveFunction(x, y+i);
    }
    /* do something else... */
}
```

3. **The Base Case**: You need to identify the point where you've found a valid solution. This is where you'll stop the recursion and return the result.

:::info
The runtime of backtracking is O(n!)
:::

<details>
<summary>Click to see example code</summary>
Yes, this is a backtracking problem!

```java
class Solution {
    /* Declare private data structures: */
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

</details>
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  Algorithms: [
    {
      type: "category",
      label: "Sorting",
      collapsed: false,
      items: [
        "Algorithms/Sorting/BubbleSort",
        "Algorithms/Sorting/SelectionSort",
        "Algorithms/Sorting/InsertionSort",
        "Algorithms/Sorting/OddEvenSort", 
        "Algorithms/Sorting/MergeSort",
      ]
    },
    {
      type: "category",
      label: "Backtracking",
      collapsed: false,
      items: [
        "Algorithms/Backtracking/Introduction",
        {
          type: "category",
          label: "Permutation",
          items: ["Algorithms/Backtracking/Permutation/Permutation"]
        },
        "Algorithms/Backtracking/ExpressionPuzzle",
        "Algorithms/Backtracking/ConfusingNumber"
      ]
    },
    {
      type: "category",
      label: "Graph",
      collapsed: false,
      items: ["Algorithms/Graph/BFS", "Algorithms/Graph/DFS", "Algorithms/Graph/Dijkstra"]
    },{
      type: "category", 
      label: "Industry Applications",
      collapsed: false,
      items: ["Algorithms/ReactFiber/index"]
    },
  ],
  "Data Structure": [
    {
      type: "category",
      label: "Basics",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Binary Tree",
          items: [
            "DataStructures/Basic/BinaryTree/Definitions&&Properties",
            "DataStructures/Basic/BinaryTree/BSTTraversals",
            "DataStructures/Basic/BinaryTree/BSTOperations",
            {
              type: "category",
              label: "Common Problems",
              items: [
                "QuestionBank/Leetcode/LC98",
                "QuestionBank/Leetcode/LC101",
                "QuestionBank/Leetcode/LC103",
                "QuestionBank/Leetcode/LC108",
                "QuestionBank/Leetcode/LC199",
                "QuestionBank/Leetcode/LC236"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Linked List",
          items: [
            "DataStructures/Basic/LinkedList/Introduction",
            "DataStructures/Basic/LinkedList/Insertion",
            "DataStructures/Basic/LinkedList/Deletion"
          ]
        }
      ]
    },
    {
      collapsed: false,
      type: "category",
      label: "Advanced",
      items: ["DataStructures/Advanced/VList"]
    }
  ],
  Language: [
    {
      type: "category",
      label: "Java Data Structure",
      items: [
        "Language/Java/Overview",
        {
          type: "category",
          label: "List",
          items: [
            "Language/Java/List/Interface",
            "Language/Java/List/ArrayList",
            "Language/Java/List/LinkedList",
            "Language/Java/List/Stack",
            "Language/Java/List/Runtime"
          ]
        },
        {
          type: "category",
          label: "Set",
          items: [
            "Language/Java/Set/Interface",
            "Language/Java/Set/HashSet",
            "Language/Java/Set/Runtime"
          ]
        },
        {
          type: "category",
          label: "Queue/Dequeue",
          items: [
            "Language/Java/Queue/Interface",
            "Language/Java/List/LinkedList",
            "Language/Java/Queue/PriorityQueue",
            "Language/Java/Queue/Runtime"
          ]
        },
        {
          type: "category",
          label: "Map",
          items: [
            "Language/Java/Map/Interface",
            "Language/Java/Map/HashMap",
            "Language/Java/Map/HashTable",
            "Language/Java/Map/TreeMap",
            "Language/Java/Map/LinkedHashMap",
            "Language/Java/Map/Runtime"
          ]
        }
      ]
    }
  ],
  Patterns: [
    {
      type: "category",
      label: "Dynamic Programming",
      items: [
        {
          type: "category",
          label: "Coordinate Based",
          items: [
            "Patterns/DynamicProgramming/Coordinate/intro",
            "Patterns/DynamicProgramming/Coordinate/Array/index",
            "Patterns/DynamicProgramming/Coordinate/Matrix/index",
            "Patterns/DynamicProgramming/Coordinate/OptimalPathFinding/index"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Sliding Window",
      items: [
        "Patterns/SlidingWindow/Introduction",
        "Patterns/SlidingWindow/MaxSumSubarray"
      ]
    },
    {
      type: "category",
      label: "Interval",
      items: [
        "Patterns/Interval/Introduction",
        "Patterns/Interval/MergeIntervals"
      ]
    },
    {
      type: "category",
      label: "Bit Manipulation",
      items: ["Patterns/BitManipulation/Introduction"]
    }
  ],
};

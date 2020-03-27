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
      items: [
        "Algorithms/Sorting/BubbleSort",
        "Algorithms/Sorting/OddEvenSort",
        "Algorithms/Sorting/SelectionSort",
        "Algorithms/Sorting/InsertionSort",
        "Algorithms/Sorting/MergeSort"
      ]
    }
  ],
  "Data Structure": [
    {
      type: "category",
      label: "Basic",
      items: [
        {
          type: "category",
          label: "Binary Tree",
          items: ["QuestionBank/Leetcode/LC103"]
        }
      ]
    },
    {
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
        "Language/Java/README",
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
      label: "Backtracking",
      items: [
        "Patterns/Backtracking/README",
        {
          type: "category",
          label: "Permutation",
          items: ["Patterns/Backtracking/Permutation/Permutation"]
        },
        "Patterns/Backtracking/ExpressionPuzzle"
      ]
    },
    {
      type: "category",
      label: "Bit Manipulation",
      items: ["Patterns/BitManipulation/README"]
    },
    {
      type: "category",
      label: "Graph",
      items: ["QuestionBank/Leetcode/LC310"]
    }
  ]
};

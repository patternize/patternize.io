---
id: Introduction
title: Linked List
sidebar_label: Introduction
---

# Linked List

## What is a Linked List?
A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked list elements are not stored in contiguous memory locations.

## Basic Structure
```java
class ListNode {
    int val;
    ListNode next;
    
    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}
```

## Types of Linked Lists
1. **Singly Linked List**: Each node points to the next node
2. **Doubly Linked List**: Each node has pointers to both next and previous nodes
3. **Circular Linked List**: Last node points back to the first node

## Time Complexity
| Operation | Time Complexity |
|-----------|----------------|
| Access    | O(n)          |
| Search    | O(n)          |
| Insertion | O(1)*         |
| Deletion  | O(1)*         |

\* When position is known, otherwise O(n) to find position

## Space Complexity
- O(n) where n is the number of nodes

## Advantages
1. Dynamic size
2. Efficient insertion/deletion at beginning
3. No memory wastage
4. Implementation of other data structures (stacks, queues)

## Disadvantages
1. No random access
2. Extra memory for pointers
3. Not cache friendly
4. No reverse traversal (in singly linked list)

## Real-world Applications
1. Implementation of file systems
2. Previous/Next page in web browsers
3. Music playlist management
4. Undo/Redo operations in software
5. Symbol table management in compiler design

## Common Interview Problems
1. Reverse a linked list
2. Detect cycle in a linked list
3. Find middle element
4. Merge two sorted lists
5. Remove nth node from end

## Common Techniques
1. Two-pointer technique
2. Floyd's cycle finding algorithm
3. Dummy head node
4. Runner technique
5. Recursive solutions

## References
- [GeeksforGeeks - Linked List Data Structure](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [LeetCode Linked List Problems](https://leetcode.com/tag/linked-list/) 
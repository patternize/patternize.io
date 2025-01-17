---
id: Deletion
title: How to Delete Elements from a Linked List
sidebar_label: Deletion Operations
description: Learn different methods to delete nodes from a linked list including head deletion, tail deletion, and deletion by value. Includes time complexity analysis and code examples.
keywords: [linked list deletion, delete node linked list, remove elements linked list, linked list operations, data structures, java linked list, head deletion, tail deletion]
---

import { LLRemoveOperation } from '@patternize/components';
import BrowserOnly from '@docusaurus/BrowserOnly';

# Linked List Deletion

## Visualization
Watch how elements are removed from a linked list:


<BrowserOnly>
    {() => <LLRemoveOperation />}
</BrowserOnly>


## Types of Deletion

### 1. Delete from Head
- Time Complexity: O(1)
- Most efficient deletion operation
```java
public void deleteHead() {
    if (head != null) {
        head = head.next;
    }
}
```

### 2. Delete from Tail
- Time Complexity: O(n)
- Requires traversal to second-last node
```java
public void deleteTail() {
    if (head == null || head.next == null) {
        head = null;
        return;
    }
    
    ListNode current = head;
    while (current.next.next != null) {
        current = current.next;
    }
    current.next = null;
}
```

### 3. Delete by Value
- Time Complexity: O(n)
- Requires traversal to find value
```java
public void deleteValue(int val) {
    if (head == null) return;
    
    if (head.val == val) {
        head = head.next;
        return;
    }
    
    ListNode current = head;
    while (current.next != null && current.next.val != val) {
        current = current.next;
    }
    
    if (current.next != null) {
        current.next = current.next.next;
    }
}
```

## Common Deletion Patterns
1. Using dummy head node
2. Two-pointer technique
3. Handle edge cases (empty list, single node)
4. Recursive deletion 
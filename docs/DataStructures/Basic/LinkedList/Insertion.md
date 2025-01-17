---
id: Insertion
title: Linked List Insertion
sidebar_label: Insertion Operations
description: Learn how to insert elements into a linked list with detailed explanations of head insertion, tail insertion, and position-based insertion. Includes time complexity analysis and code examples.
keywords: [linked list insertion, linked list operations, data structures, insert at head, insert at tail, insert at position, time complexity, java implementation]
---

import { LLInsertOperation } from '@patternize/components';
import BrowserOnly from '@docusaurus/BrowserOnly';

# Linked List Insertion

## Visualization
Watch how elements are inserted into a linked list:

<BrowserOnly>
    {() => <LLInsertOperation />}
</BrowserOnly>

## Types of Insertion

### 1. Insert at Head
- Time Complexity: O(1)
- Most efficient insertion operation
```java
public void insertAtHead(int val) {
    ListNode newNode = new ListNode(val);
    newNode.next = head;
    head = newNode;
}
```

### 2. Insert at Tail
- Time Complexity: O(n)
- Requires traversal to end
```java
public void insertAtTail(int val) {
    ListNode newNode = new ListNode(val);
    if (head == null) {
        head = newNode;
        return;
    }
    
    ListNode current = head;
    while (current.next != null) {
        current = current.next;
    }
    current.next = newNode;
}
```

### 3. Insert at Position
- Time Complexity: O(n)
- Requires traversal to position
```java
public void insertAtPosition(int val, int position) {
    if (position == 0) {
        insertAtHead(val);
        return;
    }
    
    ListNode newNode = new ListNode(val);
    ListNode current = head;
    for (int i = 0; i < position - 1 && current != null; i++) {
        current = current.next;
    }
    
    if (current == null) return;
    
    newNode.next = current.next;
    current.next = newNode;
}
```

## Common Insertion Patterns
1. Using dummy head node
2. Maintaining tail pointer
3. Two-pointer technique for position finding
4. Recursive insertion 
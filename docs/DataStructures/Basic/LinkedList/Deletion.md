---
id: Deletion
title: Linked List Deletion
sidebar_label: Deletion Operations
---

import { LLRemoveOperation } from '@patternize/components';

# Linked List Deletion

## Visualization
Watch how elements are removed from a linked list:

<LLRemoveOperation />

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
---
id: BTree
title: B Tree
sidebar_label: B Tree
head:
  - tag: link
    attributes:
      rel: stylesheet
      href: /css/sorting.css
      precedence: high
---

import { BTreeInsertion, BTreeDeletion } from '@patternize/components';
import BrowserOnly from '@docusaurus/BrowserOnly';

# B+ Tree

## Overview
A B+ tree is a self-balancing tree data structure that maintains sorted data and allows for efficient insertion, deletion, and search operations. Unlike regular B-trees, B+ trees store all data in leaf nodes, with internal nodes only storing keys for navigation.

## Properties
- All leaves are at the same level
- Nodes are at least half full
- Data is stored only in leaf nodes
- Leaf nodes are linked for efficient range queries
- Height remains balanced automatically

## Insertion Process
Watch how elements are inserted into a B+ tree:

<BrowserOnly>
{() => <BTreeInsertion />}
</BrowserOnly>

### Insertion Steps
1. Find the appropriate leaf node
2. If leaf has space, insert the key
3. If leaf is full:
   - Split the node
   - Create new internal node if needed
   - Redistribute keys
4. Update parent nodes as needed

## Deletion Process
Watch how elements are deleted from a B+ tree:

<BrowserOnly>
{() => <BTreeDeletion />}
</BrowserOnly>

### Deletion Steps
1. Find the leaf node containing the key
2. Remove the key
3. If node becomes underfull:
   - Try borrowing from siblings
   - Merge with sibling if borrowing not possible
4. Update parent nodes and possibly reduce tree height

## Time Complexity
| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| Search    | O(log n)     | O(log n)   |
| Insert    | O(log n)     | O(log n)   |
| Delete    | O(log n)     | O(log n)   |

## Space Complexity
- O(n) where n is the number of keys

## Use Cases
1. Database indexing
2. File systems
3. Multilevel indexing
4. Range queries
5. Sequential access optimization

## Advantages
1. Balanced height ensures consistent performance
2. Efficient range queries via leaf node links
3. High fanout reduces tree height
4. Good for disk-based storage systems

## Disadvantages
1. Complex implementation
2. Extra space overhead
3. Rebalancing operations can be costly

## Implementation Example
```java
class BPlusTreeNode {
    boolean isLeaf;
    List<Integer> keys;
    List<BPlusTreeNode> children;
    BPlusTreeNode next;  // For leaf node linking
    
    public BPlusTreeNode(boolean leaf) {
        this.isLeaf = leaf;
        this.keys = new ArrayList<>();
        this.children = new ArrayList<>();
        this.next = null;
    }
}

class BPlusTree {
    private BPlusTreeNode root;
    private int t;  // Minimum degree
    
    public BPlusTree(int t) {
        this.root = new BPlusTreeNode(true);
        this.t = t;
    }
    
    public void insert(int key) {
        // Implementation details...
    }
    
    public void delete(int key) {
        // Implementation details...
    }
}
```

## References
- [Database Management Systems (3rd Edition)](https://www.amazon.com/Database-Management-Systems-Raghu-Ramakrishnan/dp/0072465638)
- [Introduction to Algorithms (CLRS)](https://mitpress.mit.edu/books/introduction-algorithms-fourth-edition) 
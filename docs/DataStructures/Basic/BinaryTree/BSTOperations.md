---
id: BSTOperations
title: Basic Operations
sidebar_label: Basic Operations
---

### Insertion
To insert a value into a binary search tree, we must follow the BST invariant. Namely, that *the value of the left child must always be smaller than the value of the parent, and the value of the right child must always be greater than the value of the parent*. Hence, we must always compare the value we want to insert against the value of the current node. 

We begin at the root node. If we find the root node to be null, then we know that we have exhausted the tree, or that the tree is empty, and we can simply assign the value we want to insert to the to root node. If the value we want to insert is greater than the value of the root node, we move on to the right child of the root node. If the value we want to insert is smaller than the value of the root node, we move on to the left child of the root node. After we arrive at the next node, we repeat the aforementioned steps, in which we check whether the node is null or empty, whether the value we want to insert is greater or lesser than the value of the current node, so on and so forth. 

Therefore, at any point during a BST insertion operation, we can expect one of three situations: 
1. The value of current node is null, at which point we have exhausted the tree. In this situation, we can simply assign the value we want to insert onto the current node.
2. The value of the current node is lesser than the value we want to insert, at which point we move on to the right child of the current node.
3. The value of the current node is greater than the value we want to insert, at which point we move on to the left child of the current node. 


---
id: BSTOperations
title: Basic Operations
sidebar_label: Basic Operations
---

### Lookup
There are two ways to conduct a lookup operation in a binary search tree. The first is known as the "brute force" method, while the second is known as the "binary search" method. As I will explain, the binary search method is much more efficient than the brute force method. 

#### Brute Force 
To conduct a lookup operation in a binary search tree using the brute force method, we must traverse both sides of the tree, and return the subtree with the root node that contains the matching value. In the worst case, we will have to traverse the entire tree before we find the node which contains the value we are looking for, making the time complexity of this method O(n).

```javascript
// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const lookup = (node, target) => {
    if (node === null) return null
    if (node.value === target) return node;
    return lookup(node.left, target) || lookup(node.right, target);
}
```

#### Binary Search
To conduct a lookup operation in a binary search tree using the binary search method, we will only have to traverse one side of the current node for every iteration. The availability of this leverage results from the fact that a binary search tree is already sorted. The value of the left child in a binary search tree will always be smaller than the value of the parent, while the value of the right child will always be greater than the value of the parent. Therefore, if the value we are looking for is greater than the value of the current node, then we can know for a fact that the node we are looking for cannot be on the left side of the current node. In this way, we only have to check half of the current subtree each time. This makes the time complexity of the binary search method O(logn). 

```javascript
// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const lookup = (node, target) => {
    if (node === null) return null; //return null when we have exhausted the binary search tree and have not found a node with the target value.
    if (node.value === target) {
        return node;
    } else if (node.value < target) {
        return lookup(node.right, target);
    } else if (node.value > target) {
        return lookup(node.left, target);
    }
}
```

### Insertion
To insert a value into a binary search tree, we must follow the BST invariant. Namely, that *the value of the left child must always be smaller than the value of the parent, and the value of the right child must always be greater than the value of the parent*. Hence, we must always compare the value we want to insert against the value of the current node. 

We begin at the root node. If we find the root node to be null, then we know that we have exhausted the tree, or that the tree is empty, and we can simply assign the value we want to insert to the to root node. If the value we want to insert is greater than the value of the root node, we move on to the right child of the root node. If the value we want to insert is smaller than the value of the root node, we move on to the left child of the root node. After we arrive at the next node, we repeat the aforementioned steps, in which we check whether the node is null or empty, whether the value we want to insert is greater or lesser than the value of the current node, so on and so forth. 

Therefore, at any point during a BST insertion operation, we can expect one of three situations: 
1. The value of current node is null, at which point we have exhausted the tree. In this situation, we can simply assign the value we want to insert onto the current node.
2. The value of the current node is lesser than the value we want to insert, at which point we move on to the right child of the current node.
3. The value of the current node is greater than the value we want to insert, at which point we move on to the left child of the current node. 

```javascript
// definition for a binary tree node
// function TreeNode(value, left, right) {
//     this.value = value === undefined ? 0 : value;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

const insertion = (node, target) => {
    if (node === null) return new TreeNode(target); //situation #1
    if (node.value < target) { //situation #2
        node.right = insertion(node.right, target);
    } else if (node.value > target) { // situation # 3
        node.left = insertion(node.left, target);
    }

    return node;
}
```
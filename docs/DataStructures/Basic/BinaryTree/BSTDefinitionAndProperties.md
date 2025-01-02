--- 
id: Definitions&&Properties
title: Definition and Properties
sidebar_label: Definition and Properties
---

import { Tree } from '@patternize/components'

A binary tree is a hierarchical data structure that belongs to the family of *m*-ary trees, where each node can have an arbitrary number of children. Similar to other *m*-ary trees, binary trees are commonly implemented using a linked list structure. Each node in a binary tree consists of a value and two pointers, which reference the node's left and right children respectively.

To illustrate this concept, consider the following binary tree structure:

export const BinaryTree = () => {
    const tree = {
        name: '1',
        children: [
            {
                name: '2',
                children: [
                    {
                        name: '3'
                    },
                    {
                        name: '4'
                    }
                ]
            },
            {
                name: '2', 
                children: [
                    {
                        name: '4'
                    },
                    {
                        name: '3'
                    }
                ]
            }
        ]
    }
    return <>{typeof window !== 'undefined' &&  <Tree inputData={tree} maxHeight={250}/>}</>
}

<BinaryTree />
<br/>

:::info
The fundamental structure of a binary tree node can be implemented as follows:

```java
class TreeNode {
    int value;
    TreeNode left;
    TreeNode right;
}
```

:::

### Binary Search Tree
A Binary Search Tree (BST) is a special type of binary tree that maintains a specific ordering property: for any given node, all nodes in its left subtree must have values less than the node's value, and all nodes in its right subtree must have values greater than the node's value. This ordering property makes BSTs particularly efficient for operations like searching, insertion, and deletion, typically achieving O(log n) time complexity in balanced cases.

For example, in a valid BST:
- If a node has value 8, all nodes in its left subtree must be < 8
- If a node has value 8, all nodes in its right subtree must be > 8
- This property must recursively hold true for every node in the tree


export const BSTExample = () => {
    const tree = {
        name: '8',
        children: [
            {
                name: '3',
                children: [
                    {
                        name: '1'
                    },
                    {
                        name: '6'
                    }
                ]
            },
            {
                name: '10',
                children: [
                    {
                        name: '9'
                    },
                    {
                        name: '14'
                    }
                ]
            }
        ]
    }
    return <>{typeof window !== 'undefined' &&  <Tree inputData={tree} maxHeight={250}/>}</>
}

<BSTExample />

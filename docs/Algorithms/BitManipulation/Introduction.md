---
slug: bit-manipulation
title: Bit Manipulation Operations and Tricks
description: Learn essential bit manipulation operations and common tricks in programming. Includes detailed explanations of bitwise operators, examples, and practical applications.
keywords: [bit manipulation, bitwise operators, bit operations, bit tricks, programming, binary operations, AND, OR, XOR, bit shifting]
tags: ['BitManipulation', 'BinaryOperations', 'Programming']
---

# Common Bit Manipulation Operations

## Basic Operations

| Operation | Symbol | Description | Example |
|-----------|---------|------------|---------|
| AND | & | Returns 1 only if both bits are 1 | `5 & 3 = 1` (0101 & 0011 = 0001) |
| OR | \| | Returns 1 if either bit is 1 | `5 | 3 = 7` (0101 \| 0011 = 0111) |
| XOR | ^ | Returns 1 if bits are different | `5 ^ 3 = 6` (0101 ^ 0011 = 0110) |
| NOT | ~ | Inverts all bits | `~5 = -6` (Inverts 0101 to 1010) |
| Left Shift | << | Shifts bits left by b positions | `5 << 1 = 10` (0101 -> 1010) |
| Right Shift | >> | Shifts bits right by b positions | `5 >> 1 = 2` (0101 -> 0010) |

## Common Bit Manipulation Tricks

### Check if Power of 2
- `n & (n-1) == 0` checks if n is a power of 2
- Works because powers of 2 have exactly one 1 bit
- Example: `8 & 7 = 0` (1000 & 0111 = 0000)

### Get Last Set Bit
- `n & -n` isolates the rightmost 1 bit
- Example: `12 & -12 = 4` (1100 & 0100 = 0100)

### Clear Lowest Set Bit
- `n & (n-1)` clears the rightmost 1 bit
- Example: `12 & 11 = 8` (1100 & 1011 = 1000)

### Count Set Bits
- `n & (n-1)` clears the rightmost 1 bit
- Example: `12 & 11 = 8` (1100 & 1011 = 1000)

### Check if Number is Negative
- `n < 0` checks if the number is negative
- Example: `-1 < 0` (True)

### Swap Two Numbers
- `a ^= b; b ^= a; a ^= b;` swaps two numbers without using a temporary variable
- Example: `a = 5, b = 3` -> `a = 3, b = 5`

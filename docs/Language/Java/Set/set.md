---
id: set
title: Set
sidebar_label: Set
---

## Add
- Add default values

```java
String str = "STRING";
Set<Character> set = new HashSet<>(Arrays.asList(str.toCharArray()));
```
- `addAll()`

```java
String str = "STRING";
Set<Character> set = new HashSet<>();
set.addAll(Arrays.asList(str.toCharArray()))
```

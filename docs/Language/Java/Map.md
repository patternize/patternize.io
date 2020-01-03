---
id: map
title: Map
sidebar_label: Map
---

## Put
- Returns previous value in the Key associated:

```
HashMap hm = new HashMap();
System.out.println(hm.put(1, 1)); // returns Null
System.out.println(hm.put(1, 2)); // 1
System.out.println(hm.put(1, 3)); // 2
```

## Remove
- HashMap remove can uses key as a parameter:
```java
map.remove(c); // c is key
```
#### *Pitfall - ConcurrentModificationException*

```java
for(int num : nums){
    ctr.put(num, ctr.getOrDefault(num, 0) + 1);
    if(ctr.size() > k){
        for(int key : ctr.keySet()){
            if(ctr.get(key) == 1){
                ctr.remove(key);
            } else ctr.put(key, ctr.get(key) -1);
        }
    }
}
```

## Iterate Through Values
- use for loop — use `values()` to iterate through values in a HashMap:

```java
HashMap<Integer, Integer> count = new HashMap<>();
for (int i : count.values())
    res = Math.max(res, i);
return res;
```

- use `Map.Entry<K, V> entry: map.entrySet()` to iterate through both values and keys:

```java
for(Map.Entry<Character, Integer> entry: hm.entrySet()){
  entry.getKey();
  entry.getValue();
}
```

## TreeMap vs HashMap
- TreeMap are naturally sorted by order of key, HashMap is not:

```
TreeMap<Integer, Integer> tm = new TreeMap<>();
tm.put(3, 1);
tm.put(2, 2);
tm.put(1, 10);
tm.put(-100, 2);
tm.values(); //[2, 10, 2, 1]

HashMap<Integer, Integer> hm = new HashMap<>();
hm.put(3, 1);
hm.put(2, 2);
hm.put(1, 10);
hm.put(-100, 2);
hm.values(); // [10, 2, 1, 2]
```

## Runtime Summary

Map |put |   get    | containsKey |   next   | Data Structure
------------|----------|----------|-------------|----------|-------------------------
HashMap | O(1) ~ O(n)| O(1)     |   O(1)      | O(h / n) | Hash Table
LinkedHashMap | O(1) ~O(n) | O(1)     |   O(1)      | O(1)     | Hash Table + Linked List
IdentityHashMap | O(1) ~O(n) | O(1)     |   O(1)      | O(h / n) | Array
WeakHashMap | O(1) ~O(n) | O(1)     |   O(1)      | O(h / n) | Hash Table
EnumMap    | O(1) ~O(n)  | O(1)     |   O(1)      | O(1)     | Array
TreeMap    | O(log n)   | O(log n) |   O(log n)  | O(log n) | Red-black tree
ConcurrentHashMap| O(1) ~O(n)  | O(1)     |   O(1)      | O(h / n) | Hash Tables
ConcurrentSkipListMap | O(1) ~O(n) | O(log n) |   O(log n)  | O(1)     | Skip List

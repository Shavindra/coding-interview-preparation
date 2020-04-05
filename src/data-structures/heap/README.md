# Heap (data-structure)

In computer science, a **heap** is a specialized tree-based 
data structure that satisfies the heap property described
below.

In a *min heap*, if `P` is a parent node of `C`, then the
key (the value) of `P` is less than or equal to the
key of `C`.

![MinHeap](https://upload.wikimedia.org/wikipedia/commons/6/69/Min-heap.png)

In a *max heap*, the key of `P` is greater than or equal
to the key of `C`

![Heap](https://upload.wikimedia.org/wikipedia/commons/3/38/Max-Heap.svg)

The node at the "top" of the heap with no parents is 
called the root node.


**Pros**
- This structure allows for efficient insertion or deletion of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or deletion of nodes at arbitrary positions. 

In arrays when insertion/deletions happens then other elements have to shifted

**Cons**
- A drawback of linked lists is that access time is linear (and difficult to pipeline). 
- Elements are not indexed. Therefore faster access, such as random access, is not feasible. 
- Extra memory space for a pointer is required with each element of the list.

## Coding challenges
Leetcode: https://leetcode.com/tag/heap/

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Heap_(data_structure))
- [YouTube](https://www.youtube.com/watch?v=t0Cq6tVNRBA&index=5&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
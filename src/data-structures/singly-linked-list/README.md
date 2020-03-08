# Singly linked list
A linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. 

**Pros**
- This structure allows for efficient insertion or deletion of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or deletion of nodes at arbitrary positions. 

In arrays when insertion/deletions happens then other elements have to shifted

**Cons**
- A drawback of linked lists is that access time is linear (and difficult to pipeline). 
- Elements are not indexed. Therefore faster access, such as random access, is not feasible. 
- Extra memory space for a pointer is required with each element of the list.

Arrays have better cache locality compared to linked lists.

## Coding challenges
Leetcode: https://leetcode.com/tag/linked-list/
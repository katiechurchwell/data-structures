# Demystifying Data Structures Notes by Brook Riggio, 2022 CascadiaJS

## Intro

![abstraction layers](./images/abstraction-layers.jpg)

- Everytime you create an object, you introduce a layer of abstraction.
- You can swap out any layer.
- Hiding details below, usage API looking up

![computational cycle](./images/cycle.jpg)

> Computational thinking - formulating a problem and expressing it's solution. Process.

- modeling a problem : finding the right details to focus on.
- Computing is instructions and data > processed > result

- Abstractions map to specific problems > make it simpler

## Abstract Data Structures

- Array
- Linked List
- Stack
- Queue
- Tree
- Binary Tree
  - K-Ary Tree
  - Graph

## Data

- RAM
  - addressable memory, like a spreadsheet; columns & rows.
  - use additional memory for pointers. Linked list.
  - each cell is a node.

## Linked List

- single linked list you know next but not previous (doubley for both)
- value and next
- a collection of nodes where each node holds a value and a pointer to the next node.
- use cases: version history, carousel/slideshow, API pagination, blockchains
- Traversed the list, traversal.
- primary operations: add, traverse, size.

side note: while is preferable over a for loop when length is unknown.

O notation:

- O of 1 = constant time; don't need to know the length
- 0(n) search

## Stack

- Last in, first out. Pushing and popping one value at a time.
- examples: browser history, backtracking apps, undo/redo,
- A stack is a collection of nodes where each node holds a value accessible in LIFO order.

## Queue

- FIFO
- JavaScript is event driven programming
- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- Messaging services:
  - Amazon SQS
  - RabbitMQ
- A queue is a collection of nodes where each node holds a value accessible in FIFO order.
- O(1) enqueue and dequeue
- Cannot traverse, no random access.
- Priority queue - assign priority to nodes.

## Array

- ammortizes cost with add, memory offsets.
- proportionally allocate more RAM room.
- JavaScript uses dynamic arrays.
- buffer overflow attack. punch through at the end of array and inject code.
- sortable.
- a collection of values indexed from an initial point in memory individually accessible at an offset.
- sequential access (for-loop), efficient.
- Reserves memory as it grows: 0(2n) space.
  - a linked list would be 0(1) for inserting in the middle
- merge sort, quick sort and insert sort.
- binary search algorithm

## Binary Tree

- analogies: reverse polish notation, dichotomous key, branching river.
- examples: AI/ML decision tree, huffman coding (.jpeg compression), etc.
- "binary search tree" and "B trees" are different than a binary tree.
- traversing: breadth or width first.
- full, perfect, complete; root, branch, leaf, height.
- strengths: O(log n) search, elegant recursion, simplicity of interface

## Hash Maps
- hashing (used bcrypt in past)
- key values
- analogies: dictionary, GPS coordinates, upc codes, license plates, ssn
- objects in objects
- A collection of values labeled with infinite key possibilities stored in a finite amount of memory.
- o(1) time

## Further Research
- Gayle Laakmann McDowell videos
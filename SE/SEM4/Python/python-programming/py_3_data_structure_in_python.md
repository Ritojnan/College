---
sidebar_position: 3
---

# 3.Data Structures in Python

Data structures are fundamental to computer science, providing efficient ways to organize and manipulate data. In Python, various built-in data structures are available. Let's explore some of them.

## 3.1 Linked List

A linked list is a linear collection of elements where each element points to the next one in the sequence.

### Singly Linked List

```python
# Singly Linked List Example
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next_node = None

# Creating Nodes
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)

# Linking Nodes
node1.next_node = node2
node2.next_node = node3
```

### Doubly Linked List

```python
# Doubly Linked List Example
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next_node = None
        self.prev_node = None

# Creating Nodes
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)

# Linking Nodes
node1.next_node = node2
node2.prev_node = node1
node2.next_node = node3
node3.prev_node = node2
```

## Stack

A stack is a Last-In-First-Out (LIFO) data structure.

```python
# Stack Example
stack = []

# Pushing elements onto the stack
stack.append(1)
stack.append(2)
stack.append(3)

# Popping elements from the stack
popped_element = stack.pop()
```

## Queue

A queue is a First-In-First-Out (FIFO) data structure.

```python
# Queue Example
from collections import deque

queue = deque()

# Enqueuing elements
queue.append(1)
queue.append(2)
queue.append(3)

# Dequeuing elements
dequeued_element = queue.popleft()
```

## Deque

A deque (double-ended queue) allows insertion and deletion at both ends.

```python
# Deque Example
from collections import deque

deque_data = deque([1, 2, 3])

# Adding elements at the right
deque_data.append(4)

# Removing elements from the left
removed_element = deque_data.popleft()

# Adding elements at the left
deque_data.appendleft(0)

# Removing elements from the right
removed_element_right = deque_data.pop()
```
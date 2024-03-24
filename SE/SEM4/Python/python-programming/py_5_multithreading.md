---
sidebar_position: 5
---

# 5.Multithreading in Python

Multithreading is a powerful concept that allows the execution of multiple threads concurrently. In this section, we'll explore the basics of multithreading, including threads and processes, starting a thread, using the threading module, synchronizing threads, and creating a multithreaded priority queue.

## 5. Multithreading Basics

### 5.1 Thread and Process

A thread is the smallest unit of execution, and a process is an independent program that consists of one or more threads.

### Starting a Thread

Creating and starting a thread in Python is done using the `threading` module.

```python
# Starting a Thread Example
import threading

def my_function():
    print("Hello from a thread!")

# Create a thread
my_thread = threading.Thread(target=my_function)

# Start the thread
my_thread.start()

# Wait for the thread to finish (optional)
my_thread.join()
```

### 5.2 Threading Module

The `threading` module provides tools for working with threads, including thread creation, synchronization, and more.

```python
# Threading Module Example
import threading

def print_numbers():
    for i in range(5):
        print(i)

def print_letters():
    for letter in 'ABCDE':
        print(letter)

# Create two threads
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

# Start the threads
thread1.start()
thread2.start()

# Wait for both threads to finish
thread1.join()
thread2.join()
```

### 5.3 Synchronizing Threads

Synchronization is essential to avoid conflicts when multiple threads access shared resources. Python provides locks for this purpose.

```python
# Synchronizing Threads Example
import threading

counter = 0
counter_lock = threading.Lock()

def increment_counter():
    global counter
    with counter_lock:
        counter += 1
    print(f"Counter value: {counter}")

# Create two threads
thread1 = threading.Thread(target=increment_counter)
thread2 = threading.Thread(target=increment_counter)

# Start the threads
thread1.start()
thread2.start()

# Wait for both threads to finish
thread1.join()
thread2.join()
```

### 5.4 Multithreaded Priority Queue

Python's `queue` module provides a `PriorityQueue` class that can be used in a multithreaded environment.

```python
# Multithreaded Priority Queue Example
import threading
import queue

# Create a priority queue
priority_queue = queue.PriorityQueue()

def process_item(item):
    print(f"Processing item: {item}")

# Create two threads
thread1 = threading.Thread(target=process_item, args=(1,))
thread2 = threading.Thread(target=process_item, args=(2,))

# Put items in the priority queue
priority_queue.put((1, "Item 1"))
priority_queue.put((3, "Item 3"))
priority_queue.put((2, "Item 2"))

# Start the threads
thread1.start()
thread2.start()

# Wait for both threads to finish
thread1.join()
thread2.join()

# Retrieve items from the priority queue
while not priority_queue.empty():
    print("Item from the priority queue:", priority_queue.get())
```

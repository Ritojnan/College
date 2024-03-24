---
sidebar_position: 1
---

# 6.1 NumPy

NumPy is a powerful library in Python for numerical computing. Let's explore some fundamental concepts.

## 6.1 Creating NumPy Arrays

NumPy arrays are the foundation of numerical computing in Python. They provide efficient storage and operations on large datasets.

```python
# Creating NumPy Arrays Example
import numpy as np

arr = np.array([1, 2, 3])
print(arr)
```

## Indexing and Slicing in NumPy

Accessing and manipulating elements in a NumPy array is done through indexing and slicing.

```python
# Indexing and Slicing Example
arr = np.array([1, 2, 3, 4, 5])
print(arr[2])       # Accessing element at index 2
print(arr[1:4])     # Slicing from index 1 to 3
```

## Creating Multidimensional Arrays

NumPy supports multidimensional arrays, which are essential for handling matrices and higher-dimensional data.

```python
# Multidimensional Arrays Example
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(matrix)
```

## NumPy Data Types

NumPy allows you to specify data types, providing flexibility and control over memory usage.

```python
# NumPy Data Types Example
arr = np.array([1, 2, 3], dtype=np.float64)
print(arr)
```

## Array Attributes

NumPy arrays come with various attributes, such as shape, size, and data type, that provide information about the array.

```python
# Array Attributes Example
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr.shape)   # Shape of the array
print(arr.size)    # Number of elements in the array
print(arr.dtype)   # Data type of the array
```

## Indexing and Slicing (Again)

Further exploration of advanced indexing and slicing techniques.

```python
# Advanced Indexing and Slicing Example
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr[:, 1])    # Accessing the second column
print(arr[1, :])    # Accessing the second row
```

## Creating Array Views and Copies

Understanding the difference between array views and copies is crucial for efficient memory usage.

```python
# Array Views and Copies Example
arr = np.array([1, 2, 3, 4, 5])
view = arr[1:4]     # Creating a view
copy = arr[1:4].copy()  # Creating a copy
```

## Manipulating Array Shapes

Reshaping and manipulating the dimensions of NumPy arrays.

```python
# Manipulating Array Shapes Example
arr = np.array([[1, 2, 3], [4, 5, 6]])
reshaped_arr = arr.reshape((3, 2))
print(reshaped_arr)
```

## Input/Output (I/O)

NumPy provides functions to read from and write to files, facilitating data input/output operations.

```python
# NumPy I/O Example
np.savetxt('data.txt', arr, delimiter=',')  # Save array to a text file
loaded_arr = np.loadtxt('data.txt', delimiter=',')  # Load array from a text file
print(loaded_arr)
```
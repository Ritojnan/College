---
sidebar_position: 2
---

# 2.Advanced Python

Working with files is crucial for many applications. Python provides simple ways to read from and write to files.

## Reading from a File

```python
# Reading from a File Example
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```

## Writing to a File

```python
# Writing to a File Example
with open("example.txt", "w") as file:
    file.write("Hello, File!")
```

# Directories

Dealing with directories is essential for organizing files. The `os` module provides functions to interact with the operating system.

## Creating a Directory

```python
# Creating a Directory Example
import os

os.mkdir("new_directory")
```

## Listing Files in a Directory

```python
# Listing Files in a Directory Example
files = os.listdir("path/to/directory")
print(files)
```

# Building Modules

Modules help organize code into reusable units. A module is a Python file containing definitions and statements.

```python
# Module Example (my_module.py)
def greet(name):
    print("Hello, " + name + "!")
```

```python
# Using a Module Example
import my_module

my_module.greet("Alice")
```

# Packages

Packages are a way of organizing related modules into a directory hierarchy.

```
my_package/
|-- __init__.py
|-- module1.py
|-- module2.py
```

```python
# Using a Package Example
from my_package import module1

module1.function()
```

# Text Processing

Python provides powerful tools for text processing.

## Reading Lines from a File

```python
# Reading Lines from a File Example
with open("text_file.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line)
```

## Writing Lines to a File

```python
# Writing Lines to a File Example
with open("output.txt", "w") as file:
    lines = ["Line 1", "Line 2", "Line 3"]
    file.writelines(lines)
```

# Regular Expression in Python

Regular expressions (regex) are powerful for pattern matching in strings.

```python
# Regular Expression Example
import re

pattern = re.compile(r'\b\d{3}-\d{2}-\d{4}\b')  # Social Security Number pattern
text = "John's SSN is 123-45-6789."

match = pattern.search(text)
if match:
    print("SSN found:", match.group())
```
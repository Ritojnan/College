---
sidebar_position: 1
---

# 1.Python Basics

Python is a versatile programming language known for its readability and ease of use. Let's dive into some fundamental concepts.

## Data Types in Python

Python supports various data types, including:

- **int:** Integer type
- **float:** Floating-point type
- **str:** String type
- **bool:** Boolean type

Example:

```python
# Data Types Example
num = 42          # int
pi = 3.14         # float
name = "Python"   # str
is_true = True     # bool
```

## Operators in Python

Python provides a range of operators for arithmetic, comparison, logical operations, etc.

```python
# Operators Example
result = 10 + 5    # Addition
is_equal = 5 == 5  # Equality check
logical_and = True and False  # Logical AND
```

## Input and Output

User input can be obtained using `input()`, and output can be displayed using `print()`.

```python
# Input and Output Example
user_input = input("Enter something: ")
print("You entered:", user_input)
```

## Control Statement

Python uses indentation to define blocks of code. `if`, `else`, and `elif` are used for conditional statements.

```python
# Control Statement Example
num = 7
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")
```

## Arrays in Python

In Python, lists are a flexible way to store and manipulate arrays of data.

```python
# Arrays Example
my_list = [1, 2, 3, 4, 5]
print(my_list)
```

## String and Character in Python

Strings are sequences of characters in Python.

```python
# String Example
message = "Hello, Python!"
print(message)
```

## Functions

Functions help modularize code. They are defined using the `def` keyword.

```python
# Function Example
def greet(name):
    print("Hello, " + name + "!")
    
greet("Alice")
```

## List and Tuples

Lists and tuples are used to store ordered collections of items.

```python
# Lists and Tuples Example
my_list = [1, 2, 3]
my_tuple = (4, 5, 6)
```

## Dictionaries

Dictionaries store key-value pairs.

```python
# Dictionaries Example
my_dict = {"name": "John", "age": 25}
print(my_dict["name"])
```

## Exception Handling

Exceptions can be caught and handled to prevent program crashes.

```python
# Exception Handling Example
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

## Introduction to OOP

Object-Oriented Programming (OOP) is a paradigm that uses objects to structure code.

## Classes, Objects, Interfaces

Classes are used to create objects. Interfaces define the methods a class should implement.

```python
# OOP Example
class Dog:
    def __init__(self, name):
        self.name = name

my_dog = Dog("Buddy")
print(my_dog.name)
```

## Inheritance

Inheritance allows a class to inherit attributes and methods from another class.

```python
# Inheritance Example
class Car:
    def drive(self):
        print("Driving")

class SportsCar(Car):
    def boost(self):
        print("Speeding up")

my_sports_car = SportsCar()
my_sports_car.drive()
my_sports_car.boost()
```
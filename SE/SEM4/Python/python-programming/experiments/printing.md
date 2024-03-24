---
sidebar_position: 1
---
# Printing Formating

1. Write a Python Program to print the following string in a specific format

Twinkle, twinkle, little star,
    "How I wonder what you are! "
         Up above the world so high,
         Like a diamond in the sky.
Twinkle,twinkle, little star,
     How I wonder what you are

Using only one print() function.

```python copy
print("Twinkle, twinkle, little star,\n\t\"How I wonder what you are!\"\n\t\tUp above the world so high,\n\t\tLike a diamond in the sky.\nTwinkle, twinkle, little star,\n\tHow I wonder what you are")
```

2. Program to show output formatting take two values and display them using single print function using

- `str.format()`
- `% operator`

### Using `str.format()`:

```python copy
value1 = 10
value2 = 20

output_format = "First value: {}, Second value: {}".format(value1, value2)
print(output_format)
```

### Using `%` operator:

```python copy
value1 = 10
value2 = 20

output_format = "First value: %d, Second value: %d" % (value1, value2)
print(output_format)
```

Replace `value1` and `value2` with the actual values you want to display. Both programs will output:

```
First value: 10, Second value: 20
```

3. Program to find leap year using nested if

A nested `if` statement to check whether a given year is a leap year or not. A leap year is a year that is divisible by 4, except for years that are divisible by 100 but not divisible by 400. Here's a Python program to find if a year is a leap year using nested `if`:

```python copy
# Input: Year
year = int(input("Enter a year: "))

# Check if it's a leap year
if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print(f"{year} is a leap year.")
        else:
            print(f"{year} is not a leap year.")
    else:
        print(f"{year} is a leap year.")
else:
    print(f"{year} is not a leap year.")
```

This program takes the user's input for a year and then uses nested `if` statements to check the leap year conditions. It prints whether the entered year is a leap year or not.

## Program to print all armstrong number in range 1 to 1000

 An Armstrong number (also known as a narcissistic number, pluperfect digital invariant, or pluperfect number) is a number that is the sum of its own digits each raised to the power of the number of digits.

```python copy
# Function to calculate the power of a number
def power(x, y):
    return x ** y

# Function to check if a number is an Armstrong number
def is_armstrong(num):
    num_str = str(num)
    num_digits = len(num_str)
    
    # Calculate the sum of each digit raised to the power of the number of digits
    armstrong_sum = sum(power(int(digit), num_digits) for digit in num_str)
    
    return armstrong_sum == num

# Print Armstrong numbers in the range 1 to 1000
print("Armstrong numbers in the range 1 to 1000:")
for num in range(1, 1001):
    if is_armstrong(num):
        print(num)
```

This program defines two functions: `power` to calculate the power of a number, and `is_armstrong` to check if a number is an Armstrong number. It then iterates through the range from 1 to 1000 and prints all Armstrong numbers within that range.

Sure, let's take the example of a 3-digit Armstrong number.

An Armstrong number of 3 digits is a number such that the sum of its own digits each raised to the power of 3 is equal to the number itself.

For example, 153 is an Armstrong number:

- $\(1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153\)$

So, 153 is an Armstrong number of 3 digits.


## Fibonacci Series of n terms

```python copy
n = int(input("Enter the number of terms for Fibonacci series: "))
a, b = 0, 1

for _ in range(n):
    print(a)
    a,b=b,a+b
```

In Python, the underscore `_` is often used as a throwaway variable. It is a convention to use `_` when the variable itself is not going to be used or referenced later in the code.

In the context of the Fibonacci series program provided earlier:

Here, the loop variable `_` is used to iterate `n` times, but the actual value of the loop variable is not used inside the loop. It's a way of indicating to other programmers (and to tools that check code for unused variables) that the loop variable is intentionally not being used.

Using `_` as a throwaway variable is a common convention in Python to make the code more readable and to indicate that a particular variable is intentionally not used in a given context. It helps to avoid naming conflicts and makes it clear that the value is not meant to be used later in the code.

## Programs on Pattern

1. ABBCCCDDDDEEEEE

```python copy
# Number of rows
num_rows = 5

# Outer loop for rows
for i in range(num_rows):
    # Inner loop for printing characters
    for j in range(i + 1):
        print(chr(ord('A') + i), end='')
    # Move to the next line after each row
    print()
```

```
A
BB
CCC
DDDD
EEEEE
```

2. ***** **** *** ** *

```python copy
# Number of rows
num_rows = 5

# Outer loop for rows
for i in range(5,0,-1):
    # Inner loop for printing characters
    for k in range(0,5-i):
        print(" ",end='')
    for j in range(i):
        print('*', end='')
    # Move to the next line after each row
    print()

```

```python copy
num_rows = 5

for i in range(num_rows, 0, -1):
    print(" " * (num_rows - i) + "*" * i)

```
```
*****
 ****
  ***
   **
    *
```

3. Number symmetric pyramid

```python copy
# Number of rows in the pyramid
num_rows = 5

# Outer loop for rows
for i in range(num_rows):
    # Inner loop for printing spaces before the numbers
    for j in range(num_rows - i - 1):
        print(" ", end='')
    
    # Inner loops for printing numbers
    for k in range(1, i + 2):
        print(k, end='')
    
    for l in range(i,0,-1):
        print(l,end='')
    # Move to the next line after each row
    print()
```

```
    1
   121
  12321
 1234321
123454321
```

4. Symmetric * Pyramid

```python copy
# Number of rows in the pyramid
num_rows = 5

for i in range(0, num_rows):
    print(" " * (num_rows-i-1)  + "* " * (i+1))
```

```
    * 
   * *
  * * *
 * * * *
* * * * *
```
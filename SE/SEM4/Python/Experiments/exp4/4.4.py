# Write a program to demonstrate use of dictionary in python

# Read a dictionary from the user and display

# Method 1
keys=input("Enter keys: ").split(',')
values=input("Enter values: ").split(',')
d=dict(zip(keys,values))
print(d)

# Method 2
d1=dict(eval(input("Enter dictionary:")))
print(d1)


# Sort a dictionary by key

d1=sorted(d.items(),key=lambda k:k[0])
print("Sorted:",d1)


# Merge two dictionaries
dict1={'hello':'world'}
dict2={'what':'happened'}

dict1.update(dict2)
concd=dict1
print(dict1)
print(dict2)
print(concd)

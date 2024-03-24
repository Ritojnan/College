# Write a menu driven program to demonstrate use of set in python

# Read teo sets A and B from the user and display set A and B

A=set(input("Enter set A: ").split(','))
B=set(input("Enter set B: ").split(','))

print("Set A: ",A)
print("Set B: ",B)

# Intersection

print("Intersection: ",A.intersection(B))

# Union

print("Union: ",A.union(B))

# Difference

print("Difference: ",A.difference(B))

# Symmetric difference

print("Symmetric difference: ",A.symmetric_difference(B))

import numpy as np

# Create an 8x8 matrix filled with zeros
matrix = np.zeros((8, 8), dtype=int)

# Fill the even rows and columns with 1
matrix[::2, ::2] = 1
matrix[1::2, 1::2] = 1

print(matrix)




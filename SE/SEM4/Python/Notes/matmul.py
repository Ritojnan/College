def read_matrix():
    rows = int(input("Enter the number of rows: "))
    cols = int(input("Enter the number of columns: "))
    matrix = []
    print("Enter the elements of the matrix:")
    for i in range(rows):
        row = []
        for j in range(cols):
            row.append(int(input("Enter element at position ({},{}) : ".format(i+1, j+1))))
        matrix.append(row)
    return matrix, rows, cols

def multiply_matrices(matrix1, rows1, cols1, matrix2, rows2, cols2):
    if cols1 != rows2:
        print("Matrix multiplication not possible!")
        return None

    result = []
    for i in range(rows1):
        row = []
        for j in range(cols2):
            row.append(0)
        result.append(row)

    for i in range(rows1):
        for j in range(cols2):
            for k in range(cols1):
                result[i][j] += matrix1[i][k] * matrix2[k][j]
    return result

def display_diagonal(matrix):
    print("Diagonal elements:")
    for i in range(len(matrix)):
        print(matrix[i][i])

def is_square(matrix):
    return len(matrix) == len(matrix[0])

# Read matrices
print("Enter Matrix 1:")
matrix1, rows1, cols1 = read_matrix()
print("Enter Matrix 2:")
matrix2, rows2, cols2 = read_matrix()

# Multiply matrices
result_matrix = multiply_matrices(matrix1, rows1, cols1, matrix2, rows2, cols2)
if result_matrix:
    # Display diagonal elements
    display_diagonal(result_matrix)
    
    # Check if result matrix is square
    if is_square(result_matrix):
        print("Result matrix is a square matrix.")
    else:
        print("Result matrix is not a square matrix.")

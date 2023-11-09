package PRACTICE;
public class MatrixMultiplication {
    public static void main(String[] args) {
        try {
            int[][] matrixA = {
                {1, 2, 3},
                {4, 5, 6}
            };

            int[][] matrixB = {
                {7, 8},
                {9, 10},
                {11, 12}
            };

            int[][] result = multiplyMatrices(matrixA, matrixB);

            System.out.println("Matrix A:");
            printMatrix(matrixA);

            System.out.println("Matrix B:");
            printMatrix(matrixB);

            System.out.println("Result of Matrix Multiplication (A * B):");
            printMatrix(result);
        } catch (MatrixMultiplicationException e) {
            System.err.println("Matrix multiplication error: " + e.getMessage());
        }
    }

    public static int[][] multiplyMatrices(int[][] matrixA, int[][] matrixB) throws MatrixMultiplicationException {
        int rowsA = matrixA.length;
        int colsA = matrixA[0].length;
        int colsB = matrixB[0].length;

        if (matrixA[0].length != matrixB.length) {
            throw new MatrixMultiplicationException("Incompatible matrix dimensions for multiplication.");
        }

        int[][] result = new int[rowsA][colsB];

        for (int i = 0; i < rowsA; i++) {
            for (int j = 0; j < colsB; j++) {
                result[i][j] = 0;
                for (int k = 0; k < colsA; k++) {
                    result[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }

        return result;
    }

    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
    }
}

class MatrixMultiplicationException extends Exception {
    public MatrixMultiplicationException(String message) {
        super(message);
    }
}

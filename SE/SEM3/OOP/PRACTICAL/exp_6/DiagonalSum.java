package exp_6;
import java.util.*;

class DiagonalSum {
    void sumOfDiagonal(int matrix[][], int row, int column) {
        int sum = 0;

        if (row != column) {
            System.out.println("Not a square matrix.");
        } else {
            for (int i = 0; i < row; i++) {
                for (int j = 0; j < column; j++) {
                    if (i == j) {
                        sum += matrix[i][j];
                    }
                }
            }
            System.out.println("Ritojnan Mukherjee C23 2203114");
            System.out.println("The sum of diagonal elements is: " + sum);
        }
    }
}

class DiagonalSumMain {
    public static void main(String args[]) {
        DiagonalSum ds = new DiagonalSum();
        Scanner sc = new Scanner(System.in);
        int m, n;

        System.out.println("Enter the number of rows and columns: ");
        m = sc.nextInt();
        n = sc.nextInt();

        int[][] matrix = new int[m][n];
        System.out.println("Enter the matrix:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }
        ds.sumOfDiagonal(matrix, m, n);
    }
}

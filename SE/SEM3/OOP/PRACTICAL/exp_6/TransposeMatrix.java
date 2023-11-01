package exp_6;

import java.io.*;
import java.util.*;

class TransposeMatrix {
    public static void main(String args[]) {
        int m, n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Ritojnan Mukherjee C23 2203114");
        System.out.println("Enter the number of rows and columns: ");
        m = sc.nextInt();
        n = sc.nextInt();

        int[][] matrix = new int[m][n];
        int[][] transpose = new int[n][m];

        System.out.println("Enter the matrix:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }

        System.out.println("Original matrix:");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }

        System.out.println("The transpose of the above matrix is:");

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                System.out.print(transpose[i][j] + " ");
            }
            System.out.println();
        }
    }
}

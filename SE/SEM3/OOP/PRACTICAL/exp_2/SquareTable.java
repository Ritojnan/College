package exp_2;

public class SquareTable {
    public static void main(String[] args) {
        System.out.println("Ritojnan Mukherjee C23 2203114");
        int rows = 5; // Number of rows in the table
        int cols = 5; // Number of columns in the table
        int num = 1;  // Starting number

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                int square = num * num;
                System.out.printf("%4d", square); // Format the output to align columns
                num++;
            }
            System.out.println(); // Move to the next row
        }
    }
}

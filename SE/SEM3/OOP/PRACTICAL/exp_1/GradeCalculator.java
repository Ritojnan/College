import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the student's percentage: ");
        double percentage = scanner.nextDouble();

        char grade;

        if (percentage >= 0 && percentage <= 60) {
            grade = 'F';
        } else if (percentage <= 70) {
            grade = 'D';
        } else if (percentage <= 80) {
            grade = 'C';
        } else if (percentage <= 90) {
            grade = 'B';
        } else if (percentage <= 100) {
            grade = 'A';
        } else {
            System.out.println("Invalid input. Percentage should be between 0 and 100.");
            scanner.close();
            return;
        }

        System.out.println("Grade: " + grade);

        scanner.close();
    }
}

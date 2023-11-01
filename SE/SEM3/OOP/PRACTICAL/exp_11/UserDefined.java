package exp_11;

import java.util.Scanner;

class InvalidNumberException extends Exception {
    public InvalidNumberException(String message) {
        super(message);
    }
}

public class UserDefined {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Ritojnan Mukherjee C23 2203114");
        System.out.println("Enter an integer (5, 6, or 7):");

        try {
            int num = sc.nextInt();

            if (num != 5 && num != 6 && num != 7) {
                throw new InvalidNumberException("Entered number is not 5, 6, or 7.");
            } else {
                System.out.println("You entered a valid number: " + num);
            }
        } catch (InvalidNumberException e) {
            System.out.println("Invalid Number Exception: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}

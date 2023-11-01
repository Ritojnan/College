package exp_8;
import java.util.Scanner;

class Palindrome {
    public static void main(String args[]) {
        String input;
        int length, flag = 0;

        System.out.println("Ritojnan Mukherjee C23 2203114");
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a string");
        input = scanner.nextLine();
        String inputLowerCase = input.toLowerCase();
        length = input.length();

        for (int i = 0; i < (inputLowerCase.length() / 2); i++) {
            if (inputLowerCase.charAt(i) != inputLowerCase.charAt(length - 1 - i)) {
                flag = 1;
                break;
            }
        }
        if (flag == 1) {
            System.out.println("The given string is not a palindrome");
        } else {
            System.out.println("The given string is a palindrome");
        }
    }
}

package exp_8; 
import java.util.Scanner;

class StrDetails {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String input;
        int uppercaseCount = 0, lowercaseCount = 0, specialCharCount = 0, spaceCount = 0, digitCount = 0;
        System.out.println("Ritojnan Mukherjee C23 2203114");
        System.out.println("Enter a string");
        input = sc.nextLine();

        for (int i = 0; i < input.length(); i++) {
            char currentChar = input.charAt(i);

            if (Character.isUpperCase(currentChar)) {
                uppercaseCount++;
            } else if (Character.isLowerCase(currentChar)) {
                lowercaseCount++;
            } else if (Character.isDigit(currentChar)) {
                digitCount++;
            } else if (Character.isWhitespace(currentChar)) {
                spaceCount++;
            } else {
                specialCharCount++;
            }
        }

        System.out.println("The number of Capital letters are: " + uppercaseCount);
        System.out.println("The number of Small letters are: " + lowercaseCount);
        System.out.println("The number of Special characters are: " + specialCharCount);
        System.out.println("The number of Spaces are: " + spaceCount);
        System.out.println("The number of Digits are: " + digitCount);
    }
}

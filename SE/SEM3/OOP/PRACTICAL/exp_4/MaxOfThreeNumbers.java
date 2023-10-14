package exp_4;

class MaximumFinder {
    public static int findMax(int num1, int num2, int num3) {
        return (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);
    }
}

public class MaxOfThreeNumbers {
    public static void main(String[] args) {
        int number1 = 35;
        int number2 = 52;
        int number3 = 28;

        int max = MaximumFinder.findMax(number1, number2, number3);

        System.out.println("Maximum of " + number1 + ", " + number2 + ", and " + number3 + " is: " + max);
    }
}

package exp_2;

public class DivisibleBy7 {
    public static void main(String[] args) {
        int count = 0;   // To count the numbers divisible by 7
        int sum = 0;     // To store the sum of the numbers
        
        for (int i = 101; i < 200; i++) {
            if (i % 7 == 0) {
                count++;
                sum += i;
            }
        }

        System.out.println("Number of integers divisible by 7: " + count);
        System.out.println("Sum of integers divisible by 7: " + sum);
    }
}

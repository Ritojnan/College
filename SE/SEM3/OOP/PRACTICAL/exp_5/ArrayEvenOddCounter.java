package exp_5;

import java.util.Scanner;

class ArrayEvenOddCounter {
    void countEvenOdd() {
        int size, evenCount = 0, oddCount = 0;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ritojnan Mukherjee C23 2203114");
        System.out.print("Enter the number of elements: ");
        size = scanner.nextInt();
        int numbers[] = new int[size];
        
        System.out.print("Enter elements: ");
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = scanner.nextInt();
        }

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }

        System.out.println("The number of even elements is " + evenCount);
        System.out.println("The number of odd elements is " + oddCount);
    }

    public static void main(String args[]) {
        ArrayEvenOddCounter counter = new ArrayEvenOddCounter();
        counter.countEvenOdd();
    }
}

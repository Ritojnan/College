package exp_9;

import java.util.Scanner;

class AreaCalculator {
    public void calculateArea(int side) {
        System.out.println("Area of Square is " + side * side);
    }

    public void calculateArea(int length, int breadth) {
        System.out.println("Area of Rectangle is " + length * breadth);
    }

    public void calculateArea(float radius) {
        System.out.println("Area of Circle is " + 3.14 * radius * radius);
    }
}

class AreaMethods {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        AreaCalculator calculator = new AreaCalculator();

        int choice, length, breadth;
        float radius;

        System.out.println("Ritojnan Mukherjee C23 2203114");
        System.out.println("1. Rectangle\n2. Circle\n3. Square");
        System.out.println("Enter your choice: ");
        choice = sc.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Enter length and breadth of the rectangle:");
                length = sc.nextInt();
                breadth = sc.nextInt();
                calculator.calculateArea(length, breadth);
                break;
            case 2:
                System.out.println("Enter radius of the circle:");
                radius = sc.nextFloat();
                calculator.calculateArea(radius);
                break;
            case 3:
                System.out.println("Enter side of the square:");
                length = sc.nextInt();
                calculator.calculateArea(length);
                break;
        }
    }
}

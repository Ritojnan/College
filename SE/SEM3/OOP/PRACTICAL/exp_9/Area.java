package exp_9;

import java.util.Scanner;

class Area {
    Area() {
        System.out.println("Default");
    }

    Area(int side) {
        System.out.println("Area of Square is " + side * side);
    }

    Area(int length, int breadth) {
        System.out.println("Area of Rectangle is " + length * breadth);
    }

    Area(float radius) {
        System.out.println("Area of Circle is " + 3.14 * radius * radius);
    }
}

class AreaMain {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        int choice, length, breadth;
        float radius;

        System.out.println("Ritojnan Mukherjee C23 2203114");
        System.out.println("1. Rectangle\n2. Circle\n3. Square");
        System.out.println("Enter your choice: ");
        choice = sc.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Enter length and breadth of rectangle:");
                length = sc.nextInt();
                breadth = sc.nextInt();
                new Area(length, breadth);
                break;
            case 2:
                System.out.println("Enter radius of the circle:");
                radius = sc.nextFloat();
                new Area(radius);
                break;
            case 3:
                System.out.println("Enter side of the square:");
                length = sc.nextInt();
                new Area(length);
                break;
        }
    }
}

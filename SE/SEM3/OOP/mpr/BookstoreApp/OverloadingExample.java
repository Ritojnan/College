class OverloadingDemo {
    // Constructor Overloading
    public OverloadingDemo() {
        System.out.println("Default constructor called");
    }

    public OverloadingDemo(int num) {
        System.out.println("Parameterized constructor with int called: " + num);
    }

    public OverloadingDemo(double num) {
        System.out.println("Parameterized constructor with double called: " + num);
    }

    // Method Overloading
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public String add(String a, String b) {
        return a + b;
    }
}

public class OverloadingExample {
    public static void main(String[] args) {
        OverloadingDemo constructorDemo1 = new OverloadingDemo();
        OverloadingDemo constructorDemo2 = new OverloadingDemo(42);
        OverloadingDemo constructorDemo3 = new OverloadingDemo(3.14);

        System.out.println("Sum of integers: " + constructorDemo1.add(5, 7));
        System.out.println("Sum of doubles: " + constructorDemo2.add(3.5, 2.5));
        System.out.println("Concatenated strings: " + constructorDemo3.add("Hello, ", "world!"));
    }
}

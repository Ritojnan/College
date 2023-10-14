package exp_4;
import java.util.Scanner;

class Employee {
    private String name;
    private int employeeId;
    private double salary;

    // Constructor to initialize employee details
    public Employee(String name, int employeeId, double salary) {
        this.name = name;
        this.employeeId = employeeId;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("Employee Details:");
        System.out.println("Name: " + name);
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Salary: $" + salary);
    }
}

public class EmployeeDetailsApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter employee name: ");
        String name = scanner.nextLine();

        System.out.print("Enter employee ID: ");
        int employeeId = scanner.nextInt();

        System.out.print("Enter employee salary: ");
        double salary = scanner.nextDouble();

        // Create an Employee object and pass the input values to the constructor
        Employee employee = new Employee(name, employeeId, salary);

        // Display the employee details
        employee.displayDetails();

        scanner.close();
    }
}

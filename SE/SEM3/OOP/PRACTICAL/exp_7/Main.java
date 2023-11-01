package exp_7;

import java.util.Scanner;

class Employee {
    int id, nh, wages;
    String name;

    public Employee() {
    }

    public Employee(int id, String name, int nh) {
        this.id = id;
        this.name = name;
        this.nh = nh;
    }

    void read() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter employee id, name, and number of hours:");
        id = sc.nextInt();
        sc.nextLine(); // Consume the newline character
        name = sc.nextLine();
        nh = sc.nextInt();
    }

    void display() {
        System.out.println(id + "\t" + name + "\t" + nh + "\t" + wages);
    }

    void calculate() {
        wages = nh * 100;
    }
}

public class Main {
    public static void main(String[] args) {
        int maxWages = -1, pos = 0;
        Employee[] employees = new Employee[5];
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter details for 5 employees:");

        for (int i = 0; i < 5; i++) {
            employees[i] = new Employee();
            employees[i].read();
            employees[i].calculate();
        }

        maxWages = employees[0].wages;
        System.out.println("id\tname\tnumber of hours\twages");

        for (int i = 0; i < 5; i++) {
            employees[i].display();
            if (employees[i].wages > maxWages) {
                maxWages = employees[i].wages;
                pos = i;
            }
        }

        System.out.println("Details of the employee with the highest wage:");
        System.out.println("id\tname\thours\twages");
        employees[pos].display();
    }
}

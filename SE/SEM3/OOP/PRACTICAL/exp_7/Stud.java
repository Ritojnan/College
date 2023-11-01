package exp_7;
import java.util.Scanner;

class Student {
    int sub1, sub2, sub3, total;

    Student read() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter marks for subject 1, subject 2, and subject 3:");
        sub1 = sc.nextInt();
        sub2 = sc.nextInt();
        sub3 = sc.nextInt();
        return this;
    }

    void display() {
        System.out.println("Marks: " + sub1 + ", " + sub2 + ", " + sub3);
    }

    void calculateTotal() {
        total = sub1 + sub2 + sub3;
    }
}

public class Stud {
    public static void main(String[] args) {
        int maxTotal = -1, pos = 0;
        Student[] students = new Student[5];
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter marks for 5 students in three subjects:");

        for (int i = 0; i < 5; i++) {
            students[i] = new Student();
            System.out.println("Enter marks for student " + (i + 1) + ":");
            students[i].read();
            students[i].calculateTotal();
        }

        maxTotal = students[0].total;
        
        for (int i = 0; i < 5; i++) {
            System.out.print("Marks obtained by student " + (i + 1) + " are: ");
            students[i].display();
            
            if (maxTotal < students[i].total) {
                maxTotal = students[i].total;
                pos = i;
            }
        }

        System.out.println("Student with the highest total marks is student " + (pos + 1));
    }
}

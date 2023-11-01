package exp_14;

import java.util.Scanner;

class Staff {
    int code;
    String name;
    String add;

    Staff(int code, String name, String add) {
        this.code = code;
        this.name = name;
        this.add = add;
    }

    void display() {
        System.out.println("Code: " + code);
        System.out.println("Name: " + name);
        System.out.println("Address: " + add);
    }
}

class Teacher extends Staff {
    String sub;
    String clas;

    Teacher(int code, String name, String add, String sub, String clas) {
        super(code, name, add);
        this.sub = sub;
        this.clas = clas;
    }

    void display() {
        System.out.println("Teacher details:");
        super.display();
        System.out.println("Subject: " + sub);
        System.out.println("Class: " + clas);
    }
}

class Officer extends Staff {
    String grade;

    Officer(int code, String name, String add, String grade) {
        super(code, name, add);
        this.grade = grade;
    }

    void display() {
        System.out.println("Officer details:");
        super.display();
        System.out.println("Grade: " + grade);
    }
}

class Typist extends Staff {
    int speed;

    Typist(int code, String name, String add, int speed) {
        super(code, name, add);
        this.speed = speed;
    }

    void display() {
        super.display();
        System.out.println("Typist Speed: " + speed);
    }
}

class Regular extends Typist {
    double basic;

    Regular(int code, String name, String add, int speed, double basic) {
        super(code, name, add, speed);
        this.basic = basic;
    }

    void display() {
        System.out.println("Regular Typist details:");
        super.display();
        System.out.println("Basic Pay: " + basic);
    }
}

class AdHoc extends Typist {
    double pay;

    AdHoc(int code, String name, String add, int speed, double pay) {
        super(code, name, add, speed);
        this.pay = pay;
    }

    void display() {
        System.out.println("AdHoc Typist details:");
        super.display();
        System.out.println("Basic Pay: " + pay);
    }
}

public class InheritanceMain {
    public static void main(String[] args) {
        System.out.println("Ritojnan Mukherjee C23 2203114 ");
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter code:");
        int code = sc.nextInt();
        System.out.println("Enter name:");
        String name = sc.next();
        System.out.println("Enter address:");
        String add = sc.next();
        System.out.println("Enter grade:");
        String grade = sc.next();
        System.out.println("Enter subject:");
        String sub = sc.next();
        System.out.println("Enter class:");
        String clas = sc.next();
        System.out.println("Enter typist speed:");
        int speed = sc.nextInt();
        System.out.println("Enter basic pay:");
        double basic = sc.nextDouble();
        System.out.println("Enter pay:");
        double pay = sc.nextDouble();

        Officer off = new Officer(code, name, add, grade);
        Teacher tea = new Teacher(code, name, add, sub, clas);
        Regular reg = new Regular(code, name, add, speed, basic);
        AdHoc ad = new AdHoc(code, name, add, speed, pay);

        off.display();
        tea.display();
        reg.display();
        ad.display();
    }
}

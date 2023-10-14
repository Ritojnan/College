package exp_3;

public class StudentDetails {
    public static void main(String[] args) {
        if (args.length != 4) {
            System.out.println("Usage: java StudentDetails <Name> <RollNumber> <Course> <Grade>");
            return;
        }

        String name = args[0];
        String rollNumber = args[1];
        String course = args[2];
        String grade = args[3];

        System.out.println("Student Details:");
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Course: " + course);
        System.out.println("Grade: " + grade);
    }
}
//java StudentDetails John 12345 Math A
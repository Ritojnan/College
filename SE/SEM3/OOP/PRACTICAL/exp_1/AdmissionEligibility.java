
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class AdmissionEligibility {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("Enter marks in Mathematics:");
        int mathMarks = Integer.parseInt(br.readLine());

        System.out.println("Enter marks in Physics:");
        int physicsMarks = Integer.parseInt(br.readLine());

        System.out.println("Enter marks in Chemistry:");
        int chemistryMarks = Integer.parseInt(br.readLine());

        int totalMarks = mathMarks + physicsMarks + chemistryMarks;

        if (mathMarks >= 60 && physicsMarks >= 50 && chemistryMarks >= 40 && totalMarks >= 200) {
            System.out.println("Congratulations! The student is eligible for admission.");
        } else {
            System.out.println("Sorry, the student is not eligible for admission.");
        }

        br.close();
    }
}

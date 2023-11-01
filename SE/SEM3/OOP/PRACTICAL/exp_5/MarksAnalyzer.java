package exp_5;

import java.util.Scanner;

class MarksAnalyzer {
    void analyzeMarks() {
        System.out.println("Ritojnan Mukherjee C23 2203114");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of subjects: ");
        int numberOfSubjects = scanner.nextInt();
        int[] marks = new int[numberOfSubjects];

        System.out.print("Enter marks of " + numberOfSubjects + " subjects: ");
        for (int i = 0; i < marks.length; i++) {
            marks[i] = scanner.nextInt();
        }

        int totalMarks = 0;
        int highestMark = 0;

        for (int i = 0; i < marks.length; i++) {
            totalMarks += marks[i];
            if (marks[i] > highestMark) {
                highestMark = marks[i];
            }
        }

        System.out.println("The sum of all the marks is " + totalMarks);
        System.out.println("The highest marks obtained are " + highestMark);
    }

    public static void main(String[] args) {
        MarksAnalyzer marksAnalyzer = new MarksAnalyzer();
        marksAnalyzer.analyzeMarks();
    }
}

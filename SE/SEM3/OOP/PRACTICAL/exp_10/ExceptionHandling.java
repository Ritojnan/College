package exp_10;
import java.util.*;

class ExceptionHandling {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int a;
        int ar[] = { 2, 3, 4 };
        System.out.println("Ritojnan Mukherjee C23 2203114");
        try {
            a = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException thrown: " + e);
        }
        
        try {
            System.out.println(ar[3]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException thrown: " + e);
        }
        
        try {
            int x;
            System.out.println("Enter X: ");
            x = sc.nextInt();
            System.out.println(x);
        } catch (InputMismatchException e) {
            System.out.println("InputMismatchException thrown: " + e);
        }
    }
}

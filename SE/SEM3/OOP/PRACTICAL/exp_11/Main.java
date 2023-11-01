package exp_11;
import java.util.Scanner;

class PayOutOfBoundsException extends Exception {
    public PayOutOfBoundsException(String message) {
        super(message);
    }
}

class Superintendent {
    private double basicPay;

    public Superintendent(double basicPay) throws PayOutOfBoundsException {
        if (basicPay < 25000 || basicPay > 50000) {
            throw new PayOutOfBoundsException("Basic pay for Superintendent must be between 25,000 and 50,000");
        }
        this.basicPay = basicPay;
    }

    public double getBasicPay() {
        return basicPay;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Ritojnan Mukherjee C23 2203114");
        try {
            System.out.println("Enter the basic pay for the Superintendent: ");
            double pay = sc.nextDouble();

            Superintendent superintendent = new Superintendent(pay);
            System.out.println("Basic pay for Superintendent: " + superintendent.getBasicPay());
        } catch (PayOutOfBoundsException e) {
            System.out.println("PayOutOfBoundsException: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}

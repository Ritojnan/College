package exp_3;
public class MinMaxCalculator {
    public static void main(String[] args) {
        if (args.length != 3) {
            System.out.println("Usage: java MinMaxCalculator <number1> <number2> <number3>");
            return;
        }

        double num1 = Double.parseDouble(args[0]);
        double num2 = Double.parseDouble(args[1]);
        double num3 = Double.parseDouble(args[2]);

        double min = Math.min(num1, Math.min(num2, num3));
        double max = Math.max(num1, Math.max(num2, num3));

        System.out.println("Ritojnan Mukherjee C23 2203114");
        System.out.println("Minimum: " + min);
        System.out.println("Maximum: " + max);
    }
}

// java MinMaxCalculator 10 25 5


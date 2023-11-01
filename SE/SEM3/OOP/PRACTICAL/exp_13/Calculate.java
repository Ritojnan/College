package exp_13;

import java.io.*;

class Calculate {
    public static void main(String[] args) throws IOException {
        int z, a, b;
        float y;
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
            System.out.println("Ritojnan Mukherjee C23 2203114");

        while (true) {
            System.out.println("Menu:");
            System.out.println("1- Addition");
            System.out.println("2- Subtraction");
            System.out.println("3- Multiplication");
            System.out.println("4- Division");
            System.out.println("5- Exit");
            System.out.print("Enter your choice: ");

            int ch = Integer.parseInt(br.readLine());

            if (ch == 5)
                break;

            switch (ch) {
                case 1:
                    System.out.println("Enter two numbers");
                    a = Integer.parseInt(br.readLine());
                    b = Integer.parseInt(br.readLine());
                    z = a + b;
                    System.out.println("The addition is " + z);
                    break;

                case 2:
                    System.out.println("Enter two numbers");
                    a = Integer.parseInt(br.readLine());
                    b = Integer.parseInt(br.readLine());
                    z = a - b;
                    System.out.println("The subtraction is " + z);
                    break;

                case 3:
                    System.out.println("Enter two numbers");
                    a = Integer.parseInt(br.readLine());
                    b = Integer.parseInt(br.readLine());
                    z = a * b;
                    System.out.println("The multiplication is " + z);
                    break;

                case 4:
                    System.out.println("Enter two numbers");
                    a = Integer.parseInt(br.readLine());
                    b = Integer.parseInt(br.readLine());
                    y = (float) a / b;
                    System.out.println("The division is " + y);
                    break;

                default:
                    System.out.println("Invalid choice");
                    break;
            }
        }
    }
}

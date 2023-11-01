class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class UserDefinedExceptionExample {
    public static void main(String[] args) {
        try {
            int age = 15;
            if (age < 18) {
                throw new CustomException("Age must be 18 or above for this action.");
            }

            System.out.println("Action performed successfully.");
        } catch (CustomException e) {
            System.err.println("Custom Exception: " + e.getMessage());
        }
        finally{
            System.out.println("Final Block");
        }
    }
}

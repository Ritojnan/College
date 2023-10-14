import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class BookstoreApp {

    public static void main(String[] args) {
        try {
            Class.forName("org.postgresql.Driver");
            String url = "jdbc:postgresql://localhost/bookstore";
            String user = "postgres";
            String password = "admin";

            Connection connection = DriverManager.getConnection(url, user, password);
            String insertQuery = "INSERT INTO books (title, author, price) VALUES (?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);
            preparedStatement.setString(1, "Sample Book");
            preparedStatement.setString(2, "Sample Author");
            preparedStatement.setBigDecimal(3, new BigDecimal("19.99"));
            preparedStatement.executeUpdate();
            preparedStatement.close();
            connection.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
}

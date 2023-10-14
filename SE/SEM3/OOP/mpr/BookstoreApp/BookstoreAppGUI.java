import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class BookstoreAppGUI {

    private JTextField titleField, authorField, priceField;

    public BookstoreAppGUI() {
        JFrame frame = new JFrame("Bookstore App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);

        // Create a JPanel for input fields
        JPanel inputPanel = new JPanel();
        inputPanel.setLayout(new GridLayout(4, 2));

        JLabel titleLabel = new JLabel("Title:");
        titleField = new JTextField(20);

        JLabel authorLabel = new JLabel("Author:");
        authorField = new JTextField(20);

        JLabel priceLabel = new JLabel("Price:");
        priceField = new JTextField(10);

        JButton addButton = new JButton("Add Book");
        addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                addBookToDatabase();
            }
        });

        inputPanel.add(titleLabel);
        inputPanel.add(titleField);
        inputPanel.add(authorLabel);
        inputPanel.add(authorField);
        inputPanel.add(priceLabel);
        inputPanel.add(priceField);
        inputPanel.add(new JLabel("")); // Empty space
        inputPanel.add(addButton);

        frame.add(inputPanel, BorderLayout.CENTER);
        frame.setVisible(true);
    }

    private void addBookToDatabase() {
        try {
            Class.forName("org.postgresql.Driver");
            String url = "jdbc:postgresql://localhost/bookstore";
            String user = "postgres";
            String password = "admin";

            Connection connection = DriverManager.getConnection(url, user, password);
            String insertQuery = "INSERT INTO books (title, author, price) VALUES (?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);
            preparedStatement.setString(1, titleField.getText());
            preparedStatement.setString(2, authorField.getText());
            preparedStatement.setBigDecimal(3, new BigDecimal(priceField.getText()));
            preparedStatement.executeUpdate();
            preparedStatement.close();
            connection.close();

            // Optionally, provide a success message
            JOptionPane.showMessageDialog(null, "Book added to the database.");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();

            // Display an error message in case of an exception
            JOptionPane.showMessageDialog(null, "Error: " + e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new BookstoreAppGUI();
            }
        });
    }
}

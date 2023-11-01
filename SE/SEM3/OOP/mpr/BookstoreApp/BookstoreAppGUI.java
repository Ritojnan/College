import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class BookstoreAppGUI {

  
    private JTextField titleField, authorField, priceField, idField;
    private JTable dataTable;
    private DefaultTableModel tableModel;

    public BookstoreAppGUI() {
        JFrame frame = new JFrame("Bookstore App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 400);
        frame.setResizable(true);

        ImageIcon imgIcon = new ImageIcon("logo.jfif");
        frame.setIconImage(imgIcon.getImage());

        // Create a JPanel for input fields
        JPanel inputPanel = new JPanel(new GridLayout(4, 2));
        inputPanel.setBorder(BorderFactory.createTitledBorder("Add a Book"));

        JLabel titleLabel = new JLabel("Title:");
        titleField = new JTextField(20);

        JLabel authorLabel = new JLabel("Author:");
        authorField = new JTextField(20);

        JLabel priceLabel = new JLabel("Price:");
        priceField = new JTextField(10);

        JButton addButton = new JButton("Add Book");
        addButton.setBackground(new Color(0, 102, 204));
        addButton.setForeground(Color.WHITE);
        addButton.addActionListener(e -> addBookToDatabase());

        inputPanel.add(titleLabel);
        inputPanel.add(titleField);
        inputPanel.add(authorLabel);
        inputPanel.add(authorField);
        inputPanel.add(priceLabel);
        inputPanel.add(priceField);
        inputPanel.add(new JLabel(""));
        inputPanel.add(addButton);

        // Create a JPanel for displaying data
        JPanel dataPanel = new JPanel(new BorderLayout());
        dataPanel.setBorder(BorderFactory.createTitledBorder("Book List"));

        tableModel = new DefaultTableModel();
        dataTable = new JTable(tableModel);
        tableModel.addColumn("ID");
        tableModel.addColumn("Title");
        tableModel.addColumn("Author");
        tableModel.addColumn("Price");

        dataPanel.add(new JScrollPane(dataTable), BorderLayout.CENTER);

        // Create a JPanel for deleting a book
        JPanel deletePanel = new JPanel(new GridLayout(1, 3));
        deletePanel.setBorder(BorderFactory.createTitledBorder("Delete a Book"));

        JLabel idLabel = new JLabel("ID:");
        idField = new JTextField(10);

        JButton deleteButton = new JButton("Delete Book");
        deleteButton.setBackground(new Color(204, 0, 0));
        deleteButton.setForeground(Color.WHITE);
        deleteButton.addActionListener(e -> deleteBookFromDatabase());

        deletePanel.add(idLabel);
        deletePanel.add(idField);
        deletePanel.add(deleteButton);

        // Add input, data, and delete panels to the frame
        frame.add(inputPanel, BorderLayout.NORTH);
        frame.add(dataPanel, BorderLayout.CENTER);
        frame.add(deletePanel, BorderLayout.SOUTH);

        frame.setVisible(true);

        loadTableData(); // Load data from the database into the table
    }

    private void deleteBookFromDatabase() {
        String idString = idField.getText();
        if (idString.isEmpty()) {
            showErrorDialog("Please enter a valid ID to delete a book.");
            return;
        }

        int id;
        try {
            id = Integer.parseInt(idString);
        } catch (NumberFormatException e) {
            showErrorDialog("Invalid ID: Please enter a valid numeric ID.");
            return;
        }

        try {
            Class.forName("org.postgresql.Driver");
            String url = "jdbc:postgresql://localhost/bookstore";
            String user = "postgres";
            String password = "admin";

            Connection connection = DriverManager.getConnection(url, user, password);
            String deleteQuery = "DELETE FROM books WHERE id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(deleteQuery);
            preparedStatement.setInt(1, id);
            int rowsDeleted = preparedStatement.executeUpdate();
            preparedStatement.close();
            connection.close();

            if (rowsDeleted > 0) {
                loadTableData(); // Refresh the table after deletion
                JOptionPane.showMessageDialog(null, "Book with ID " + id + " has been deleted.");
            } else {
                showErrorDialog("Book with ID " + id + " not found.");
            }
        } catch (ClassNotFoundException | SQLException e) {
            showErrorDialog("Error: " + e.getMessage());
        }
    }

    private void loadTableData() {
        try {
            Class.forName("org.postgresql.Driver");
            String url = "jdbc:postgresql://localhost/bookstore";
            String user = "postgres";
            String password = "admin";

            Connection connection = DriverManager.getConnection(url, user, password);
            String query = "SELECT * FROM books";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();

            // Clear existing data in the table
            tableModel.setRowCount(0);

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String title = resultSet.getString("title");
                String author = resultSet.getString("author");
                BigDecimal price = resultSet.getBigDecimal("price");

                // Add a row to the table
                tableModel.addRow(new Object[]{id, title, author, price});
            }

            resultSet.close();
            preparedStatement.close();
            connection.close();
        } catch (ClassNotFoundException | SQLException e) {
            showErrorDialog("Error: " + e.getMessage());
        }
    }

    private void addBookToDatabase() {
        try {
            Class.forName("org.postgresql.Driver");
            String url = "jdbc:postgresql://localhost/bookstore";
            String user = "postgres";
            String password = "admin";
    
            Connection connection = DriverManager.getConnection(url, user, password);
    
            String title = titleField.getText();
            String author = authorField.getText();
            String priceString = priceField.getText();
    
            // Check if priceString is a valid number
            BigDecimal price;
            try {
                price = new BigDecimal(priceString);
            } catch (NumberFormatException e) {
                showErrorDialog("Invalid Price: Please enter a valid numeric price.");
                return; // Exit the method if the price is invalid
            }
    
            String insertQuery = "INSERT INTO books (title, author, price) VALUES (?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);
            preparedStatement.setString(1, title);
            preparedStatement.setString(2, author);
            preparedStatement.setBigDecimal(3, price);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            connection.close();
    
            // Update the table with the new data
             loadTableData();

            // Optionally, provide a success message
            JOptionPane.showMessageDialog(null, "Book added to the database.");
        } catch (ClassNotFoundException | SQLException e) {
            showErrorDialog("Error: " + e.getMessage());
        }
    }

    private void showErrorDialog(String errorMessage) {
        JPanel panel = new JPanel();
        panel.setBackground(Color.RED);

        // Create a label with the error message
        JLabel label = new JLabel(errorMessage);
        label.setForeground(Color.WHITE); // Set text color to white

        panel.add(label);

        // Show the custom JPanel in a JOptionPane
        JOptionPane.showMessageDialog(null, panel, "Error", JOptionPane.ERROR_MESSAGE);
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

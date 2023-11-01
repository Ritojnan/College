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

    private JTextField titleField, authorField, priceField, idField, quantityField,usernameField, passwordField, isbnField, publisherField; // New fields for ISBN and publisher
    private JTable dataTable;
    private DefaultTableModel tableModel;
    private JComboBox<String> quantityActionComboBox;

    public BookstoreAppGUI() {
        JFrame loginFrame = new JFrame("Login");
        loginFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        loginFrame.setSize(400, 400);
        loginFrame.setLayout(new BorderLayout());

        JPanel headerPanel = new JPanel();
        headerPanel.setLayout(new FlowLayout(FlowLayout.CENTER));

        ImageIcon logoImageIcon = new ImageIcon("logo.jfif");

        loginFrame.setIconImage(logoImageIcon.getImage());
        Image logoImage = logoImageIcon.getImage().getScaledInstance(100, 100, Image.SCALE_SMOOTH);

        ImageIcon scaledLogoImageIcon = new ImageIcon(logoImage);

        JLabel logoLabel = new JLabel(scaledLogoImageIcon);

        JLabel titleLabel = new JLabel("Bookstore App");
        titleLabel.setFont(new Font("Arial", Font.BOLD, 24));

        headerPanel.add(logoLabel);
        headerPanel.add(titleLabel);

        loginFrame.add(headerPanel, BorderLayout.NORTH);

        JPanel loginPanel = new JPanel();
        loginPanel.setBorder(BorderFactory.createTitledBorder("Login"));

        loginPanel.setLayout(new GridLayout(3, 2));
        // loginPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        JLabel usernameLabel = new JLabel("Username:");
        usernameField = new JTextField(10);

        JLabel passwordLabel = new JLabel("Password:");
        passwordField = new JPasswordField(10);

        JButton loginButton = new JButton("Login");
        loginButton.setBackground(new Color(0, 102, 204));
        loginButton.setForeground(Color.WHITE);

        loginButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String username = usernameField.getText();
                String password = new String(((JPasswordField) passwordField).getPassword());
                if (authenticateUser(username, password)) {
                    loginFrame.dispose();
                    createMainGUI();
                } else {
                    showErrorDialog("Invalid username or password.");
                }
            }
        });

        loginPanel.add(usernameLabel);
        loginPanel.add(usernameField);
        loginPanel.add(passwordLabel);
        loginPanel.add(passwordField);
        loginPanel.add(new JLabel(""));
        loginPanel.add(loginButton);

        loginFrame.add(loginPanel, BorderLayout.CENTER);

        loginFrame.setVisible(true);
    }

    private boolean authenticateUser(String username, String password) {
        // authentication logic here
        // Check the username and password against a database.
        // Return true if the user is authenticated, false otherwise.
        return (username.equals("admin") && password.equals("1234"));
    }

    private void createMainGUI() {
        JFrame frame = new JFrame("Bookstore App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 400);
        frame.setResizable(true);

        ImageIcon imgIcon = new ImageIcon("logo.jfif");
        frame.setIconImage(imgIcon.getImage());

        //JPanel for input fields
        JPanel inputPanel = new JPanel(new GridLayout(7, 2));
        inputPanel.setBorder(BorderFactory.createTitledBorder("Add a Book"));

        JLabel titleLabel = new JLabel("Title:");
        titleField = new JTextField(20);

        JLabel authorLabel = new JLabel("Author:");
        authorField = new JTextField(20);

        JLabel priceLabel = new JLabel("Price:");
        priceField = new JTextField(10);

        JLabel quantityLabel = new JLabel("Quantity:");
        quantityField = new JTextField(10);

        JLabel isbnLabel = new JLabel("ISBN:"); 
        isbnField = new JTextField(20); 
    
        JLabel publisherLabel = new JLabel("Publisher:"); 
        publisherField = new JTextField(20);     

        JButton addButton = new JButton("Add Book");
        addButton.setBackground(new Color(0, 102, 204));
        addButton.setForeground(Color.WHITE);
        addButton.addActionListener(e -> addBookToDatabase());

        inputPanel.add(isbnLabel); 
        inputPanel.add(isbnField); 

        inputPanel.add(titleLabel);
        inputPanel.add(titleField);

        inputPanel.add(authorLabel);
        inputPanel.add(authorField);
        
        inputPanel.add(publisherLabel); 
        inputPanel.add(publisherField);  

        inputPanel.add(priceLabel);
        inputPanel.add(priceField);

        inputPanel.add(quantityLabel);
        inputPanel.add(quantityField);
        
        inputPanel.add(new JLabel(""));
        inputPanel.add(addButton);

        //JPanel for displaying data
        JPanel dataPanel = new JPanel(new BorderLayout());
        dataPanel.setBorder(BorderFactory.createTitledBorder("Book List"));

        tableModel = new DefaultTableModel();
        dataTable = new JTable(tableModel);
        tableModel.addColumn("ID");
        tableModel.addColumn("ISBN");
        tableModel.addColumn("Title");
        tableModel.addColumn("Author");
        tableModel.addColumn("Publisher");
        tableModel.addColumn("Price");
        tableModel.addColumn("Quantity(In Stock)");

        dataPanel.add(new JScrollPane(dataTable), BorderLayout.CENTER);

        //JPanel for deleting a book
        JPanel deletePanel = new JPanel(new GridLayout(1, 4));
        deletePanel.setBorder(BorderFactory.createTitledBorder("Delete/Manage a Book"));

        JLabel idLabel = new JLabel("ID:");
        idField = new JTextField(10);

        JButton deleteButton = new JButton("Delete Book");
        deleteButton.setBackground(new Color(204, 0, 0));
        deleteButton.setForeground(Color.WHITE);
        deleteButton.addActionListener(e -> deleteBookFromDatabase());

        JLabel quantityActionLabel = new JLabel("Quantity:");

        quantityActionComboBox = new JComboBox<>(new String[] { "Increment", "Decrement" });
        quantityActionComboBox.setSelectedIndex(0);

        JButton manageQuantityButton = new JButton("Manage Quantity");
        manageQuantityButton.setBackground(new Color(0, 153, 51));
        manageQuantityButton.setForeground(Color.WHITE);
        manageQuantityButton.addActionListener(e -> manageQuantity());

        deletePanel.add(idLabel);
        deletePanel.add(idField);
        deletePanel.add(deleteButton);
        deletePanel.add(quantityActionLabel);
        deletePanel.add(quantityActionComboBox);
        deletePanel.add(manageQuantityButton);

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
                String isbn = resultSet.getString("isbn"); // Get ISBN from the result
                String title = resultSet.getString("title");
                String author = resultSet.getString("author");
                String publisher = resultSet.getString("publisher"); // Get Publisher from the result
                BigDecimal price = resultSet.getBigDecimal("price");
                int quantity = resultSet.getInt("quantity");
    
                // Add a row to the table
                tableModel.addRow(new Object[]{id,isbn, title, author,publisher, price, quantity});
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
            String quantityString = quantityField.getText();
            String isbn = isbnField.getText(); 
            String publisher = publisherField.getText();
    
            // Check if priceString and quantityString are valid numbers
            BigDecimal price;
            int quantity;

            try {
                price = new BigDecimal(priceString);
                quantity = Integer.parseInt(quantityString); // Parse quantityString to an int
            } catch (NumberFormatException e) {
                showErrorDialog("Invalid Price or Quantity: Please enter valid numeric values.");
                return; // Exit the method if price or quantity is invalid
            }
//bh
            String insertQuery = "INSERT INTO books (title, author, price, quantity, isbn, publisher) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);
            preparedStatement.setString(1, title);
            preparedStatement.setString(2, author);
            preparedStatement.setBigDecimal(3, price);
            preparedStatement.setInt(4, quantity);
            preparedStatement.setString(5, isbn); // Set ISBN
            preparedStatement.setString(6, publisher); // Set Publisher
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

    private void manageQuantity() {
        String idString = idField.getText();
        String quantityAction = (String) quantityActionComboBox.getSelectedItem();

        if (idString.isEmpty()) {
            showErrorDialog("Please enter a valid ID.");
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

            if (quantityAction.equals("Increment")) {
                // Increment the quantity
                String incrementQuery = "UPDATE books SET quantity = quantity + 1 WHERE id = ?";
                PreparedStatement incrementStatement = connection.prepareStatement(incrementQuery);
                incrementStatement.setInt(1, id);
                int rowsUpdated = incrementStatement.executeUpdate();
                incrementStatement.close();
            } else {
                // Decrement the quantity
                String decrementQuery = "UPDATE books SET quantity = quantity - 1 WHERE id = ?";
                PreparedStatement decrementStatement = connection.prepareStatement(decrementQuery);
                decrementStatement.setInt(1, id);
                int rowsUpdated = decrementStatement.executeUpdate();
                decrementStatement.close();
            }

            connection.close();
            loadTableData();
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

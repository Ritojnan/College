import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class PanelNavigation {
    private JPanel panel1;
    private JPanel panel2;
    private JFrame frame;

    public PanelNavigation() {
        frame = new JFrame("JPanel Navigation Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);

        // Create two JPanel components
        panel1 = new JPanel();
        panel2 = new JPanel();

        // Create buttons for navigation
        JButton nextButton = new JButton("Next");
        JButton backButton = new JButton("Back");

        // Add action listeners to the buttons
        nextButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                frame.getContentPane().removeAll();
                frame.getContentPane().add(panel2);
                frame.revalidate();
                frame.repaint();
            }
        });

        backButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                frame.getContentPane().removeAll();
                frame.getContentPane().add(panel1);
                frame.revalidate();
                frame.repaint();
            }
        });

        // Add components to the panels
        panel1.add(new JLabel("This is Panel 1"));
                panel1.add(new JLabel("This is Panel 3"));

        panel2.add(new JLabel("This is Panel 2"));

        panel1.add(nextButton);
        panel2.add(backButton);

        // Set the initial panel
        frame.getContentPane().add(panel1);

        frame.setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new PanelNavigation();
            }
        });
    }
}

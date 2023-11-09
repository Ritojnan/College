package exp_15;

import java.awt.*;
import java.awt.event.*;

class Form extends Frame implements ActionListener {
    Label l1, l2, l3, l4, l5;
    TextField tf1, tf2, tf3, tf4;
    Button b1, b2;

    Form() {
        // Set a light blue background color
        setBackground(new Color(173, 216, 230));
    setTitle("Form");

        tf1 = new TextField();
        tf2 = new TextField();
        tf3 = new TextField();
        tf4 = new TextField();

        // Set button colors
        b1 = new Button("Submit");
        b1.setBackground(new Color(46, 139, 87)); // Green
        b1.setForeground(Color.WHITE); // White text

        b2 = new Button("Cancel");
        b2.setBackground(new Color(220, 20, 60)); // Crimson
        b2.setForeground(Color.WHITE); // White text

        // Set label text colors
        l1 = new Label("Name:");
        l1.setForeground(new Color(0, 102, 204)); // Dark blue

        l2 = new Label("AGE:");
        l2.setForeground(new Color(0, 102, 204)); // Dark blue

        l3 = new Label("CLASS");
        l3.setForeground(new Color(0, 102, 204)); // Dark blue

        l4 = new Label("Roll no:");
        l4.setForeground(new Color(0, 102, 204)); // Dark blue


        setLayout(new GridLayout(5, 2));

        add(l1);
        add(tf1);
        add(l2);
        add(tf2);
        add(l3);
        add(tf3);
        add(l4);
        add(tf4);
        add(b1);
        add(b2);

        b1.addActionListener(this);
        b2.addActionListener(this);

        setSize(600, 200);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == b1) {
            l5.setText("Details Submitted Successfully.");
        }
        if (e.getSource() == b2) {
            tf1.setText("");
            tf2.setText("");
            tf3.setText("");
            tf4.setText("");
        }
    }

    public void paint(Graphics g) {
        // Set the background color
        this.setBackground(new Color(240, 248, 255)); // Alice Blue
        super.paint(g);
    }

}

public class GUI {
    public static void main(String args[]) {
        Form f = new Form();
    }
}

import tkinter as tk

class SudokuGUI:
    def __init__(self, master):
        self.master = master
        self.master.title("Sudoku Solver")

        self.puzzle = [[5, 3, 0, 0, 7, 0, 0, 0, 0], 
                       [6, 0, 0, 1, 9, 5, 0, 0, 0], 
                       [0, 9, 8, 0, 0, 0, 0, 6, 0], 
                       [8, 0, 0, 0, 6, 0, 0, 0, 3], 
                       [4, 0, 0, 8, 0, 3, 0, 0, 1], 
                       [7, 0, 0, 0, 2, 0, 0, 0, 6], 
                       [0, 6, 0, 0, 0, 0, 2, 8, 0], 
                       [0, 0, 0, 4, 1, 9, 0, 0, 5], 
                       [0, 0, 0, 0, 8, 0, 0, 0, 0]]

        self.canvas = tk.Canvas(self.master, width=450, height=450)
        self.canvas.pack()

        self.draw_grid()
        self.draw_puzzle()

    def draw_grid(self):
        for i in range(10):
            color = "black" if i % 3 == 0 else "gray"
            self.canvas.create_line(50 * i, 0, 50 * i, 450, fill=color)
            self.canvas.create_line(0, 50 * i, 450, 50 * i, fill=color)

    def draw_puzzle(self):
        for i in range(9):
            for j in range(9):
                if self.puzzle[i][j] != 0:
                    self.canvas.create_text(
                        j * 50 + 25, i * 50 + 25,
                        text=str(self.puzzle[i][j]),
                        font=("Helvetica", 16)
                    )

def main():
    root = tk.Tk()
    sudoku_gui = SudokuGUI(root)
    root.mainloop()

if __name__ == "__main__":
    main()

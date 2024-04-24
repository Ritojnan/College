import tkinter as tk
from itertools import product

# Constraint
def is_magic_square(square):
    n = len(square)
    magic_sum = n * (n**2 + 1) // 2
    # Check rows and columns
    if any(sum(row) != magic_sum or sum(col) != magic_sum for row, col in zip(square, zip(*square))):
        return False
    # Check diagonals
    if sum(square[i][i] for i in range(n)) != magic_sum or sum(square[i][n - i - 1] for i in range(n)) != magic_sum:
        return False
    return True

# Backtracking
def solve_magic_square(square):
    n = len(square)
    empty_cells = [(i, j) for i, j in product(range(n), repeat=2) if square[i][j] == 0]
    print(empty_cells)
    def solve_recursive(index):
        if index == len(empty_cells):
            return is_magic_square(square)
        row, col = empty_cells[index]
        for num in range(1, n**2 + 1):
            square[row][col] = num
            if solve_recursive(index + 1):
                return True
        square[row][col] = 0
        return False
    if solve_recursive(0):
        return square
    else:
        return None

class MagicSquareGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Magic Square Solver")
        
        self.square_size = 3
        self.entries = []
        
        self.create_widgets()
    
    def create_widgets(self):
        self.label = tk.Label(self.root, text="Enter values in the magic square:")
        self.label.grid(row=0, column=0, columnspan=self.square_size)
        
        for i in range(self.square_size):
            for j in range(self.square_size):
                entry = tk.Entry(self.root, width=5)
                entry.grid(row=i+1, column=j)
                self.entries.append(entry)
                
        self.solve_button = tk.Button(self.root, text="Solve", command=self.solve)
        self.solve_button.grid(row=self.square_size+1, columnspan=self.square_size)
        
        self.result_label = tk.Label(self.root, text="")
        self.result_label.grid(row=self.square_size+2, columnspan=self.square_size)
    
    def solve(self):
        square = []
        for i in range(self.square_size):
            row = []
            for j in range(self.square_size):
                entry = self.entries[i*self.square_size + j].get()
                if entry.isdigit():
                    row.append(int(entry))
                else:
                    row.append(0)
            square.append(row)
        
        solution = solve_magic_square(square)
        if solution:
            self.result_label.config(text="Solution found:")
            for i in range(self.square_size):
                for j in range(self.square_size):
                    self.entries[i*self.square_size + j].delete(0, tk.END)
                    self.entries[i*self.square_size + j].insert(0, solution[i][j])
        else:
            self.result_label.config(text="No solution found.")
            

if __name__ == "__main__":
    root = tk.Tk()
    app = MagicSquareGUI(root)
    root.mainloop()

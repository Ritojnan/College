import numpy as np

def create_array():
    rows = int(input("Enter the number of rows: "))
    cols = int(input("Enter the number of columns: "))
    arr = np.zeros((rows, cols))
    for i in range(rows):
        for j in range(cols):
            arr[i][j] = float(input("Enter element at position ({},{}) : ".format(i+1, j+1)))
    return arr

def sum_array(arr):
    return np.sum(arr)

def sort_array(arr):
    return np.sort(arr)

def compare_arrays(arr1, arr2):
    return np.array_equal(arr1, arr2)

def menu():
    print("1. Create Array")
    print("2. Sum of Array")
    print("3. Sort Array")
    print("4. Compare Two Arrays")
    print("5. Exit")

def main():
    while True:
        menu()
        choice = int(input("Enter your choice: "))

        if choice == 1:
            print("Array 1:")
            array1 = create_array()
            print("Array 2:")
            array2 = create_array()
        elif choice == 2:
            print("Sum of Array 1:", sum_array(array1))
            print("Sum of Array 2:", sum_array(array2))
        elif choice == 3:
            print("Sorted Array 1:", sort_array(array1))
            print("Sorted Array 2:", sort_array(array2))
        elif choice == 4:
            if compare_arrays(array1, array2):
                print("Arrays are equal.")
            else:
                print("Arrays are not equal.")
        elif choice == 5:
            print("Exiting...")
            break
        else:
            print("Invalid choice! Please try again.")

if __name__ == "__main__":
    main()

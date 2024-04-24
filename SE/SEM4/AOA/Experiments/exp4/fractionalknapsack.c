#include<stdio.h>

// Structure for an item which stores weight and corresponding value
struct Item {
    int weight;
    int value;
};

// Function to sort the items based on their value per unit weight in non-increasing order
void sortByValuePerWeight(struct Item items[], int n) {
    struct Item temp;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            double ratio1 = (double)items[j].value / items[j].weight;
            double ratio2 = (double)items[j+1].value / items[j+1].weight;
            if (ratio1 < ratio2) {
                temp = items[j];
                items[j] = items[j+1];
                items[j+1] = temp;
            }
        }
    }
}

// Function to solve fractional knapsack problem
double fractionalKnapsack(int W, struct Item items[], int n) {
    sortByValuePerWeight(items, n); // Sort the items based on value per unit weight
    int currentWeight = 0; // Current weight in knapsack
    double finalValue = 0.0; // Final value of items selected

    for (int i = 0; i < n; i++) {
        // If adding the next item will not exceed the capacity of the knapsack
        if (currentWeight + items[i].weight <= W) {
            currentWeight += items[i].weight;
            finalValue += items[i].value;
        } else {
            // If adding the next item will exceed the capacity of the knapsack
            int remainingWeight = W - currentWeight;
            finalValue += items[i].value * ((double)remainingWeight / items[i].weight);
            break; // Break because knapsack is full
        }
    }

    return finalValue;
}

int main() {
    int W; // Capacity of knapsack
    printf("Enter the capacity of the knapsack: ");
    scanf("%d", &W);

    int n; // Number of items
    printf("Enter the number of items: ");
    scanf("%d", &n);

    struct Item items[n]; // Array of items

    // Input each item's weight and value
    printf("Enter the weight and value of each item:\n");
    for (int i = 0; i < n; i++) {
        printf("Item %d:\n", i+1);
        printf("Weight: ");
        scanf("%d", &items[i].weight);
        printf("Value: ");
        scanf("%d", &items[i].value);
    }

    // Calculate and print the maximum value that can be obtained
    double maxValue = fractionalKnapsack(W, items, n);
    printf("Maximum value that can be obtained = %.2lf\n", maxValue);

    return 0;
}

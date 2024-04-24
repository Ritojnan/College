#include <stdio.h>
#include <stdbool.h>

int totalCalls = 0; // Global variable to count total calls to subset sum procedure

// Function to print subsets that sum up to a given target recursively
void subsetSum(int arr[], int n, int target, int sum, int idx, bool subset[]) {
    totalCalls++; // Increment the count of calls to subset sum procedure
    // printf("%d\n",arr[idx]);
    if (sum == target) {
        // Print the subset
        printf("Subset found: {");
        for (int i = 0; i < n; i++) {
            if (subset[i]) {
                printf("%d ", arr[i]);
            }
        }
        printf("}\n");
        return;
    }

    // If we have reached the end of the array or the sum exceeds the target, return
    if (idx >= n || sum > target) {
        return;
    }

    // Include current element in the subset and recur
    subset[idx] = true;
    subsetSum(arr, n, target, sum + arr[idx], idx + 1, subset);

    // Exclude current element from the subset and recur
    subset[idx] = false;
    subsetSum(arr, n, target, sum, idx + 1, subset);
}

int main() {
    int n, target;

    printf("Enter the number of elements in the set: ");
    scanf("%d", &n);

    int arr[n];
    bool subset[n];

    printf("Enter the elements of the set:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        subset[i] = false;
    }

    printf("Enter the target sum: ");
    scanf("%d", &target);

    // Find subsets that sum up to the target
    subsetSum(arr, n, target, 0, 0, subset);

    printf("Total calls to subset sum procedure: %d\n", totalCalls);

    return 0;
}
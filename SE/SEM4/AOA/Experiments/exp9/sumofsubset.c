// Sum of subset
// Time Complexity: O(2^n)
// Space Complexity: O(n)

#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
int subsetsum(int arr[], int n, int sum)
{
    if (sum == 0)
        return 1;
    if (n == 0)
        return 0;
    if (arr[n - 1] > sum)
        return subsetsum(arr, n - 1, sum);
    return subsetsum(arr, n - 1, sum) || subsetsum(arr, n - 1, sum - arr[n - 1]);
}

int main()
{
    int arr[] = {1, 2, 3, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    int sum = 5;
    if (subsetsum(arr, n, sum))
        printf("Yes");
    else
        printf("No");
    return 0;
}
// Time Complexity: O(2^n) The above solution may try all subsets of the given set in the worst case. Therefore time complexity of the above solution is exponential.
// Auxiliary Space: O(n) where n is recursion stack space.

#include <stdio.h>
#include <stdbool.h>

int count = 0;

void sos(int arr[], int n, int target, int sum, int idx, bool subset[])
{
    count++;
    if (sum == target)
    {
        printf("Subset found:{");
        for (int i = 0; i < n; i++)
        {
            if (subset[i])
            {
                printf("%d ", arr[i]);
            }
        }
        printf("}\n");
        return;
    }

    if (idx >= n || sum > target)
    {
        return;
    }

    subset[idx] = 1;
    sos(arr, n, target, sum + arr[idx], idx + 1, subset);

    subset[idx] = 0;
    sos(arr, n, target, sum, idx + 1, subset);
}

int main()
{
    printf("Enter number of numbers:");
     int n;
    scanf("%d", &n);
    int arr[n];
    bool subset[n];

    printf("Enter numbers:\n");
     for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
        subset[i] = false;
    }

    int target;
    printf("Target Sum:");
    scanf("%d", &target);

    // add contition if sum is 0
    sos(arr, n, target, 0, 0, subset);
    printf("Total Count:%d",count);
    return 0;
}
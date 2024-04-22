// Fractional Knapsack Problem
#include <stdio.h>

int max(int a, int b)
{
    return (a > b) ? a : b;
}

void FractionalKnapsack(int W, int n, int wt[], int val[])
{
    int i, j;
    int K[n + 1][W + 1];
    for (i = 0; i <= n; i++)
    {
        for (j = 0; j <= W; j++)
        {
            if (i == 0 || j == 0)
                K[i][j] = 0;
            else if (wt[i - 1] <= j)
                K[i][j] = max(val[i - 1] + K[i - 1][j - wt[i - 1]], K[i - 1][j]);
            else
                K[i][j] = K[i - 1][j];
        }
    }
    int res = K[n][W];
    printf("The maximum value is %d\n", res);
}

int main()
{
    int W = 50;
    int val[] = { 60, 100, 120 };
    int wt[] = { 10, 20, 30 };
    int n = sizeof(val) / sizeof(val[0]);
    FractionalKnapsack(W, n, wt, val);
    return 0;
}
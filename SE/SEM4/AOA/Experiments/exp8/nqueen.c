// N Queens
// Time Complexity: O(n!)
// Space Complexity: O(n)

#include <stdio.h>

int isSafe(int board[10][10], int i, int j, int n)
{
    int x, y;
    for (x = 0; x < n; x++)
    {
        if (board[x][j] == 1)
            return 0;
    }
    for (x = i, y = j; x >= 0 && y >= 0; x--, y--)
    {
        if (board[x][y] == 1)
            return 0;
    }
    for (x = i, y = j; x >= 0 && y < n; x--, y++)
    {
        if (board[x][y] == 1)
            return 0;
    }
    return 1;
}

int solveNQUtil(int board[10][10], int col, int n)
{
    if (col >= n)
        return 1;
    for (int i = 0; i < n; i++)
    {
        if (isSafe(board, i, col, n))
        {
            board[i][col] = 1;
            if (solveNQUtil(board, col + 1, n) == 1)
                return 1;
            board[i][col] = 0;
        }
    }
    return 0;
}

int solveNQ(int n)
{
    int board[10][10] = {0};
    if (solveNQUtil(board, 0, n) == 0)
    {
        printf("Solution does not exist");
        return 0;
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf(" %d ", board[i][j]);
        }
        printf("\n");
    }
    return 1;
}

int main()
{
    int n;
    printf("Enter the number of queens: ");
    scanf("%d", &n);
    solveNQ(n);
    return 0;
}

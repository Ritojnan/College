#include <stdio.h>
#include <stdlib.h>

#define MAX_PROCESSES 10
#define MAX_RESOURCES 10
int need[MAX_PROCESSES][MAX_RESOURCES],
    allocate[MAX_PROCESSES][MAX_RESOURCES],
    max[MAX_PROCESSES][MAX_RESOURCES],
    avail[MAX_RESOURCES];
int np, nr;
void input_data()
{
    printf("Ritojnan Mukherjee C23-144\n");
    printf("Enter no. of processes and resources : ");
    scanf("%d %d", &np, &nr);
    printf("Enter allocation matrix -->\n");
    for (int i = 0; i < np; i++)
    {
        for (int j = 0; j < nr; j++)
        {
            scanf("%d", &allocate[i][j]);
        }
    }
    printf("Enter max matrix -->\n");
    for (int i = 0; i < np; i++)
    {
        for (int j = 0; j < nr; j++)
        {
            scanf("%d", &max[i][j]);
        }
    }
    printf("Enter available matrix -->\n");
    for (int j = 0; j < nr; j++)
    {
        scanf("%d", &avail[j]);
    }
}
void calc_need()
{
    for (int i = 0; i < np; i++)
    {
        for (int j = 0; j < nr; j++)
        {
            need[i][j] = max[i][j] - allocate[i][j];
        }
    }
}
int check(int i)
{
    for (int j = 0; j < nr; j++)
    {
        if (avail[j] < need[i][j])
        {
            return 0; // False
        }
    }
    return 1; // True
}
int check_request(int p, int request[])
{
    for (int j = 0; j < nr; j++)
    {
        if (request[j] > need[p][j] || request[j] > avail[j])
        {
            return 0; // False
        }
    }
    return 1; // True
}
void handle_request(int p, int request[])
{
    if (check_request(p, request))
    {
        for (int j = 0; j < nr; j++)
        {
            avail[j] -= request[j];
            allocate[p][j] += request[j];
            need[p][j] -= request[j];
        }
        printf("Request granted.\n");
    }
    else
    {
        printf("Request denied. Process must wait.\n");
    }
}
void is_safe()
{
    input_data();
    calc_need();
    int done[MAX_PROCESSES] = {0};
    int j = 0;
    while (j < np)
    {
        int allocated = 0;
        for (int i = 0; i < np; i++)
        {
            if (!done[i] && check(i))
            {
                for (int k = 0; k < nr; k++)
                {
                    avail[k] = avail[k] - need[i][k] + max[i][k];
                }
                printf("Allocated process : %d\n", i);
                allocated = done[i] = 1;
                j++;
            }
        }
        if (!allocated)
        {
            break;
        }
    }
    if (j == np)
    {
        printf("\nSafely allocated\n");
    }
    else
    {
        printf("All processes can't be allocated safely\n");
    }
    // Example request handling
    int process_id, request[MAX_RESOURCES];
    printf("\nEnter process id for request: ");
    scanf("%d", &process_id);
    printf("Enter resource request: ");
    for (int i = 0; i < nr; i++)
    {
        scanf("%d", &request[i]);
    }
    handle_request(process_id, request);
}
int main()
{
    is_safe();
    return 0;
}

#include <stdio.h>
int main()
{
    int mainmem;
    printf("enter the total main memory available in os:\n");
    scanf("%d", &mainmem);
    int tempmem = mainmem;
    int process[50];
    int part = 0;
    char ch = 'y';
    for (int i = 0; ch == 'y'; i++)
    {
        printf("\nEnter memory required for process %d (in Bytes) -- ", i + 1);
        scanf("%d", &process[i]);
        if (process[i] <= tempmem)
        {
            printf("\nMemory is allocated for Process %d ", i + 1);
            tempmem = tempmem - process[i];
            part++;
        }
        else
        {
            printf("\nMemory is Full, process cannot be allocated any memory\n");
            break;
        }
        printf("\nDo you want to continue(y/n) -- ");
        scanf(" %c", &ch);
    }
    
    printf("               VARIABLE PARTITIONING           \n");
    printf("\nPROCESS NO.\t\tMEMORY ALLOCATED ");
    for (int i = 0; i < part; i++)
    {
        printf("\n\tP%d\t\t%d",i + 1, process[i]);
    }
    printf("\n\nTotal main Memory Available -- %d", mainmem);
    printf("\nTotal no. of partitions -- %d", part);
    printf("\nTotal Memory Allocated is %d", mainmem - tempmem);
    printf("\nTotal External Fragmentation is %d", tempmem);
    return 0;
}


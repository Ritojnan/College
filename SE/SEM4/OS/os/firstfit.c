#include <stdio.h>
void main()
{
    int noofblocks;
    printf("enter the no. of blocks:\n");
    scanf("%d", &noofblocks);
    int blocks[noofblocks];
    int noofprocesses;
    printf("enter the no. of processes:\n");
    scanf("%d", &noofprocesses);
    int processes[noofprocesses];
    for (int i = 0; i < noofblocks; i++)
    {
        printf("enter the size of the block no.%d:\n", i + 1);
        scanf("%d", &blocks[i]);
    }
    for (int i = 0; i < noofprocesses; i++)
    {
        printf("enter the size of the process no.%d:\n", i + 1);
        scanf("%d", &processes[i]);
    }

    int flags[noofblocks];
    int allocation[noofblocks];
    int remainingsize[noofblocks];

    for (int i = 0; i < noofblocks; i++)
    {
       allocation[i] = -1;
       flags[i] = 0;
       remainingsize[i] = blocks[i];
    }

    
    for (int i = 0; i < noofprocesses; i++)
    { // allocation as per first fit
        for (int j = 0; j < noofblocks; j++)
        {
            if (flags[j] == 0 && blocks[j] >= processes[i])
            {
                remainingsize[j] = blocks[j] - processes[i];
                allocation[j] = i;
                flags[j] = 1;
                break;
            }
        }
    }

    //printing
    printf("\nFIRST FIT\n");
    printf("BLOCK NO.\tBLOCK SIZE\tPROCESSS NO.\tPROCESS SIZE\tREAMINING BLOCK SIZE\n");
    for(int k =0 ; k < noofblocks ; k++)
    {
        printf("%d\t\t%d\t\t",k+1, blocks[k]);
        if(flags[k] == 1)
        {
            printf("%d\t\t%d\t\t\t%d\n",allocation[k]+1,processes[allocation[k]], remainingsize[k]);
        }
        else
        {
            printf("\t\tNOT ALLOCATED\t\t%d\n",remainingsize[k]);
        }
    }
}
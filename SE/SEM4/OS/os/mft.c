#include<stdio.h>
int main()
{
    int mainmem;
    printf("enter the total main memory available in os:\n");
    scanf("%d",&mainmem);
    int blocksize;
    printf("enter the total partitions in the main memory available in os:\n");
    scanf("%d",&blocksize);
    int part;
    part = mainmem/blocksize;
    int externalfrag = mainmem - blocksize*part;
    int internalfrag =0 ;
    int n;
    printf("enter the total no.of processes:\n");
    scanf("%d",&n);
    int process[n];
    for(int i =0; i< n; i++)
    {
        printf("enter the process size for process no. P%d\n",i+1);
        scanf("%d",&process[i]);
    }
    int p =0;
    printf("               FIXED PARTITIONING           \n");
    printf("process no.\tsize of process\tallocation status\tinternal fragmentation\n");
    for(int i = 0; i< n && p < part;i++)
    {
        printf("P%d\t\t%d\t\t",i+1,process[i]);
        if(process[i]>blocksize)
        {
            printf("\tNO\t\tNIL\t\t\n");
        }
        else
        {
            printf("\tYES\t\t%d\t\t\n",blocksize-process[i]);
            internalfrag = internalfrag + blocksize - process[i];
            p++;
        }
    }
    printf("Memory is full and therefore remaining processes cannot be allocated\n");
    printf("total no. of partitions or blocks available in the main memory = %d\n",part);
    printf("total internal fragmentation = %d BYTES\n",internalfrag);
    printf("total external fragmentation = %d BYTES\n",externalfrag);
return 0;

}
#include<stdio.h>
#include<math.h>

int size;


void sstf(int arr[], int head)
{
    
    int seekcount = 0;
    int distance = 0;
    int current;
    for(int i = 0; i< size; i++)
    {
        current = arr[i];
        distance = fabs(current-head);
        seekcount = seekcount + distance;
        head= current;
    }
    printf("total seek count = %d\n",seekcount);
    printf("fcfs sequence is: \n");
    for (int i = 0; i < size; i++)
    {
        printf("%d ->", arr[i]);
    }

}
int main()
{
    printf("enter the size of array:\n");
    scanf("%d",&size);   
    int arr[size];
    int head;
    printf("enter the head position:");
    scanf("%d",&head);
   
    for(int i = 0; i<size;i++)
    {
        printf("enter the arrray elements:");
        scanf("%d",&arr[i]);
    }
    fcfs(arr,head);
    return 0;

}
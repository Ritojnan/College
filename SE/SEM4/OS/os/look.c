#include<stdio.h>
#include<math.h>

int size;


void look(int arr[], int head , int move, int maxelement)
{

    int seekcount = 0;
    int distance =0;
    for(int i=0;i<size;i++)
    {
        for( int j=0;j<size-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                int temp;
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    int index;
    for(int i=0;i<size;i++)
    {
        if(head<arr[i])
        {
            index=i;
            break;
        }
    }
   
    // if movement is towards right
    if(move==1)
    {
        for(int i=index;i<size;i++)
        {
            distance = fabs(arr[i]-head);
            seekcount=seekcount + distance;
            head=arr[i];
        }
    
        for(int i = index - 1; i>=0 ; i--)
        {
            distance = fabs(arr[i]-head);
            seekcount=seekcount + distance;
            head=arr[i];
        }
    }
    else
    {
        for(int i=index-1;i>=0;i--)
        {
            distance = fabs(arr[i]-head);
            seekcount=seekcount+ distance;
            head=arr[i];
        }

        for( int i=index;i< size;i++)
        {
             
            distance = fabs(arr[i]-head);
            seekcount=seekcount+ distance;
            head=arr[i];
            
        }
    }
    printf("Total head movement is %d",seekcount);
}
int main()
{
    printf("enter the size of array:\n");
    scanf("%d",&size);   
    int arr[size];
    int head;
    printf("enter the head position:");
    scanf("%d",&head);
    int maximum;
    printf("enter the maximum disk position:");
    scanf("%d",&maximum);
    int move;
    printf("enter 1 for moving towards right and 0 for moving towards left:");
    scanf("%d",&move);
   
    for(int i = 0; i<size;i++)
    {
        printf("enter the arrray elements:");
        scanf("%d",&arr[i]);
    }
    look(arr, head, move, maximum);
    return 0;

}







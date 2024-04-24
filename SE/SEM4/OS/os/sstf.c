#include <stdio.h>
#include <math.h>

int size;

void sstf(int arr[], int head)
{
    int temp[size];
    int j=0;
    int count = 0;        //while loop iterator
    int seekcount = 0;    //total head movement
    int distance = 0;     //distance between 2 nodes
    int current;          //current node 
    while (count != size)
    {

        int index;        //position of an array element
        int min = 10000;  //minimum number intialized to any random number
        for (int i = 0; i < size; i++)
        {

            current = arr[i];
            distance = fabs(current - head);
            if (min > distance)
            {
                min = distance;
                index = i;
            }
        }
        temp[j] = head;
        seekcount = seekcount + min;
        head = arr[index];
        arr[index] = 10000; 
        temp[j] = head;   //because when count is 0 then the min element is stored in the sequence and when on the next iteration of the count the min element is chosen as the head and the distance will be computed to 0 which is the min but it is not we need to move to next element so wo assign it to a very big number then that difference ie distance will always be the biggest amongst the sequence.
        count++;
        j++;
    }
    printf("total seek count = %d\n", seekcount);
    printf("the sstf sequence is: \n");
    for(int k = 0; k < size; k++)
    {
        printf("%d ->",temp[k]);
    }
}
int main()
{
    printf("enter the size of array:\n");
    scanf("%d", &size);
    int arr[size];
    int head;
    printf("enter the head position:");
    scanf("%d", &head);

    for (int i = 0; i < size; i++)
    {
        printf("enter the arrray elements:");
        scanf("%d", &arr[i]);
    }
    sstf(arr, head);
    return 0;
}
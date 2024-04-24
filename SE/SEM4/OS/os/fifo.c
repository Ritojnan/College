#include <stdio.h>

int size;
int frameno;
void fifo(int pages[])
{
    int frame[frameno];
    int pagefaults = 0;
    int s = 0;
    int pagehits=0;

    for (int i = 0; i < frameno; i++)
    {
        frame[i] = -1;
    }
    printf("\t\t\tFIRST IN FIRST OUT\n");
    printf("page\t\t\tframe1\t\t\tframe2\t\t\tframe3\n");
    for (int m = 0; m < size; m++)
    {
        s = 0;
        for (int n = 0; n < frameno; n++)
        {
            if (frame[n] == pages[m])
            {
                //page hit
                pagehits++;
                printf("page hit");
                s++;
                pagefaults--;
            }
        }
        pagefaults++;
        if ((pagefaults <= frameno) && (s == 0))
        {
            //page not found and has free frame
            frame[m] = pages[m];
        }
        else if (s == 0)
        {
            //page not found and no free frame so fifo replacement policy!
            frame[(pagefaults - 1) % frameno] = pages[m];
        }
        printf("\n");
        printf("%d\t\t\t", pages[m]);
        for (int k = 0; k < frameno; k++)
        {
            if (frame[k] != -1)
            {
                printf("%d\t\t\t", frame[k]);
            }
            else
            {
                printf("-\t\t\t");
            }
        }
    }
    printf("\ntotal no.of page hits are: %d\n", pagehits);
    printf("\ntotal no.of page faults are: %d\n", pagefaults);
}
int main()
{
    printf("enter the no.of pages:\n");
    scanf("%d", &size);
    int arr[size];
    printf("enter the no.of frames:\n");
    scanf("%d", &frameno);
    for (int i = 0; i < size; i++)
    {
        printf("enter the arrray elements:");
        scanf("%d", &arr[i]);
    }
    fifo(arr);
    return 0;
}
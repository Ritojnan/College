




#include<stdio.h>
int size;
int frameno;
void lru(int pages[])
{
    int frames[frameno];
    int flag1, flag2, flag3;
    int pagefaults = 0;
    int pagehits = 0;
    int min, pos;
    int counter=0;
    int temp[frameno];
    for(int i = 0; i< frameno; ++i)
    {
        frames[i] = -1;
    }
    for(int pageindex = 0; pageindex <size;++pageindex)
    {
        flag1=0;
        flag2=0;
        for(int j = 0; j< frameno; ++j)
        {
            if(frames[j]==pages[pageindex])
            {
                //page hit
                pagehits++;
                counter++;
                temp[j] = counter; 
                flag1 = 1;
                flag2 = 1;
                break;
            }
        }
        if(flag1 == 0) //page not found and has free frame
        {
            for(int j = 0 ; j<frameno; ++j)
            {
                if (frames[j] == -1)
                {
                    pagefaults++;
                    counter++;
                    frames[j] = pages[pageindex];
                    temp[j] =counter;
                    flag2 = 1;
                    break;
                }
            }
        }
        if (flag2 == 0)
        {
            int minimum = temp[0];
            int pos = 0;
            for (int j = 1; j < frameno; ++j)
            {
                if (min > temp[j])
                {
                    min = temp[j];
                    pos = j;
                }
            }
            counter++;
            pagefaults++;
            frames[pos] = pages[pageindex];
            temp[pos] = counter;
        }
        printf("\n");
        for(int j = 0; j < frameno;++j)
        {
            printf("%d\t", frames[j]);
        }
    }
    printf("\nTOTAL NO.OF PAGE FAULTS = %d", pagefaults);
    printf("\nTOTAL NO.OF PAGE HITS   = %d", pagehits);
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
    lru(arr);
    return 0;
}
#include<stdio.h>
int size;
int frameno;
void optimal(int pages[])
{
    int frames[frameno];
    int flag1, flag2, flag3;
    int pagefaults = 0;
    int pagehits = 0;
    int max, pos;
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
                //frames[j] = pages[pageindex];
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
                    frames[j] = pages[pageindex];
                    flag2 = 1;
                    break;
                }
            }
        }
        if(flag2 == 0) // page not found and no free frame 
        {
            flag3 = 0;
            for(int j=0; j<frameno;++j)
            {
                temp[j]= -1;
                for(int k = pageindex+1; k<size;++k)
                {
                    if(frames[j]==pages[k])
                    {
                        temp[j] = k;
                        break;
                    }
                }
            }
            for(int j =0 ;j<frameno;++j)
            {
                if(temp[j]== -1)
                {
                    pos =j;
                    flag3 =1;
                    break;
                }
            }
            if(flag3 == 0)
            {
                max = temp[0];
                pos = 0;
                for(int j = 1; j< frameno; ++j)
                {
                    if(max< temp[j])
                    {
                        max = temp[j];
                        pos = j;
                    }
                }
            }
            frames[pos] = pages[pageindex];
            pagefaults++;
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
    optimal(arr);
    return 0;
}
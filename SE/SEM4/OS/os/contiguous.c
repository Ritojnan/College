#include<stdio.h>
struct file
{
    int fname;
    int start;
    int length;
};

int main()
{
    int num;
    printf("enter the no.of files:\n");
    scanf("%d",&num);
    struct  file f[num];
    int size;
    printf("enter the size of the disk:\n");
    scanf("%d",&size);
    int disk[size];
    for(int i = 0; i< size; i++)
    {
        disk[i] = 0;
    }
    for(int  i = 0; i < num; i++)
    {
        f[i].fname = i+1;
        printf("enter the length of the file:\n");
        scanf("%d",&f[i].length);
        printf("enter the start of the file:\n");
        scanf("%d",&f[i].start);
    }
    //printing
    printf("FILE NAME\tFILE LENGTH\tSTART BLOCK\n");
    for(int  i = 0; i < num; i++)
    {
        printf("%d\t\t%d\t\t%d\t\t\n",f[i].fname,f[i].length,f[i].start);
    }
    //allocation
    
    for(int i = 0 ; i < num ; i++)
    {
        int flag = 0;
        for(int j = f[i].start ; j<(f[i].start+f[i].length) ;j++ )
        {
            if (disk[j] == 0)
            {
                flag++;
            }
        }
        if(f[i].length == flag)
        {
            for(int j = f[i].start ; j <(f[i].start + f[i].length); j++)
            {
                disk[j] = 1;
            }
            printf("the file F%d is allocated to the disk \n",f[i].fname);
            
        }
        else
        {
            printf("the disk is occupied and could'nt allocate file no. F%d \n",f[i].fname);
        }
    }
    //printing the allocation
    printf("\nALLOCATION OF THE DISK IS:\n")
    for(int i = 0; i< size; i++)
    {
        printf("DISK NO.%d------>%d\n",i,disk[i]);
    }
    return 0;

}
#include<stdio.h>
struct file{
    int fname;
    int nob;
    int noblock[50];
};
int main()
{
    int size;
    printf("enter the size of the disk:\n");
    scanf("%d",&size);
    int disk[size];
    for(int i = 0; i< size; i++)
    {
        disk[i] = 0;
    }
    int n;
    printf("enter the n0. of files:\n");
    scanf("%d",&n);
    struct file f[n];
    for(int  i = 0; i < n; i++)
    {
        f[i].fname = i+1;
        printf("enter the no. of blocks in the file%d:\n",i+1);
        scanf("%d",&f[i].nob);
        printf("enter the no. of blocks of the file%d:\n",i+1);
        for(int j =0; j< f[i].nob; i++)
        {
            scanf("%d",&f[i].noblock[j]);
        }
    }
    for(int i = 0 ; i < n ; i++)
    {
        int flag = 0;
        for(int j = 0; j < f[i].nob ;j++ )
        {
            if (disk[j] == 0)
            {
                flag++;
            }
        }
        if(f[i].nob == flag)
        {
            for(int j = 0; j < f[i].nob; j++)
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
    printf("\nALLOCATION OF THE DISK IS:\n");
    for(int i = 0; i< size; i++)
    {
        printf("DISK NO.%d------>%d\n",i,disk[i]);
    }
    return 0;

    

    

    
    return 0;

}
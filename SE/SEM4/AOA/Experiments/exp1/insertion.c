//Time Complexity: O(n^2)
//Space Complexity: O(1)

#include <stdio.h>

void insertion_sort(int arr[],int n){
    for(int i=1;i<n;i++){

        int value=arr[i];
        int hole =i;

        while(hole>0 && arr[hole-1]>value){
            arr[hole]=arr[hole-1];
            hole=hole-1;
        }

        arr[hole]=value;

        printf("Pass %d: ",i);
        for (int i = 0; i < n; i++)
        {
            printf("%d ", arr[i]);
        }
        printf("\n");
        
    }
    
}
int main() {
    int arr[]={2,62,1,44,6,72,9,32};
    int n=sizeof(arr)/sizeof(arr[0]);
    printf("Initial array: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    insertion_sort(arr,n);
    return 0;
}
#include<stdio.h>
void swap(int *a,int *b){
	int c;
	c=*a;
	*a=*b;
	*b=c;
}
int partition(int low,int high,int a[]){
	int pivot=a[low];
	int i,j;
	i=low,j=high;
	while(i<j){
		do{
			i++;
		}while(a[i]<=pivot);
		do{
			j--;
		}while(a[j]>pivot);
		if(i<j)
			swap(&a[i],&a[j]);
	}
	swap(&a[low],&a[j]);
	return j;
}
void Quicksort(int low,int high,int a[]){
	int j;
	if(low<high){
		j=partition(low,high,a);
		Quicksort(low,j,a);
		Quicksort(j+1,high,a);
	}
}
int main(){
	int low,high,i,n;
	printf("Enter the number of elements ");
	scanf("%d",&n);
	printf("Enter the elements of array ");
	int a[n];
	for(i=0;i<n;i++)
		scanf("%d",&a[i]);
	low=0;
	high=n;
	Quicksort(low,high,a);
	printf("The sorted array is:\n");
	for(i=0;i<n;i++)
		printf("%d ",a[i]);
	return 0;
}
		
	

		
		
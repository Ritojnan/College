#include <stdio.h>
#include <stdlib.h>


struct process{
	int pid,burst_time,priority;
	int wait_time;
	};
int main(){
	struct process Processes[10];
	int num;
	printf("\nEnter number to processes:");
	scanf("%d",&num);
	
	for(int i=0;i<num;i++){
		printf("\n-------------------\nP[%d]\n",i);
		printf("ID:");
		scanf("%d",&Processes[i].pid);
		printf("Burst Time:");
		scanf("%d",&Processes[i].burst_time);
		printf("Priority:");
		scanf("%d",&Processes[i].priority);
		}
	
	for(int i=0;i<num-1;i++){
		int max_priority=i;
		
		for(int j=i+1;j<num;j++){
			
			if(Processes[j].priority<Processes[max_priority].priority){
			max_priority=j;	
			}
			
			if(max_priority!=i){
				struct process temp;
				temp=Processes[i];
				Processes[i]=Processes[j];
				Processes[j]=temp;
				}
		

			}

				}
				
				
		int elapsed_time=0;
		float avg_waiting=0;		
		for(int i=0;i<num;i++){
			Processes[i].wait_time=elapsed_time;
			elapsed_time+=Processes[i].burst_time;
			}
			
		for(int i=0;i<num;i++){
			avg_waiting+=Processes[i].wait_time;
			}
		
		printf("\n\n--------Priority Sorted-----------\n");				
	for(int i=0;i<num;i++){
		printf("\n\n-------------------\nP[%d]\n",i);
		printf("ID:%d\n",Processes[i].pid);
		printf("Burst Time:%d\n",Processes[i].burst_time);
		printf("Priority:%d\n",Processes[i].priority);
		printf("Waiting Time:%d\n",Processes[i].wait_time);
		}
		avg_waiting=avg_waiting/num;
		printf("\nAverage Waiting Time: %f\n",avg_waiting);
		printf("\nElapsed Time: %d\n",elapsed_time);	


return 0;
	}

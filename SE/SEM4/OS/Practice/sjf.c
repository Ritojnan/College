#include <stdio.h>

int main(){
    int n;
    printf("Enter number of processes:");
    scanf("%d",&n);
    int burst_time[n];
    printf("Enter burst time of processes");

    for(int i=0;i<n;i++){
        printf("P[%d]:",i+1);
        scanf("%d",&burst_time[i]);
    }

    int elapsed_time=0,ttat=0,twt=0;
    printf("\nProcess\tBurst Time\tWaiting Time\tTurnaround Time\n");
    
    for(int i=0;i<n;i++){
        printf("%d\t\t",i+1);
        printf("%d\t\t",burst_time[i]);
        printf("%d\t\t",elapsed_time);
        twt=+twt+elapsed_time;
        elapsed_time=+elapsed_time+burst_time[i];
        printf("%d\t\t",elapsed_time);
        ttat=+ttat+elapsed_time;
        // printf("%d\t\t",twt);
        // printf("%d\t\t",ttat);
        printf("\n");


    }
    float awt=twt/n,atat=ttat/n;
    printf("Average Waiting Time:%d\n",twt);
    printf("Average Turnaround Time:%d\n",ttat);

    return 0;
}
#include <stdio.h>

// Function to find the waiting time for all processes
void findWaitingTime(int n, int bt[], int wt[]) {
    // Waiting time for first process is 0
    wt[0] = 0;

    // Calculate waiting time
    for (int i = 1; i < n; i++) {
        wt[i] = wt[i - 1] + bt[i - 1];
    }
}

// Function to find turnaround time for all processes
void findTurnAroundTime(int n, int bt[], int wt[], int tat[]) {
    // Calculate turnaround time by adding burst time and waiting time
    for (int i = 0; i < n; i++) {
        tat[i] = bt[i] + wt[i];
    }
}

// Function to calculate average waiting time and average turnaround time
void findAvgTime(int n, int bt[]) {
    int wt[n], tat[n];
    float total_wt = 0, total_tat = 0;

    // Find waiting time of all processes
    findWaitingTime(n, bt, wt);

    // Find turnaround time of all processes
    findTurnAroundTime(n, bt, wt, tat);

    // Calculate total waiting time and total turnaround time
    for (int i = 0; i < n; i++) {
        total_wt += wt[i];
        total_tat += tat[i];
    }

    // Calculate average waiting time and average turnaround time
    float avg_wt = total_wt / n;
    float avg_tat = total_tat / n;

    // Display results
    printf("Process\tBurst Time\tWaiting Time\tTurnaround Time\n");
    for (int i = 0; i < n; i++) {
        printf("%d\t%d\t\t%d\t\t%d\n", i + 1, bt[i], wt[i], tat[i]);
    }
    printf("\nAverage Waiting Time: %.2f\n", avg_wt);
    printf("Average Turnaround Time: %.2f\n", avg_tat);
}

int main() {
    // Number of processes
    int n;

    printf("Enter the number of processes: ");
    scanf("%d", &n);

    int burst_time[n];

    // Input burst time for each process
    printf("Enter burst time for each process:\n");
    for (int i = 0; i < n; i++) {
        printf("Enter burst time for process %d: ", i + 1);
        scanf("%d", &burst_time[i]);
    }

    // Calculate average waiting time and average turnaround time
    findAvgTime(n, burst_time);

    return 0;
}

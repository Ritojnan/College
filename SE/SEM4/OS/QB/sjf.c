#include <stdio.h>

// Function to find waiting time for all processes
void findWaitingTime(int n, int bt[], int wt[]) {
    int rt[n];

    // Copy the burst time into the remaining time array
    for (int i = 0; i < n; i++)
        rt[i] = bt[i];

    int complete = 0, t = 0, minm = 999999;
    int shortest = 0, finish_time;

    // Process until all processes are completed
    while (complete != n) {
        // Find the process with the minimum remaining time
        for (int j = 0; j < n; j++) {
            if ((rt[j] <= t) && (rt[j] < minm) && (rt[j] > 0)) {
                minm = rt[j];
                shortest = j;
            }
        }

        // Update minimum
        minm = 999999;

        // Add the shortest remaining time to waiting time
        wt[shortest] = t;

        // Increase the current time
        t += rt[shortest];

        // Decrease remaining time by 1
        rt[shortest] = 0;

        // Increment completion
        complete++;
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

    // Find waiting time of all processes
    findWaitingTime(n, bt, wt);

    // Find turnaround time of all processes
    findTurnAroundTime(n, bt, wt, tat);

    // Calculate total waiting time and total turnaround time
    float total_wt = 0, total_tat = 0;
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

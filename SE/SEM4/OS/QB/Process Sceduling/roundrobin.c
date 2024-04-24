#include <stdio.h>

#define MAX_PROCESS 10
#define TIME_QUANTUM 4

struct Process {
    int id;
    int burst_time;
    int remaining_time;
    int waiting_time;
    int turnaround_time;
};

// Function to perform Round Robin scheduling and calculate waiting time, turnaround time
void roundRobin(struct Process processes[], int n) {
    int time = 0;
    int remaining_processes = n;
    int total_waiting_time = 0;
    int total_turnaround_time = 0;

    while (remaining_processes > 0) {
        for (int i = 0; i < n; i++) {
            if (processes[i].remaining_time > 0) {
                if (processes[i].remaining_time <= TIME_QUANTUM) {
                    time += processes[i].remaining_time;
                    processes[i].remaining_time = 0;
                    remaining_processes--;
                    processes[i].turnaround_time = time;
                } else {
                    time += TIME_QUANTUM;
                    processes[i].remaining_time -= TIME_QUANTUM;
                }

                // Calculate waiting time
                if (processes[i].remaining_time > 0) {
                    processes[i].waiting_time = time - processes[i].burst_time;
                    total_waiting_time += processes[i].waiting_time;
                }
            }
        }
    }

    // Calculate turnaround time for each process
    for (int i = 0; i < n; i++) {
        processes[i].turnaround_time -= processes[i].waiting_time;
        total_turnaround_time += processes[i].turnaround_time;
    }

    // Print waiting time and turnaround time for each process
    printf("Process\tWaiting Time\tTurnaround Time\n");
    for (int i = 0; i < n; i++) {
        printf("%d\t%d\t\t%d\n", processes[i].id, processes[i].waiting_time, processes[i].turnaround_time);
    }

    // Calculate average waiting time and average turnaround time
    float avg_waiting_time = (float)total_waiting_time / n;
    float avg_turnaround_time = (float)total_turnaround_time / n;
    printf("\nAverage Waiting Time: %.2f\n", avg_waiting_time);
    printf("Average Turnaround Time: %.2f\n", avg_turnaround_time);
}

int main() {
    int n;
    printf("Enter the number of processes: ");
    scanf("%d", &n);

    struct Process processes[n];

    // Input burst times of processes
    printf("Enter burst times of processes:\n");
    for (int i = 0; i < n; i++) {
        printf("Enter burst time for process %d: ", i + 1);
        scanf("%d", &processes[i].burst_time);
        processes[i].remaining_time = processes[i].burst_time;
        processes[i].id = i + 1;
    }

    roundRobin(processes, n);

    return 0;
}

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_PROCESS 10
#define MAX_MEMORY 100

// Structure to represent a process
typedef struct {
    int id;
    int size;
    bool allocated;
} Process;

// Function to initialize memory with all partitions as free
void initializeMemory(int memory[], int size) {
    for (int i = 0; i < size; i++) {
        memory[i] = -1; // -1 indicates free memory
    }
}

// Function to display memory status
void displayMemory(int memory[], int size) {
    printf("Memory Status:\n");
    for (int i = 0; i < size; i++) {
        if (memory[i] != -1) {
            printf("[%d] -> Process %d\t", i, memory[i]);
        } else {
            printf("[%d] -> Free\t\t", i);
        }
    }
    printf("\n");
}

// Function to allocate memory to a process
void allocateMemory(int memory[], int memSize, Process processes[], int numProcesses) {
    for (int i = 0; i < numProcesses; i++) {
        if (!processes[i].allocated) {
            for (int j = 0; j < memSize; j++) {
                if (memory[j] == -1 && processes[i].size <= (memSize - j)) {
                    for (int k = j; k < j + processes[i].size; k++) {
                        memory[k] = processes[i].id;
                    }
                    processes[i].allocated = true;
                    break;
                }
            }
        }
    }
}

// Function to deallocate memory of a process
void deallocateMemory(int memory[], int memSize, Process processes[], int numProcesses, int processId) {
    for (int i = 0; i < memSize; i++) {
        if (memory[i] == processId) {
            memory[i] = -1;
        }
    }
    for (int i = 0; i < numProcesses; i++) {
        if (processes[i].id == processId) {
            processes[i].allocated = false;
            break;
        }
    }
}

int main() {
    int memory[MAX_MEMORY]; // Memory array to simulate memory partitions
    Process processes[MAX_PROCESS]; // Array to store processes
    int numProcesses; // Number of processes
    int memSize; // Size of memory

    printf("Enter the size of memory: ");
    scanf("%d", &memSize);

    initializeMemory(memory, memSize); // Initialize memory

    printf("Enter the number of processes: ");
    scanf("%d", &numProcesses);

    // Input details of each process
    for (int i = 0; i < numProcesses; i++) {
        printf("Enter size of process %d: ", i + 1);
        scanf("%d", &processes[i].size);
        processes[i].id = i + 1;
        processes[i].allocated = false;
    }

    // Menu for memory management operations
    int choice;
    do {
        printf("\nMemory Management Techniques (MVT):\n");
        printf("1. Allocate Memory\n");
        printf("2. Deallocate Memory\n");
        printf("3. Display Memory Status\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                allocateMemory(memory, memSize, processes, numProcesses);
                break;
            case 2:
                printf("Enter the process id to deallocate: ");
                int processId;
                scanf("%d", &processId);
                deallocateMemory(memory, memSize, processes, numProcesses, processId);
                break;
            case 3:
                displayMemory(memory, memSize);
                break;
            case 4:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (choice != 4);

    return 0;
}

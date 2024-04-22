#include <stdlib.h>
#include <stdio.h>

#define MAX_PROCESSES 10
#define MAX_MEMORY_BLOCKS 10

struct Process {
    int id, memory;
};

struct MemoryBlock {
    int isAllocated;
    int size;
};

void bestFit(struct Process P[MAX_PROCESSES], struct MemoryBlock memory[MAX_MEMORY_BLOCKS], int numProcesses, int numMemoryBlocks) {
    int i, j;
    for (i = 0; i < numProcesses; i++) {
        int bestFitIndex = -1;
        for (j = 0; j < numMemoryBlocks; j++) {
            if (!memory[j].isAllocated && memory[j].size >= P[i].memory) {
                if (bestFitIndex == -1 || memory[j].size < memory[bestFitIndex].size) {
                    bestFitIndex = j;
                }
            }
        }
        if (bestFitIndex != -1) {
            memory[bestFitIndex].isAllocated = 1;
            printf("\n%d\t%d\tAllocated\tP[%d]", bestFitIndex, memory[bestFitIndex].size, i);
        } else {
            printf("\n%d\t%d\tNot Allocated\tP[%d]", -1, -1, i);
        }
    }
}

void printMemory(int numMemoryBlocks, struct MemoryBlock memory[MAX_MEMORY_BLOCKS]) {
    printf("\nSr no\tMemory\t\tStatus\tProcess");
    for (int i = 0; i < numMemoryBlocks; i++) {
        printf("\n%d\t%d\t%s\t%s", i, memory[i].size, memory[i].isAllocated ? "Allocated" : "Free", memory[i].isAllocated ? "P[?]" : "-");
    }
    printf("\n");
}

int main() {
    struct Process Process[MAX_PROCESSES];
    struct MemoryBlock memory[MAX_MEMORY_BLOCKS];
    int n, m;

    printf("Enter number of memory blocks:");
    scanf("%d", &m);
    for (int i = 0; i < m; i++) {
        printf("Memory Block [%d]:\n", i);
        printf("Enter size:");
        scanf("%d", &memory[i].size);
        memory[i].isAllocated = 0;
    }

    printf("\nEnter number of processes:");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        printf("P[%d]\n", i);
        printf("Enter ID:");
        scanf("%d", &Process[i].id);
        printf("Enter Memory Required:");
        scanf("%d", &Process[i].memory);
    }

    printf("\nMemory before allocation:");
    printMemory(m, memory);

    printf("\nMemory allocation using Best Fit Algorithm:");
    bestFit(Process, memory, n, m);

    printf("\n\nMemory after allocation:");
    printMemory(m, memory);

    return 0;
}

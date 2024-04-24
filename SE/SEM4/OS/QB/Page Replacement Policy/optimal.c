#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MEMORY_SIZE 32768
#define PAGE_SIZE 4096
#define NUM_PAGES (MEMORY_SIZE / PAGE_SIZE)

// Structure to represent a page table entry
struct PageTableEntry {
    int page_number;
    int reference_index;
};

// Function to initialize the page table
void initializePageTable(struct PageTableEntry page_table[]) {
    for (int i = 0; i < NUM_PAGES; i++) {
        page_table[i].page_number = -1; // Initialize page number to -1 (indicating not in memory)
        page_table[i].reference_index = -1; // Initialize reference index to -1
    }
}

// Function to simulate optimal page replacement policy
void simulateOptimal(int reference_string[], int num_references) {
    struct PageTableEntry page_table[NUM_PAGES];
    initializePageTable(page_table);

    int page_faults = 0;
    int hits = 0;
    int current_index = 0;

    for (int i = 0; i < num_references; i++) {
        int page_number = reference_string[i] / PAGE_SIZE;

        bool page_found = false;
        for (int j = 0; j < NUM_PAGES; j++) {
            if (page_table[j].page_number == page_number) {
                page_found = true;
                hits++;
                break;
            }
        }

        if (!page_found) {
            page_faults++;

            // Find the page to replace using Optimal policy
            int max_index = -1;
            int page_to_replace = -1;
            for (int j = 0; j < NUM_PAGES; j++) {
                int k;
                for (k = i + 1; k < num_references; k++) {
                    if (reference_string[k] / PAGE_SIZE == page_table[j].page_number) {
                        break;
                    }
                }
                if (k > max_index) {
                    max_index = k;
                    page_to_replace = j;
                }
            }

            page_table[page_to_replace].page_number = page_number;
            page_table[page_to_replace].reference_index = i;
        }
    }

    // Calculate Hit ratio and Miss ratio
    float hit_ratio = (float)hits / num_references;
    float miss_ratio = 1 - hit_ratio;

    printf("Total Page Faults: %d\n", page_faults);
    printf("Hit Ratio: %.2f\n", hit_ratio);
    printf("Miss Ratio: %.2f\n", miss_ratio);
}

int main() {
    int num_references;
    printf("Enter the number of memory references: ");
    scanf("%d", &num_references);

    int reference_string[num_references];
    printf("Enter the memory reference string:\n");
    for (int i = 0; i < num_references; i++) {
        scanf("%d", &reference_string[i]);
    }

    simulateOptimal(reference_string, num_references);

    return 0;
}

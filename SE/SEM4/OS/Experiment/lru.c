#include <stdio.h>
#include <stdlib.h>

void lru(int frames, int process[], int n) {
    int pageFrames[frames];
    int pageTimes[frames];
    int pageFaults = 0;
    int time = 0;
    int lruIdx, found, pageHits;

    printf(" Process ");
    for(int i = 0; i < frames; i++){
        printf(" Frame %d ", i+1);
    }
    printf("  Page Faults \n");

 
    for (int i = 0; i < frames; i++) 
    {
        pageFrames[i] = -1;
        pageTimes[i] = -1;
    }

    for (int i = 0; i < n; i++) 
    {
        found = 0;

        // Hit
        for (int j = 0; j < frames; j++) 
        {
            if (pageFrames[j] == process[i]) 
            {
                found = 1;
                pageTimes[j] = time; // Mark in which iteration it was placed
                break;
            }
        }

        // Not found / Fault
        if (found == 0) 
        {
            pageFaults++;
            lruIdx = 0;

            // Since the page frame having the least time is the LRU frame
            for (int j = 1; j < frames; j++) 
            {
                if (pageTimes[j] < pageTimes[lruIdx])
                    lruIdx = j;
            }
            pageFrames[lruIdx] = process[i];
            pageTimes[lruIdx] = time;
        }

        time++;

        printf("     %d     ", process[i]);
        for (int j = 0; j < frames; j++) {
            if (pageFrames[j] != -1)
                printf("    %d    ", pageFrames[j]);
            else
                printf("    -    ");
        }
        printf("      %d      \n", pageFaults);
    }
    pageHits = n - pageFaults;
    printf("\nTotal Page Faults: %d\n", pageFaults);
    printf("Total Page Hits: %d\n", pageHits);
    printf("Hit Ratio: %d/%d\n", pageHits, n);
}

int main() {
    int frames, n;
	printf("Ritojnan Mukherjee C23-144\n");
    printf("Enter number of frames: ");
    scanf("%d", &frames);

    printf("Enter number of processes: ");
    scanf("%d", &n);

    int process[n];
    printf("Enter processes:\n");
    for (int i = 0; i < n; i++)
        scanf("%d", &process[i]);

    lru(frames, process, n);

    return 0;
}

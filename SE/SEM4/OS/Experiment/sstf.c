#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Function to find the index of the shortest seek time from the current head position
int findShortestSeekTime(int tracks[], int head, int visited[], int n) {
    int min_seek = INT_MAX;
    int index = -1;
    
    for (int i = 0; i < n; i++) {
        if (!visited[i] && abs(tracks[i] - head) < min_seek) {
            min_seek = abs(tracks[i] - head);
            index = i;
        }
    }
    return index;
}

// Function to implement SSTF disk scheduling
void SSTF(int tracks[], int head, int n) {
    int total_seek = 0;
    int visited[n];
    
    for (int i = 0; i < n; i++) {
        visited[i] = 0; // Initialize all tracks as unvisited
    }

    printf("The order of track numbers is: ");
    for (int i = 0; i < n; i++) {
        int shortest_index = findShortestSeekTime(tracks, head, visited, n);
        visited[shortest_index] = 1; // Mark as visited
        printf("%d ", tracks[shortest_index]);
        total_seek += abs(tracks[shortest_index] - head);
        head = tracks[shortest_index]; // Move head to the next track
    }
    printf("\nSeek time = %d\n", total_seek);
    double as = (double)total_seek / n;
    printf("Average Seek time = %f\n", as);
}

int main() {
    int tracks, head;
    printf("Ritojnan Mukherjee C23-144\n");
    printf("Enter the number of tracks: ");
    scanf("%d", &tracks);
    printf("Enter the starting head position: ");
    scanf("%d", &head);
    int n;
    printf("Enter the number of requests: ");
    scanf("%d", &n);
    int track_numbers[n];
    printf("Enter the track numbers: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &track_numbers[i]);
    }
    SSTF(track_numbers, head, n);
    return 0;
}

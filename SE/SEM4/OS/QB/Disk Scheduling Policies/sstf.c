#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int nearest_track(int track[],int n, int current_track, int visited[])
{
    int minimum_distance = INT_MAX;
    int nearest_index = -1;

    for (int i = 0; i < n; i++)
    {
        if (!visited[i])
        {

            int distance = abs(current_track - track[i]);
            if (minimum_distance > distance)
            {
                minimum_distance = distance;
                nearest_index = i;
            }
        }
    }

    return nearest_index;
}

void sstf_disk_scheduling(int tracks[],int n,int current_track)
{
    int total_seek_time = 0;
    int visited[n];

    for (int i = 0; i < n; i++)
        visited[i] = 0;

    printf("Seq:");
    printf("%d-->", current_track);

    for (int i = 0; i < n; i++)
    {
        int near_idx = nearest_track(tracks, n, current_track, visited);
        total_seek_time+=abs(current_track-tracks[near_idx]);
        current_track = tracks[near_idx];
        visited[near_idx] = 1;
        printf("%d-->", current_track);
    }
    printf("\nTotal Seek Time:%d",total_seek_time);

}

int main()
{

    int n, current_track;
    printf("Enter current track:");
    scanf("%d", &current_track);

    printf("Enter number of tracks:");
    scanf("%d", &n);
    int tracks[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &tracks[i]);
    }

    sstf_disk_scheduling(tracks, n, current_track);

    return 0;
}
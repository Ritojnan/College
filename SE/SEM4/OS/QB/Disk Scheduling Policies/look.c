#include <stdio.h>
#include <stdlib.h>

#define UP 1
#define DOWN 0

void sort(int arr[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

void lookDiskScheduling(int arr[], int n, int initialTrack, int direction)
{

    int totalSeekTime = 0;
    sort(arr, n);
    int current_track = initialTrack;
    printf("%d-->", current_track);
    int idx = 0;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] < current_track)
            idx++;
    }
    int idx2 = idx - 1;
    if (direction == UP)
    {
        while (idx < n)
        {
            printf("%d-->", arr[idx++]);
        }
        while (idx2 >= 0)
        {
            printf("%d-->", arr[idx2--]);
        }
    }
    else
    {

        while (idx2 >= 0)
        {
            printf("%d-->", arr[idx2--]);
        }
        while (idx < n)
        {
            printf("%d-->", arr[idx++]);
        }
    }
}

int main()
{
    int n; // Number of disk requests
    printf("Enter the number of disk requests: ");
    scanf("%d", &n);

    int arr[n]; // Array to store the disk requests

    // Input the disk requests
    printf("Enter the disk requests:\n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    int initialTrack; // Initial position of the disk head
    printf("Enter the initial track position: ");
    scanf("%d", &initialTrack);

    int direction; // Direction of movement of the disk head (UP or DOWN)
    printf("Enter the direction (UP - 1 / DOWN - 0): ");
    scanf("%d", &direction);

    lookDiskScheduling(arr, n, initialTrack, direction);

    return 0;
}

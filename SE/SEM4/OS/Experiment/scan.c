#include <stdio.h>
#include <stdlib.h>
int main() {
int tracks, head, p, d, ind = -1, seek = 0;
printf("Ritojnan Mukherjee C23-144\n");
printf("Enter the number of tracks: ");
scanf("%d", &tracks);
printf("Enter the starting head position: ");
scanf("%d", &head);
printf("Enter the number of processes: ");
scanf("%d", &p);
printf("Enter the direction of processing (left = 1 | right = 2): ");
scanf("%d", &d);
int q[p];
printf("Enter the track numbers: ");
for (int i = 0; i < p; i++) {
scanf("%d", &q[i]);
}
for (int i = 0; i < p; i++) {
if (q[i] > head) {
ind = i;
break;
}
}
printf("The order of processes is -\n");
if (d == 1) {
printf("%d ", head);
for (int i = ind - 1; i >= 0; i--) {
printf("%d ", q[i]);
}
printf("0 ");
for (int i = ind; i < p; i++) {
printf("%d ", q[i]);
}
seek += head - q[ind - 1];
seek += q[ind - 1] - 0 + 1;
seek += q[ind] + 1;
seek += q[p - 1] - q[ind];
} else {
printf("%d ", head);
for (int i = ind; i < p; i++) {
printf("%d ", q[i]);
}
printf("%d ", tracks);
for (int i = ind - 1; i >= 0; i--) {
printf("%d ", q[i]);
}
seek += tracks - head + 1;
seek += tracks - q[0] + 1;
}
printf("\nSeek time = %d\n", seek);
return 0;
}
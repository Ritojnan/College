#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

#define MAX_PROCESSES 5
#define MAX_RESOURCES 3
void calculateNeed(const int
maxMatrix[MAX_PROCESSES][MAX_RESOURCES], const int
allocationMatrix[MAX_PROCESSES][MAX_RESOURCES], int
need[MAX_PROCESSES][MAX_RESOURCES]) {
for (int i = 0; i < MAX_PROCESSES; ++i) {
for (int j = 0; j < MAX_RESOURCES; ++j) {
need[i][j] = maxMatrix[i][j] - allocationMatrix[i][j];
}
}
}
bool checkAllocation(const int available[MAX_RESOURCES], const int
need[MAX_PROCESSES][MAX_RESOURCES], int process) {
for (int i = 0; i < MAX_RESOURCES; ++i) {
if (available[i] < need[process][i]) {
return false;
}
}
return true;
}
bool findSafeSequence(const int
allocationMatrix[MAX_PROCESSES][MAX_RESOURCES], const int
maxMatrix[MAX_PROCESSES][MAX_RESOURCES], int
available[MAX_RESOURCES]) {
int need[MAX_PROCESSES][MAX_RESOURCES];
calculateNeed(maxMatrix, allocationMatrix, need);
int safeSequence[MAX_PROCESSES];
bool finished[MAX_PROCESSES];
for (int i = 0; i < MAX_PROCESSES; ++i) {
finished[i] = false;
}
int count = 0;
while (count < MAX_PROCESSES) {
bool found = false;
for (int p = 0; p < MAX_PROCESSES; p++) {
if (!finished[p] && checkAllocation(available, need, p)) {
for (int i = 0; i < MAX_RESOURCES; ++i) {
available[i] += allocationMatrix[p][i];
}
safeSequence[count++] = p;
finished[p] = true;
found = true;
}
}
if (!found) {
printf("System is not in a safe state.\n");
return false;
}
}
printf("System is in a safe state.\nSafe sequence is: ");
for (int i = 0; i < MAX_PROCESSES; ++i) {
printf("P%d", safeSequence[i]);
if (i != MAX_PROCESSES - 1) printf(" -> ");
}
printf("\n");
return true;
}
int main() {
int allocationMatrix[MAX_PROCESSES][MAX_RESOURCES];
int maxMatrix[MAX_PROCESSES][MAX_RESOURCES];
int available[MAX_RESOURCES];
printf("Enter the allocation matrix (%d x %d):\n", MAX_PROCESSES,
MAX_RESOURCES);
for (int i = 0; i < MAX_PROCESSES; ++i) {
for (int j = 0; j < MAX_RESOURCES; ++j) {
scanf("%d", &allocationMatrix[i][j]);
}
}
printf("Enter the max matrix (%d x %d):\n", MAX_PROCESSES,
MAX_RESOURCES);
for (int i = 0; i < MAX_PROCESSES; ++i) {
for (int j = 0; j < MAX_RESOURCES; ++j) {
scanf("%d", &maxMatrix[i][j]);
}
}
printf("Enter the available resources (%d):\n", MAX_RESOURCES);
for (int i = 0; i < MAX_RESOURCES; ++i) {
scanf("%d", &available[i]);
}
findSafeSequence(allocationMatrix, maxMatrix, available);
return 0;
}
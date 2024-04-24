#include<stdio.h>
#include<math.h>
#define MAX 1000

double log2(double x){
    return log(x) / log(2);
}

typedef struct {
    int pageNumber;
    int frameNumber;
    int validBit;
} PageTableEntry;

int main() {
    int processSize_kb, pageSize_bytes, memorySize_mb;
    
    printf("Enter size of process (in KB): ");
    scanf("%d", &processSize_kb);
    printf("Enter size of page (in bytes): ");
    scanf("%d", &pageSize_bytes);
    printf("Enter size of main memory (in MB): ");
    scanf("%d", &memorySize_mb);
 
    int totalFrames = pow(2, (20 - log2(pageSize_bytes))); 
    int pageTableEntries = pow(2, (10 - log2(pageSize_bytes))); 
    int physicalAddressBits = log2(memorySize_mb * 1024 * 1024); 
    int logicalAddressBits = log2(processSize_kb * 1024); 
    int pageBits = log2(pageTableEntries); 
    int offsetBits = log2(pageSize_bytes); 
    
    printf("\nOutput:\n");
    printf("1. Total no. of frames in memory: %d frames\n", totalFrames);
    printf("2. Number of entries in page table: %d\n", pageTableEntries);
    printf("3. No. of bits in physical address: %d bits\n", physicalAddressBits);
    printf("4. No. of bits in logical address along with its distribution:\n");
    printf("   Size of process = %d KB or %d bytes - %d bits in logical address\n", processSize_kb, processSize_kb * 1024, logicalAddressBits);
    printf("   Distribution: %d bits (page no field) and %d bits (offset)\n", pageBits, offsetBits);
    
    PageTableEntry pageTable[pageTableEntries];
    
    printf("Page Table:\n");
    printf("Page No\t\t Frame No\t Valid\t\n");
    for(int i=0; i<pageTableEntries; i++) {
        pageTable[i].pageNumber = i;
        pageTable[i].frameNumber = -1;
        pageTable[i].validBit = 0;
        printf("%d\t\t %d\t\t\t\t %d\n", pageTable[i].pageNumber, pageTable[i].frameNumber, pageTable[i].validBit);
    }
    
    char logicalAddress[33]; 
    printf("\nEnter logical address in binary form: ");
    scanf("%s", logicalAddress);
    
    int pageNo = strtol(logicalAddress, NULL, 2) >> offsetBits;
    if (pageNo < pageTableEntries && pageNo >= 0) {
        printf("Page corresponding to logical address %s is present in memory.\n", logicalAddress);
    } else {
        printf("Page Fault\n");
    }
    
    printf("Page Table:\n");
    printf("Page No\t\t Frame No\t Valid\t\n");
    for(int i=0; i<pageTableEntries; i++) {
        pageTable[i].pageNumber = i;
        pageTable[i].frameNumber = -1;
        pageTable[i].validBit = 0;
        printf("%d\t\t %d\t\t\t\t %d\n", pageTable[i].pageNumber, pageTable[i].frameNumber, pageTable[i].validBit);
    }
    
    return 0;
}

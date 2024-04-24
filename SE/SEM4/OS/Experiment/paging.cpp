#include <iostream>
#include <cmath>
using namespace std;
int main()
{
    int process, page, mm, framenum, entries, Pgno[50], Frno[50], ValidBit[50], Pbits, Lbits, Ladd;
    cout << "Enter the size of process in kB: " << endl;
    cin >> process;
    cout << "Enter the size of page in bytes: " << endl;
    cin >> page;
    cout << "Enter the size of physical memory in Mb: " << endl;
    cin >> mm;
    framenum = mm * pow(2, 20) / page;
    entries = process * pow(2, 10) / page;
    Pbits = log2(mm * pow(2, 20));
    Lbits = log2(process * pow(2, 10));
    for (int i = 0; i < entries; i++)
    {
        Pgno[i] = i;
        cout << "Enter the frame number for page " << i << endl;
        cin >> Frno[i];
        cout << "Enter the valid bit for page " << i << endl;
        cin >> ValidBit[i];
    }
    cout << "Enter the logical address of a process in binary (without spaces): " << endl;
    cin >> hex >> Ladd;
    // Extracting page number and offset from logical address
    int offsetBits = log2(page);
    int pageNum = Ladd >> offsetBits;
    bool hit = false;
    // Checking if page number exists in frame number
    for (int i = 0; i < entries; i++)
    {
        if (Frno[i] == pageNum && ValidBit[i] == 1)
        {
            hit = true;
            break;
        }
    }
    if (hit)
    {
        cout << "Page Hit" << endl;
    }
    else
    {
        cout << "Page Miss" << endl;
    }
    cout << "Total number of frames: " << framenum << endl;
    cout << "Total number of entries: " << entries << endl;
    cout << "Bits for physical address: " << Pbits << endl;
    cout << "Bits for logical address: " << Lbits << endl;
    return 0;
}
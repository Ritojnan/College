// Implement Hashing using array. Demonstrate Quadratic Probing to 
// handle collision
#include <stdlib.h>
#include <stdio.h>
#include <conio.h>

#define MAX 10
int hashtable[MAX];
int collisions=0;

int isFilled(int index){
if (hashtable[index]!=-1) return 1;
else return 0;}

void QuadProbe(int key,int value,int i){
key=(key+i*i)%MAX;
if(!isFilled(key)){
    hashtable[key]=value;
    return;
}
else{
    collisions++;
    QuadProbe(key,value,i+1);
}
}



void LinearProbe(int key,int value,int i){
key=(key+i)%MAX;
if(!isFilled(key)){
    hashtable[key]=value;
    return;
}
else{
    collisions++;
    LinearProbe(key,value,i+1);
}
}

void display(){
    for(int i=0;i<MAX;i++){
        printf("[%d]:[%d]\n",i,hashtable[i]);
    }
}
void main(){
    //filling hash table with -1
    for(int i=0;i<MAX;i++){
        hashtable[i]=-1;
    }


}
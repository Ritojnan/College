//Queue using array

#include <stdio.h>
#include <stdlib.h>

#define MAX 5
int queue[MAX];
int front=-1;
int rear=-1;

int isFull(){
    if(rear==MAX-1)
        return 1;
    else
        return 0;
}

int isEmpty(){
    if(front==-1 && rear==-1)
        return 1;
    else
        return 0;
}

void enqueue(int value){
    if(isFull()){
        printf("Queue is full");
        return;
    }
    else if(isEmpty()){
        front=rear=0;
        queue[rear]=value;
    }
    else{
        rear++;
        queue[rear]=value;
    }
}

int dequeue(){
    int value;
    if(isEmpty()){
        printf("Queue is empty");
        return -1;
    }
    else if(front==rear){
        value=queue[front];
        front=rear=-1;
    }
    else{
        value=queue[front];
        front++;
    }
    return value;
}


int main() {
    int choice, value;
    while(1){
        printf("\nMenu:\n");
        printf("1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Display\n");
        printf("4. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter the value to enqueue: ");
                scanf("%d", &value);
                enqueue(value);
                break;
            case 2:
                value = dequeue();
                if (value != -1) {
                    printf("Dequeued value: %d\n", value);
                }
                break;
            case 3:
                display();
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid choice\n");
                break;
        }
    }
    return 0;
}
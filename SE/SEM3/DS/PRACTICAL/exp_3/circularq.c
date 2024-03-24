//Circular queue
#include <stdio.h>
#include <stdlib.h>

#define MAX 5

int queue[MAX];
int front = -1;
int rear = -1;

int isEmpty(){
    if(front == -1 && rear == -1)
        return 1;
    else
        return 0;
}

int isFull(){
    if((rear+1)%MAX == front)
        return 1;
    else
        return 0;
}

void enqueue(int value){
    if(isFull()){
        printf("Queue is full");
        return;
    }
    if(front == -1)
        front = 0;
    rear = (rear+1)%MAX;
    queue[rear] = value;
}

int dequeue(){
    if(isEmpty()){
        printf("Queue is empty");
        return -1;
    }
    int value = queue[front];
    if(front == rear)
        front = rear = -1;
    else
        front = (front+1)%MAX;
    return value;
}

void display(){
    if(isEmpty()){
        printf("Queue is empty");
        return;
    }
    int i = front;
    while(i != rear){
        printf("%d ", queue[i]);
        i = (i+1)%MAX;
    }
    printf("%d", queue[rear]);
}

void main(){

    //Menu driven 
    int choice;
    do{
        
        printf("\nMenu:\n");
        printf("1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Display\n");
        printf("4. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            
            case 1:
                int value;
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
    }while(1);
}
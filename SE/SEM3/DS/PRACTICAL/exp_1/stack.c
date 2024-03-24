#include <stdlib.h>
#include <stdio.h>
#include <conio.h>
#define MAX 10

int top=-1;
int stack[MAX];

void push(int value){
    if(top==MAX-1){
        printf("Stack Overflow\n");
        return;
    }
    top++;
    stack[top]=value;
}

int pop(){
    if(top==-1){
        printf("Stack Underflow\n");
        return -1;
    }
    int value=stack[top];
    top--;
    return value;
}

void peek(){
    if(top==-1){
        printf("Stack Underflow\n");
        return;
    }
    printf("%d",stack[top]);
}


void display(){
    if(top==-1){
        printf("Stack Underflow\n");
        return;
    }
    for(int i=top;i>=0;i--){
        printf("%d ",stack[i]);
    }
    printf("\n");
}

void isEmpty(){
    if(top==-1){
        printf("Stack Underflow\n");
        return;
    }
    printf("Stack is not empty\n");
}

void isFull(){
    if(top==MAX-1){
        printf("Stack Overflow\n");
        return;
    }
    printf("Stack is not full\n");
}





void main(){
    
    int choice;
    do{
        printf("\n-------------------------------------------------------------\n");
        printf("1. Push\n");
        printf("2. Pop\n");
        printf("3. Peek\n");
        printf("4. Display\n");
        printf("5. Check if Empty\n");
        printf("6. Check if Full\n");
        printf("7. Exit\n");
        printf("-------------------------------------------------------------\n");
        printf("Enter your choice : ");
        scanf("%d",&choice);

        switch(choice){
            case 1:
                int value;
                printf("Enter the value to push : ");
                scanf("%d",&value);
                push(value);
                break;

            case 2:
                printf("Popped value : %d\n",pop());
                break;
            
            case 3:
                peek();
                break;
            
            case 4:
                display();
                break;

            case 5:
                isEmpty();
                break;

            case 6:
                isFull();
                break;

            case 7:
                exit(0);
                break;

            default:
                printf("Invalid choice\n");
                break;
            


            
        }
    }while(1);


}
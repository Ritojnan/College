#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void displayList(struct Node* head) {
    struct Node* current = head;

    if (head == NULL) {
        printf("The list is empty");
    } else {
        while (current != NULL) {
            printf(" %d ", current->data);
            current = current->next;
        }
    }
}

struct Node* insertFront(struct Node* head, int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;

    if (head == NULL) {
        newNode->next = NULL;
        head = newNode;
    } else {
        newNode->next = head;
        head = newNode;
    }
    return head;
}

struct Node* deleteFront(struct Node* head) {
    if (head == NULL) {
        printf("The list is empty");
    } else {
        printf("After deletion\n");
        struct Node* temp = head;
        head = head->next;
        free(temp);
    }
    return head;
}

struct Node* insertEnd(struct Node* head) {
    int val;
    printf("Enter the data: ");
    scanf("%d", &val);
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
    } else {
        struct Node* temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    return head;
}

struct Node* insertAtIndex(struct Node* head) {
    int val, index, i = 0;
    printf("Enter the index of insertion: ");
    scanf("%d", &index);
    printf("Enter the data: ");
    scanf("%d", &val);

    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    
    struct Node* temp = head;

    while (i != index - 1) {
        if (temp == NULL) {
            printf("Invalid index for insertion\n");
            return head;
        }
        temp = temp->next;
        i++;
    }

    newNode->next = temp->next;
    temp->next = newNode;
    return head;
}

struct Node* deleteEnd(struct Node* head) {
    if (head == NULL) {
        printf("The list is empty");
    } else {
        printf("After deletion\n");
        struct Node* p = head;
        struct Node* q = head->next;

        while (q->next != NULL) {
            p = p->next;
            q = q->next;
        }
        
        free(q);
        p->next = NULL;
    }
    return head;
}

struct Node* deleteAtIndex(struct Node* head) {
    int index, j;
    printf("Enter the index of deletion: ");
    scanf("%d", &index);

    if (index < 0) {
        printf("Invalid index for deletion\n");
        return head;
    }

    if (index == 0) {
        return deleteFront(head);
    }

    struct Node* p = head;
    struct Node* q = head->next;

    for (j = 0; j < index - 1; j++) {
        if (q == NULL) {
            printf("Invalid index for deletion\n");
            return head;
        }
        p = p->next;
        q = q->next;
    }

    p->next = q->next;
    free(q);
    return head;
}

int main() {
    int val, c;
    struct Node* head = NULL;

    while (1) {
        printf("\nMenu:\n");
        printf("1. Insert at Front\n");
        printf("2. Display\n");
        printf("3. Delete at Front\n");
        printf("4. Insert at End\n");
        printf("5. Insert at Index\n");
        printf("6. Delete at End\n");
        printf("7. Delete at Index\n");
        printf("8. Exit\n");
        
        printf("Enter your choice: ");
        scanf("%d", &c);

        switch (c) {
            case 1: {
                printf("Enter the data: ");
                scanf("%d", &val);
                head = insertFront(head, val);
                break;
            }
            case 2: {
                displayList(head);
                break;
            }
            case 3: {
                head = deleteFront(head);
                displayList(head);
                break;
            }
            case 4: {
                head = insertEnd(head);
                break;
            }
            case 5: {
                head = insertAtIndex(head);
                break;
            }
            case 6: {
                head = deleteEnd(head);
                displayList(head);
                break;
            }
            case 7: {
                head = deleteAtIndex(head);
                displayList(head);
                break;
            }
            case 8: {
                exit(0);
            }
            default: {
                printf("Invalid choice\n");
                break;
            }
        }
    }
    return 0;
}

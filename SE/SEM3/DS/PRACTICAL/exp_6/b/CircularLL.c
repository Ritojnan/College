#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void traverse(struct Node* head) {
    struct Node* current = head;

    if (head == NULL) {
        printf("List is empty");
    } else {
        do {
            printf(" %d ", current->data);
            current = current->next;
        } while (current != head);
    }
}

struct Node* insertFront(struct Node* head, int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;

    if (head == NULL) {
        newNode->next = newNode;
        return newNode;
    }

    struct Node* tail = head;
    while (tail->next != head) {
        tail = tail->next;
    }

    newNode->next = head;
    tail->next = newNode;
    return newNode;
}

struct Node* deleteFront(struct Node* head) {
    if (head == NULL) {
        printf("List is empty");
        return NULL;
    }

    struct Node* temp = head;
    struct Node* tail = head;

    while (tail->next != head) {
        tail = tail->next;
    }

    head = head->next;
    tail->next = head;
    free(temp);
    return head;
}

struct Node* insertEnd(struct Node* head, int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;

    if (head == NULL) {
        newNode->next = newNode;
        return newNode;
    }

    struct Node* tail = head;
    while (tail->next != head) {
        tail = tail->next;
    }

    tail->next = newNode;
    newNode->next = head;
    return head;
}


struct Node* deleteEnd(struct Node* head) {
    if (head == NULL) {
        printf("List is empty");
        return NULL;
    }

    struct Node* temp = head;
    struct Node* prev = NULL;

    while (temp->next != head) {
        prev = temp;
        temp = temp->next;
    }

    if (prev != NULL) {
        prev->next = head;
    } else {
        head = NULL;
    }

    free(temp);
    return head;
}

struct Node* sort(struct Node* head) {
    if (head == NULL) {
        printf("List is empty");
        return NULL;
    }

    struct Node* current = head;
    struct Node* index = NULL;
    int temp;

    do {
        index = current->next;

        while (index != head) {
            if (current->data > index->data) {
                temp = current->data;
                current->data = index->data;
                index->data = temp;
            }
            index = index->next;
        }

        current = current->next;
    } while (current != head);

    return head;
}

int main() {
    int val, c, n = 0;
    struct Node* head = NULL;

    while (1) {
        printf("\nEnter 1. Insertion, 2. Display, 3. Deletion, 4. Insert at End, 5. Delete at End, 6. No. of Nodes, 7. Sort, 8. Exit: ");
        scanf("%d", &c);

        switch (c) {
            case 1: {
                n++;
                printf("Enter the data: ");
                scanf("%d", &val);
                head = insertFront(head, val);
                break;
            }
            case 2: {
                traverse(head);
                break;
            }
            case 3: {
                if (n > 0) {
                    n--;
                    head = deleteFront(head);
                    printf("After deletion\n");
                    traverse(head);
                } else {
                    printf("List is empty\n");
                }
                break;
            }
            case 4: {
                n++;
                printf("Enter the data: ");
                scanf("%d", &val);
                head = insertEnd(head, val);
                break;
            }
            case 5: {
                if (n > 0) {
                    n--;
                    printf("After deletion\n");
                    head = deleteEnd(head);
                    traverse(head);
                } else {
                    printf("List is empty\n");
                }
                break;
            }
            case 6: {
                printf("Number of nodes: %d", n);
                break;
            }
            case 7: {
                if (n > 0) {
                    printf("After sorting\n");
                    head = sort(head);
                    traverse(head);
                } else {
                    printf("List is empty\n");
                }
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

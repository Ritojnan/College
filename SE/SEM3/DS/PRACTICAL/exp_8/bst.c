#include <stdio.h>
#include <stdlib.h>

struct node{
	int data;
	struct node *left,*right;
};

struct node *root=NULL;

struct node *createNode(int data){

	struct node *newNode =(struct node*)malloc(sizeof(struct node));
	newNode->data=data;
	newNode->left=NULL;
	newNode->right=NULL;
	
	return newNode;	 
	}

	
void insertNode(){
	int data;
	printf("Enter data of root node");
	scanf("%d",&data);
	struct node *newNode= createNode(data);
	struct node *prev;
	struct node *ptr=root;
	while(ptr!=NULL){
		if(ptr->data==data){
			printf("Data already exsists :(\n");
			return;
			}
		else if(data<ptr->data){
			prev=ptr;
			ptr=ptr->left;
			}
		else{
			prev=ptr;
			ptr=ptr->right;
			}
		}
	
		if(root==NULL){
			root=newNode;

			return;
			}

		if(data<prev->data){
			prev->left=newNode;
			}
			else{
			prev->right=newNode;

				}
	
	}
	
	
void preorder(struct node *root){
	if(root!=NULL){
		printf("[%d]",root->data);
		preorder(root->left);
		preorder(root->right);
		}
	}
	
void postorder(struct node *root){
	if(root!=NULL){
		
		preorder(root->left);
		preorder(root->right);
				printf("[%d]",root->data);

		}
	}
	
void inorder(struct node *root){
	if(root!=NULL){
		preorder(root->left);
				printf("[%d]",root->data);

		preorder(root->right);
		}
	}

int main(){
		int choice;
		do{
				printf("\n-------------------------------------------------------------\n");
				printf("1.Insert \n2.PreOrder\n3.PostOrder\n4.InOrder\n");
				printf("\nEnter your choice : ");
				scanf("%d",&choice);
				switch(choice){
						case 1:insertNode();break;
						case 2:preorder(root);break;
						case 3:postorder(root);break;
						case 4:inorder(root);break;
						case 5:exit(0);break;
										
						default:printf("\nInvaid Choice\n");main();
					}
		}while(1);
		
		return 0;
	}


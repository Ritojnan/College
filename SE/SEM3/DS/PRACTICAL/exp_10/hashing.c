#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define MAX 10
int hashmap[MAX];
int collisions=0;
int indx;
int mode=-1;
float c=0.4;
int ex=0;

void isColliding(int index){
	
	if(hashmap[index]!=-1){
		indx++;
		collisions++;
		isColliding(indx);
		
		}
		}

void quadColl(int index){
	
	if(hashmap[index]!=-1){
		ex*
		collisions++;
		quadColl(indx,++i);
		
		}
}


void divisionMethod(int key){
	indx=key%MAX;
	isColliding(indx);
	hashmap[indx+ex]=key;

	
	}

void multiplicationMethod(int key){
	int fract=key*c-(int)(key*c);
	indx=floor(MAX*fract);
	quadColl(indx);
	hashmap[indx]=key;

	
	}
	
void printMap(){
		
		for(int i=0;i<MAX;i++){
		printf("%d\t",i);

		}
		printf("\n");
		
		for(int i=0;i<MAX;i++){
		printf("%d\t",hashmap[i]);
		}
	}
void menu(){
	int num=-1;
	
	
	printf("Enter number to input [-1 to exit] \n");
	printf(">>");
	scanf("%d",&num);
	if(num==-1){
		printMap();
		printf("\nCollision:%d",collisions);
		return ;}
	if(mode==1){multiplicationMethod(num);}
	else if(mode==2){divisionMethod(num);}
	else{printf("\nError invalid mode\n");
		return;}
	menu();
}

int main(){
	//Initializing array 
	
	for(int i=0;i<MAX;i++){
	hashmap[i]=-1;
	}
	
	printf("Enter mode \n1.Multiplication Mode \n2.Division Mode\n");
	scanf("%d",&mode);
		
	menu();
	return 0;
	}

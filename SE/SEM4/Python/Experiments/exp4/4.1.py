#Write a menu driven program to demonstrate use of list in python

#Put even and odd numbers in separate lists

L1=[]
E=[]
O=[]

def even_odd(Li):
    for i in Li:
        if int(i)%2==0:
            E.append(i)
        else:
            O.append(i)

    print("Even list: ",E)
    print("Odd list: ",O)


while True:

    print("""
    1. Get list
    2. Even and odd
    3. Merge and sort two lists
    4. Update first element 
    5. Print Middle Element 
    6. Exit
""")

    choice =int(input("Enter choice:"))

    if choice==1:
        L1=list(int(x) for x in input("Enter list: ").split(','))
    elif choice==2:
        even_odd(L1)
    elif choice==3:
        L1=sorted(L1.items(),key=lambda k:k[0])
    elif choice==4:
        num=int(input("Enter new 1st element:"))
        L1[0]=num
        print(L1)
    elif choice==5:
        print(L1[len(L1)//2])
    elif choice==6:
        print("Exiting")
        break
    else:
        print("Invalid Choice...")
        pass
        

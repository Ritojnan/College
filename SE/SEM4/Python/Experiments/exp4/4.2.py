# Write a menu driven program to demonstarte use of tuple in python

# Add and show details i.e roll no,name and marks of three subjects of N students in a list of tuple


records=[]
num_of_students =int(input("Enter number of students:"))
def show(name):
    for i in range(num_of_students):
        if(name==records[i][1]):
            print(records[i])
            return
        
    print("Record not found")

def add():
    for i in range(num_of_students):
        record=eval(input("Enter record(roll no,name,marks):"))
        records.append(record)

    print("All records:",records)


while True:
    print("""
    1. Add
    2. Show
    3. Exit
    """)
    
    choice =int(input("Enter choice:"))

    if choice==1:
        add()
    elif choice==2:
        name=input("Enter name:")
        show(name)
    elif choice==3:
        print("Exiting")
        break
    else:
        print("Invalid Choice...")
        pass

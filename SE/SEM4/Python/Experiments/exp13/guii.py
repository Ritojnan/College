from tkinter import *
import pickle


#creating student obect  and saving in file
class details:
    def __init__(self,other):
        self.name = other.e1.get()
        x = other.var.get()
        if x==0:
            self.year = 'FE'
        elif x ==1:
            self.year = 'SE'
        elif x==2:
            self.year = 'TE'
        elif x==3:
            self.year = 'BE'
        f = open('student','ab')
        pickle.dump(self,f)
        f.close()

#First window with three buttons to add, search and exit        
class window1:
    def __init__(self):
        # Set name of window
        self.root = Tk()
        self.root.title("Student Management System")
        self.root.geometry("600x150")
        #add color bg
        self.root.configure(background='light blue')
        self.f1 = Frame(self.root)
        self.f2 = Frame(self.root)
        self.f1.pack()
        self.f2.pack()

        # set bg color
        self.title2=Label(self.f2, text = "Choose one of the following options", font = ('Urbanist',16,'bold'), bg = 'yellow', fg = 'black')
        self.title2.pack()
        # self.title2.

        # buttons set height and width
        self.title=Label(self.f1, text = "Student Management System", font = ('Urbanist',16,'bold'), bg = 'light blue', fg = 'black')
        self.b1 = Button(self.f1,text = "ADD",command = self.add,bg='pink', fg = 'black',height=2, width = 20,activebackground='red',activeforeground='white')
        self.b2 = Button(self.f1,text = "SEARCH", command = self.search,bg='pink', fg = 'black',height=2, width = 20,activebackground='red',activeforeground='white')
        self.b3 = Button(self.f1,text = "EXIT", command = quit,bg='pink', fg = 'black',height=2, width = 20,activebackground='red',activeforeground='white')
        
        self.title.pack()
        self.b1.pack()
        self.b2.pack()
        self.b3.pack()
        
        self.root.mainloop()

    def add(self):
        self.root.destroy()
        ob = window2()

    def search(self):
        self.root.destroy()
        ob= window3()        

#Second Window for takind details and passing it to details object.
class window2:
    def __init__(self):
        self.root = Tk()
        self.root.geometry("500x800")
        self.root.configure(background='light blue')
        self.f1 = Frame(self.root,height =600,width =300,bg='pink')
        self.f1.propagate(0)
        self.f1.pack()
        self.l1 = Label(self.f1, text ="Name:")
        self.l1.place(x = 10,y=10)
        self.e1 =Entry(self.f1)
        self.e1.place(x = 100,y=10)
        self.l2 = Label(self.f1, text ="Year:")
        self.l2.place(x = 10,y=50)
        self.var = IntVar()
        self.r0 = Radiobutton(self.f1, text = "FE", variable = self.var, value=0)
        self.r1 = Radiobutton(self.f1, text = "SE", variable = self.var, value=1)
        self.r2 = Radiobutton(self.f1, text = "TE", variable = self.var, value = 2)
        self.r3 = Radiobutton(self.f1, text = "BE", variable = self.var, value = 3)
        self.r0.place(x = 100,y=50)
        self.r1.place(x = 150,y=50)
        self.r2.place(x = 200,y=50)
        self.r3.place(x = 250,y=50)


        # How to add a Listbox
        self.v = StringVar()
        self.l3 = Label(self.f1, text ="Course:",cursor="hand2")
        self.l3.place(x = 10,y=100)
        self.list1 = Listbox(self.f1, height = 5, width = 20)
        self.list1.insert(1, "C")
        self.list1.insert(2, "C++")
        self.list1.insert(3, "JAVA")
        self.list1.insert(4, "PYTHON")
        self.list1.insert(5, "JAVASCRIPT")
        self.list1.insert(6, "PHP")
        self.list1.place(x = 100,y=100)

        # Print slected option from listbox
        self.list1.bind('<<ListboxSelect>>', self.list_select)

        
        self.b1 =Button(self.f1,text = "ADD", command = self.addinfile)
        self.b1.place(x = 50,y=500)

        self.b2 =Button(self.f1,text = "BACK", command = self.back)
        self.b2.place(x = 150,y=500)
        self.root.mainloop()

    def back(self):
        self.root.destroy()
        ob = window1()

    def addinfile(self):
        ob = details(self)
        print(ob.name,"\t",ob.year)


    def list_select(self,event):
        # print("Selected")
        # print(self.list1.curselection())
        self.v = self.list1.get(self.list1.curselection())
        print(self.v)

#third window for searching details from file based on name
class window3:
    def __init__(self):
        self.root = Tk()
        self.root.geometry("500x400")
        self.root.configure(background='teal')
        self.f1 = Frame(self.root,height =300,width =300,borderwidth=5,relief = SUNKEN,bg='red')
        self.f1.propagate(0)
        self.f1.pack()
        self.l1 = Label(self.f1, text ="Enter Name:")
        self.l1.place(x = 10,y=10)
        self.e1 =Entry(self.f1)
        self.e1.place(x = 100,y=10)
        self.b1 =Button(self.f1,text = "SEARCH", command = self.search)
        self.b1.place(x = 40,y=70)
        self.b2 =Button(self.f1,text = "BACK", command = self.back)
        self.b2.place(x = 120,y=70)
        
    def back(self):
        self.root.destroy()
        ob = window1()

    def search(self):
        self.t = Text(self.f1,width =10, height = 10, font = ('Verdana',16,'bold'), wrap = WORD)
        self.t.place(x= 50, y=100)
        f = open("student","rb")
        while True:
            try:
                ob = pickle.load(f)
                if self.e1.get().lower()==ob.name.lower():
                    str= ob.name + "\t"+ ob.year
                    self.t.insert(END,str+'\n')
                
            except EOFError:
                print("End of File")
                f.close()
                break
        
ob = window1()
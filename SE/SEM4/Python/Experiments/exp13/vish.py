from tkinter import *
import pickle

class Details:
    def _init_(self, other):
        self.name = other.e1.get()
        x = other.lb.curselection()[0]
        self.year = other.list1[x]
        f = open('student', 'ab')
        pickle.dump(self, f)
        f.close()

class Window1:
    def _init_(self): 
        self.root = Tk()
        self.root.geometry("500x400")
        self.root.configure(background='light blue')
        self.f1 = Frame(self.root)
        self.title=Label(self.f1, text="Student Detail", bg='light blue')
        self.title.pack()
        self.f1.pack()
        self.b1 = Button(self.f1, text="ADD", command=self.add, bg='pink')
        self.b2 = Button(self.f1, text="SEARCH", command=self.search, bg='pink')
        self.b3 = Button(self.f1, text="EXIT", command=quit, bg='pink')
        self.b1.pack()
        self.b2.pack()
        self.b3.pack()
        self.root.mainloop()

    def add(self):
        self.root.destroy()
        ob = Window2()

    def search(self):
        self.root.destroy()
        ob = Window3()

class Window2:
    def _init_(self):
        self.root = Tk()
        self.root.geometry("500x400")
        self.root.configure(background='pink')
        self.f1 = Frame(self.root, height=300, width=300)
        self.f1.propagate(0)
        self.f1.pack()
        self.l1 = Label(self.f1, text="Name:", bg='pink')
        self.l1.place(x=10, y=10)
        self.e1 = Entry(self.f1)
        self.e1.place(x=100, y=10)
        self.l2 = Label(self.f1, text="Year:", bg='pink')
        self.l2.place(x=10, y=50)
        
        self.lb = Listbox(self.f1, height=3, selectmode=SINGLE)
        self.lb.place(x=100, y=50)
        self.list1 = ['SE', 'TE', 'BE']
        for item in self.list1:
            self.lb.insert(END, item)
        
        self.b1 = Button(self.f1, text="ADD", command=self.addinfile)
        self.b1.place(x=50, y=100)
        self.b2 = Button(self.f1, text="BACK", command=self.back)
        self.b2.place(x=150, y=100)
        self.root.mainloop()

    def back(self):
        self.root.destroy()
        ob = Window1()

    def addinfile(self):
        ob = Details(self)
        print(ob.name, "\t", ob.year)

class Window3:
    def _init_(self):
        self.root = Tk()
        self.root.geometry("500x400")
        self.f1 = Frame(self.root, height=300, width=300)
        self.f1.propagate(0)
        self.f1.pack()
        self.l1 = Label(self.f1, text="Enter Name:")
        self.l1.place(x=10, y=10)
        self.e1 = Entry(self.f1)
        self.e1.place(x=100, y=10)
        self.b1 = Button(self.f1, text="SEARCH", command=self.search)
        self.b1.place(x=40, y=70)
        self.b2 = Button(self.f1, text="BACK", command=self.back)
        self.b2.place(x=120, y=70)
        
    def back(self):
        self.root.destroy()
        ob = Window1()

    def search(self):
        self.t = Text(self.f1, width=10, height=10, font=('Verdana', 16, 'bold'), wrap=WORD)
        self.t.place(x=50, y=100)
        f = open("student", "rb")
        while True:
            try:
                ob = pickle.load(f)
                if self.e1.get().lower() == ob.name.lower():
                    s = ob.name + "\t" + ob.year
                    self.t.insert(END, s + '\n')
                
            except EOFError:
                print("End of File")
                f.close()
                break

ob = Window1()
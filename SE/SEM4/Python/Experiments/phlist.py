import re
import pickle

class PhoneList:
    def __init__(self, fname, lname, phone):
        self.fname = fname
        self.lname = lname
        self.phone = phone
    
    def display(self):
        print(self.fname, self.lname)

p1 = PhoneList("Suresh", "rao", "985642")
p2 = PhoneList("Jayesh", "rao", "897456")
p3 = PhoneList("karan", "mitra", "789546")

phone_list = [p1, p2, p3]

with open('Phone.dat', 'wb') as f:
    for i in phone_list:
        pickle.dump(i, f)

with open('Phone.dat', 'rb') as f:
    while True:
        try:
            p = pickle.load(f)
            if re.search(r"rao", p.lname) and re.search(r'^[jk]', p.fname):
                p.display()
        except EOFError as e:
            print(e)
            break

import threading

def print_odd():
    for i in range(1, 11, 2):
        print("O:", i)

def print_even():
    for i in range(2, 11, 2):
        print("E:", i)

odd_thread = threading.Thread(target=print_odd)
even_thread = threading.Thread(target=print_even)

odd_thread.start()
even_thread.start()

odd_thread.join()
even_thread.join()

print("Done")

---
sidebar_position: 4
---

# 4.Python Integration Primer

In this section, we'll explore various aspects of Python integration, including Graphical User Interfaces (GUIs), Networking, Database Connectivity, and an Introduction to Django.

## 4.1 Graphical User Interface (GUI)

Creating Graphical User Interfaces is crucial for developing interactive applications. The `tkinter` library is a standard GUI toolkit in Python.

```python
# GUI Example with Tkinter
import tkinter as tk

window = tk.Tk()
label = tk.Label(window, text="Hello, GUI!")
label.pack()

window.mainloop()
```

## 4.2 Networking in Python

Python provides modules like `socket` for networking. Creating a simple server-client connection:

```python
# Networking Example with Sockets
import socket

# Server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 12345))
server_socket.listen(1)

# Client
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 12345))
```

## 4.3 Python Database Connectivity

Interacting with databases is a common requirement. The `sqlite3` module is a simple option for local databases.

```python
# Database Connectivity Example with SQLite
import sqlite3

# Connect to a database
conn = sqlite3.connect('example.db')

# Create a table
conn.execute('''CREATE TABLE IF NOT EXISTS USERS
         (ID INT PRIMARY KEY     NOT NULL,
         NAME           TEXT    NOT NULL);''')

# Insert data
conn.execute("INSERT INTO USERS (ID, NAME) VALUES (1, 'John');")

# Query data
result = conn.execute("SELECT * FROM USERS;")
for row in result:
    print(row)

# Close the connection
conn.close()
```

## 4.4 Introduction to Django

Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.

```python
# Django Example (Creating a Simple View)
# views.py
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello, Django!")

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello, name='hello'),
]
```

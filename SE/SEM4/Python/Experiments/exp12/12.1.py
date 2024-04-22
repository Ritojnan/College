import pandas as pd
import numpy as np


a=pd.Series([1,2,3,4])
b=pd.Series([5,6,7,8])

print("Addition of two series: ",a+b)
print("Subtraction of two series: ",a-b)
print("Multiplication of two series: ",a*b)
print("Division of two series: ",a/b)

# Compare two series

print("Compare two series: ",a>b)
print("Compare two series: ",a<b)
print("Compare two series: ",a==b)

#compare dictionary to pandas series

my_dict = {'a': 100, 'b': 200, 'c': 300, 'd': 400, 'e': 800}

my_series = pd.Series(my_dict)
print(my_series)


#convert numpy array to pandas series

arr=np.array([1,2,3,4,5,6,7,8,9])

pandas_series=pd.Series(arr)

print(pandas_series)


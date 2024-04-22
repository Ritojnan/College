import re 
str1 = "Mumbai delhi chennai mangalore"
res = re.findall(r"\b[\w]+ai\b",str1) 
print(res) 
res1 = re.findall(r"\bma[\w]*\b|\bmu[\w]*\b",str1,re.IGNORECASE) 
print(res1)
res2 = re.findall(r"\b\wu[\w]*a\w\b",str1)
print(res2)

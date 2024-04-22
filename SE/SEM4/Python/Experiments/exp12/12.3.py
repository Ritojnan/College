#write a program to demonstrate merging of frames:

import pandas as pd

# Create two sample DataFrames
df1 = pd.DataFrame({'id': [1, 2, 3, 4],
                    'name': ['Alice', 'Bob', 'Charlie', 'David']})

df2 = pd.DataFrame({'id': [2, 3, 5],
                    'age': [25, 30, 35]})

# Merge the DataFrames based on the 'id' column
merged_df = pd.merge(df1, df2, on='id', how='inner')  # 'inner' merge keeps only the common 'id's

print("DataFrame 1:")
print(df1)
print("\nDataFrame 2:")
print(df2)
print("\nMerged DataFrame:")
print(merged_df)



# Merge using different 'how' parameters
merged_left = pd.merge(df1, df2, on='id', how='left')   # Left merge
merged_right = pd.merge(df1, df2, on='id', how='right') # Right merge
merged_outer = pd.merge(df1, df2, on='id', how='outer') # Outer merge
merged_inner = pd.merge(df1, df2, on='id', how='inner') # Inner merge

print("Left merge:")
print(merged_left)
print("\nRight merge:")
print(merged_right)
print("\nOuter merge:")
print(merged_outer)
print("\nInner merge:")
print(merged_inner)

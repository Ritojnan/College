---
sidebar_position: 2
---

# 6.2 Pandas

Pandas is a powerful library for data manipulation and analysis in Python. Let's delve into the basics.

## 6.2 Basics of Pandas

Pandas introduces two primary data structures: Series and DataFrames. These structures enable efficient handling of structured data.

### Series and DataFrames

```python
# Pandas Series and DataFrames Example
import pandas as pd

# Creating a Series
s = pd.Series([1, 3, 5, np.nan, 6, 8])

# Creating a DataFrame
df = pd.DataFrame({
    'Column1': [1, 2, 3, 4],
    'Column2': ['A', 'B', 'C', 'D']
})
```

### Using Multilevel Series

Pandas supports hierarchical indexing, enabling the creation of multi-level Series.

```python
# Multilevel Series Example
arrays = [
    ['A', 'A', 'B', 'B'],
    [1, 2, 1, 2]
]

index = pd.MultiIndex.from_arrays(arrays, names=('Letters', 'Numbers'))
multi_level_series = pd.Series([10, 20, 30, 40], index=index)
```

### Grouping and Aggregating

Grouping data allows you to perform operations on subsets of your data.

```python
# Grouping and Aggregating Example
df = pd.DataFrame({
    'Category': ['A', 'B', 'A', 'B', 'A', 'B'],
    'Value': [10, 20, 15, 25, 12, 18]
})

grouped_data = df.groupby('Category')
aggregated_data = grouped_data.sum()
```

### Merging DataFrames

Combining information from different DataFrames is a common task, and Pandas provides several methods for this.

```python
# Merging DataFrames Example
df1 = pd.DataFrame({'key': ['A', 'B', 'C'], 'value': [1, 2, 3]})
df2 = pd.DataFrame({'key': ['A', 'B', 'D'], 'value': [4, 5, 6]})

merged_df = pd.merge(df1, df2, on='key', how='outer')
```
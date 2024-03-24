a=1
echo "Enter a number:"
read n
s=0
while [ $a -le $n ]
do
s=$((s+a))
a=$((a+1))
done
echo "Sum is " $s
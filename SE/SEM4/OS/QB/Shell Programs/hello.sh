# This is a comment
echo "Hello World"

# echo "Enter your name: "
# read name names
# echo "Hello $name"
# echo "Hello $names"



# echo "Today is `date`"
# echo "Hostname is `hostname`"
# echo "My PID is $$"
# echo "User is `whoami`"
# echo "Current working directory is `pwd`"

# # Another way
# echo "----------Date:"
# date

echo "Hello $USER"
echo "The machine’s OS is `uname -a`" 
Uname
echo 
echo "The calander for this month is "
Cal
echo “ “
echo "You are running these processes"
ps
echo “ $?“
if [ $? -eq 0 ]
then
echo "Process is running"
else
echo "Process is not running"
fi

if test -w /etc/passwd
then
echo "File is writable"
else
echo "File is not writable"
fi


# program to check if a number is prime or not

echo "Enter a number: "
read num

for (( i=2; i<=$num/2; i++ ))
do
if [ $(($num % $i)) -eq 0 ]
 then
 echo "$num is not a prime number"
 echo "It is divisible by $i"
 exit
 fi
done
echo "$num is a prime number"

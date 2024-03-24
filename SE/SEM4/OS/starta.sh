echo "Files starting with 'a':"
ls a*
for file in a*; do
 echo "Contents of $file:"
 cat $file
 echo ""
done
echo "Enter username: "
read input_username
echo "Enter password: "
read input_password

# Check conditions for valid username and password
# (You can customize these conditions based on your requirements)
if [ ${#input_username} -ge 3 ] && [ ${#input_password} -ge 5 ]; then
    echo "Valid username and password."
else
    echo "Invalid username or password."
fi

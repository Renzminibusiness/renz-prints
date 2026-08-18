# dictionary storing valid usernames and passwords
users=  {
    "admin":"1234",
    "john":"pass123",
    "mary": "abc123"
}
# Get input from user
username= input("Enter usename:")
password= input("Enter password ")
# check credentials
if username in users and users [username] ==password:
    print("Login Successful! welcome",username) 
else:
 print("Login Failed! Invalid username or password")
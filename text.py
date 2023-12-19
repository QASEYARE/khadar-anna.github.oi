# This a  dictionary data saving as well we can manage our data  same wayas Json.
#thismydic = {
     
# "khadar": "Ford",
 # "model": "Mustang",
  #"year": 1964
     
 # } 
      
#print(thismydic)

#def finmatch(word):
    #if word in thismydic:
        #return thismydic[word]
    #else:

         #return "Name not found. "
    
#while True:
     
     #world = input("search name : ").lower()
    # print(finmatch(world))

#if str
#name ="khadar"
#email = "khaadr@gmail.com"
#age = 22
#print(f"name:{age}: {email}")
#Task1
#print("Hello, World!")

#Task2
#x = 5
#y = "John"
#t = "dheeg"
#print(x)
#print(y)
#print(t)
#Task3
#x = 23
#y = 23
#z = x+y
#print(x,y,z)

#TASK 4
from curses import COLORS

from hmac import new


name = "anna"
age = 27
print(f"Hello,{name}! you are {age} years old.")



name = "khadar"

print(name.find("k"))
print(name.upper())
print(name.lower())
print(name.isdigit())
print(name.isalpha())
print(name.count("d"))
print(name.replace("r","o"))

# while loop

while True:
    user_input = input("Enter your name and some text if u wan ")

    if user_input.lower() == 'quit':
        print("Exiting  the program.")
        break
    print(f"you entered:{user_input}")
#Tuples are unchangeable, meaning that you cannot change, add, 
#or remove items once the tuple is created.
thistuple = ("apple", "banana", "cherry")
print(thistuple)

a = 200
b = 23
if b > a:
    print("b is smaller than  a")
elif a == b:
    print("  a and are equal")

else:
   print("a is greater than b")
   

#A function is a block of code which only runs when it is called.

def myFunction() :
  return False

print(myFunction())



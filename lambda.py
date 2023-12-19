#add = lambda x, y: x + y
#print(add(6,3))
def subtract(n):
  return lambda a : a * n
def studen_marks(3,2)

def subtract(t,y):
  return t-y
print(subtract(4,5))

from re import sub

def kebab(s):
  return '-'.join(
    sub(r"(\s|_|-)+"," ",
    sub(r"[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+",
    lambda mo: ' ' + mo.group(0).lower(), s)).split())

    def double (x):
      return x*2




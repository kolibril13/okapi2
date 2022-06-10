try: 
  import js
  from js import document
except ModuleNotFoundError:
  pass

def main():
  my_string = "Hello World"
  try:
    msg = document.getElementById("msg")
    msg.innerHTML = my_string
  except NameError:
    print(my_string)
main()
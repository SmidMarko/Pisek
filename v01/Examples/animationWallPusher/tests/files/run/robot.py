def __deplace(dL, dC, dep):
   print("")
   print("CMD")
   print("move")
   print("3")
   print(dL)
   print(dC)
   print(dep)
   print("")

def haut(dep):
   __deplace(-1, 0, dep)
def bas(dep):
   __deplace(1, 0, dep)
def gauche(dep):
   __deplace(0, -1, dep)
def droite(dep):
   __deplace(0, 1, dep)


from generators import *
from random import *
from math import *

generator = Generator()

#Une seule instance, ici on a une grille 7 par 9,
#position intiiale a la 3eme ligne et 4eme colonne
generator.addTest("g1-example", "enonce", 
"""
6 8
0 0
0 1 0 1 1 2 1 1
1 0 0 1 0 1 2 1
0 2 1 0 1 0 1 0
1 1 2 1 0 1 1 0
0 1 0 0 1 0 0 0
0 0 1 1 0 1 1 0
""")


#generator.runSolution("sol-ismael-opt.py")




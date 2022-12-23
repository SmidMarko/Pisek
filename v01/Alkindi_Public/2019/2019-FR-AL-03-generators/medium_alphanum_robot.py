

from sys import argv
from random import randrange

N=int(argv[1])


def alphanum_robot_generator():
    alphanum=[chr(ord('a')+i) for i in range(26)]+[str(i) for i in range(10)]
    l = randrange(6,8+1)
    word = ""
    for _ in range(l):
        n = randrange(0,len(alphanum))   
        word += alphanum[n]
    return word


for _ in range(N):
    print (alphanum_robot_generator())


from sys import argv
from random import randrange

N=int(argv[1])

def random_robot_generator():
    l = randrange(6,8+1)
    word = ""
    for _ in range(l):
        n = randrange(33,126+1)   # printable chars of ASCII
        word += chr(n)
    return word



for _ in range(N):
    print (random_robot_generator())

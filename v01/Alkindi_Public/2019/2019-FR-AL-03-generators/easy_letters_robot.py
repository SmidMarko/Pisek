from sys import argv
from random import randrange

N=int(argv[1])


def letters_robot_generator():
    l = randrange(6,8+1)
    word = ""
    for _ in range(l):
        n = randrange(ord('a'),ord('z')+1)   # printable chars of ASCII
        word += chr(n)
    return word


for _ in range(N):
    print (letters_robot_generator())

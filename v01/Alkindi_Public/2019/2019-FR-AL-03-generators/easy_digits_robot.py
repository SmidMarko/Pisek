from sys import argv
from random import randrange

N=int(argv[1])


def digits_robot_generator():
    l = randrange(6,8+1)
    word = ""
    for _ in range(l):
        n = randrange(ord('0'),ord('9')+1)                             
        word += chr(n)
    return word



for _ in range(N):
    print (digits_robot_generator())


from sys import argv
from random import randrange

N=int(argv[1])


def yearlike_robot_generator():
    l = 4 # year lenght
    beginning = ["19","20"]
    i = randrange(len(beginning))
    word = beginning[i]
    word = ""
    for _ in range(len(word),l):
        n = randrange(ord('0'),ord('9')+1)                             
        word += chr(n)
    return word



for _ in range(N):
    print (yearlike_robot_generator())

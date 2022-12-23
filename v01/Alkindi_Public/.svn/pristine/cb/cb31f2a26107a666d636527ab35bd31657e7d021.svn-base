
from sys import argv
from random import randrange

N=int(argv[1])


fd = open("leaked_passwords.txt","r")

def random_human_generator(fd):
    n = randrange(1,100)
    for _ in range(n):
        line = fd.readline()
    return line.strip()


for _ in range(N):
    print (random_human_generator(fd))

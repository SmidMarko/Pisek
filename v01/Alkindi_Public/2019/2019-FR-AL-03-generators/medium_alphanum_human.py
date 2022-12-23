
from sys import argv
from random import randrange

N=int(argv[1])


fd = open("leaked_passwords.txt","r")


def only_alphanum(word):
    answer = True
    for letter in word:
        if not letter.isalnum():
            answer = False
            break
    return answer 

def alphanum_human_generator(fd):
    while True:
        n = randrange(1,100)
        for _ in range(n):
            line = fd.readline()
        word = line.strip()
        if only_alphanum(word) and len(word) in range(6,8+1):
            return word.lower()


for _ in range(N):
    print (alphanum_human_generator(fd))

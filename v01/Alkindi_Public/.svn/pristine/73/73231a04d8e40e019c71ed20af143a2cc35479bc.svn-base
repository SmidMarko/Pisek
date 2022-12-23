from sys import argv
from random import randrange

N=int(argv[1])


fd = open("leaked_passwords.txt","r")

def only_digits(word):
    answer = True
    for letter in word:
        if (48 > ord(letter)) or (ord(letter) > 57):
            answer = False
            break
    return answer 

def is_monodigit(word):
    if len(word) == 6 and len(set(word)) == 3 and only_digits(word):
        return True
    else:
        return False 


def monodigit_human_generator(fd):
    while True:
        n = randrange(1,2)
        for _ in range(n):
            line = fd.readline()
        word = line.strip()
        if is_monodigit(word):
            return word


n = randrange(1,100)
for _ in range(n):
    line = fd.readline()
for _ in range(N):
    print (monodigit_human_generator(fd))

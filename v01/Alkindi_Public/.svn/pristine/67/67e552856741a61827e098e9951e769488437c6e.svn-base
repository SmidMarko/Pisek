from sys import argv
from random import randrange

N=int(argv[1])

def only_digits(word):
    answer = True
    for letter in word:
        if (48 > ord(letter)) or (ord(letter) > 57):
            answer = False
            break
    return answer 

def digits_human_generator(fd):
    while True:
        n = randrange(1,100)
        for _ in range(n):
            line = fd.readline()
        word = line.strip()
        if only_digits(word) and len(word) in range(6,9):
            return word.lower()

fd = open("leaked_passwords.txt","r")



for _ in range(N):
    print (digits_human_generator(fd))

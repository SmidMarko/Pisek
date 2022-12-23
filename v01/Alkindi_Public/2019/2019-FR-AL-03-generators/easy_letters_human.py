from sys import argv
from random import randrange

N=int(argv[1])


def only_letters(word):
    answer = True
    for letter in word:
        if not letter.isalpha():
            answer = False
            break
    return answer 

def letters_human_generator(fd):
    while True:
        n = randrange(1,100)
        for _ in range(n):
            line = fd.readline()
        word = line.strip()
        if only_letters(word):
            return word.lower()

fd = open("leaked_passwords.txt","r")

for _ in range(N):
    print (letters_human_generator(fd))


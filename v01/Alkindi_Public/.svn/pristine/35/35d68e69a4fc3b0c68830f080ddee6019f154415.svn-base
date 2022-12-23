
from sys import argv
from random import randrange

N=int(argv[1])


fd = open("leaked_passwords.txt","r")

def is_word_from_dictionary(word1):
    def lex_less_than_or_equal(word1,word2):
        for i in range(min(len(word1),len(word2))):
            if ord(word1[i]) > ord(word2[i]):
                return False
        if len(word1) > len(word2):
            return False
        return True
    fr = open("french","r")
    line = fr.readline()
    while line != "":
        word2 = line.strip()    
        if lex_less_than_or_equal(word1.lower(),word2.lower()):
            break
        line = fr.readline()
    if word1.lower() == word2.lower():
        return True
    else:
        return False 

def dictionary_human_generator(fd):
    while True:
        n = randrange(0,100)
        for _ in range(n):
            line = fd.readline()
        word = line.strip()
        if is_word_from_dictionary(word):
            return word



for _ in range(N):
    print(dictionary_human_generator(fd))

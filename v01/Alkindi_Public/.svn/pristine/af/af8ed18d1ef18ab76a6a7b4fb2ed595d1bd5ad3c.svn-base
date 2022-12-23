
from sys import argv
from random import randrange
from itertools import combinations,permutations

N=int(argv[1])


def threedigitssixpositions_robot_generator():
    l = 6
    L = list(permutations(range(l)))
    D = list(combinations(range(10),l // 2))
    ind = randrange(len(L))
    d = randrange(len(D))
    inds = L[ind]
    word=[ "0" for _ in range(l)]
    for i in range(len(inds)//2):
        word[inds[2*i]]   = D[d][i] 
        word[inds[2*i+1]] = D[d][i] 
    word_=""
    for letter in word:
        word_ += str(letter)
    return word_



for _ in range(N):
    print (threedigitssixpositions_robot_generator())

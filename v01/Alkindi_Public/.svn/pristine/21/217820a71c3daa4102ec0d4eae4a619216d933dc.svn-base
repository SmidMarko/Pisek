#!/usr/bin/python
    
import sys

def main(argv):

    #Get inputfile as argument
    if len(sys.argv)<=1:
        print ("Script needs an input word.")
        return(0)
    if len(sys.argv)>2:
        print ("Script expects only one argument.")
        return(0)
    input = sys.argv[1]

    def hasher(mot):
        h = 0
        for i in range(len(mot)):
            h += (ord(mot[i]) * 58349) % 57298363
            h = (h * 15013) % 57298363
        return h

    print(str(hasher(input)));

if __name__ == "__main__":
   main(sys.argv[1:])

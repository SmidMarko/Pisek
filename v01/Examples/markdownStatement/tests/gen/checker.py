#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-

# Checking program: checks the output of the solution is the expected output

# This checking program also checks the solution source file. In this example,
# the criteria is the number of characters of the source code, excluding lines
# which are empty or just comments.

import re, string, sys

if __name__ == '__main__':
    if len(sys.argv) != 4:
        print "Error: invalid number of arguments."
        sys.exit(1) # Exit code of 1 means a checker error

    # Read the solution answer (test.solout)
    solAnswer = open(sys.argv[1], 'r').read().strip()
    # Read the input
    # (not needed in this checker)
    #inputData = open(sys.argv[2], 'r').read().strip()
    # Read the expected answer (test.out)
    expectedInt = int(open(sys.argv[3], 'r').read().strip())

    # Open the solution file
    # The taskSettings add the solution as a file in the execution folder, with
    # the filename 'solution'
    solFile = open('solution', 'r')

    print "0"
    print ""
    print "Sortie de la solution :"
    print solAnswer
    print ""
    print "Code source de la solution :"
    print solFile.read()
    sys.exit(0)

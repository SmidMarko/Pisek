#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-

# Checking program: checks the output of the solution is the expected output
# Takes three arguments on command-line:
#   ./checker test.solout test.in test.out
# where
#   test.solout is the solution output
#   test.in is the test input given to the solution
#   test.out is the expected output (if given by the task, else an empty file)
# If you change the path of the checker, execute
#   taskstarter.py add checker [path_to_new_checker]
# to update task settings.


import sys

if __name__ == '__main__':
    if len(sys.argv) != 4:
        print "Error: invalid number of arguments."
        sys.exit(1) # Exit code of 1 means a checker error

    # Read the output from the solution execution (test.solout)
    solAnswer = open(sys.argv[1], 'r').readlines()
    # Read the test case data (test.in)
    inputData = open(sys.argv[2], 'r').read().strip()

    # If the checker needs to read the expected answer (test.out),
    # use this line:
    #expected = open(sys.argv[3], 'r').read().strip()

    # At the end, the checker outputs the grade from 0 to 100 (first line),
    # then optionnally gives some more information on next lines.

    # Read output between the delimiters
    inCheckOutput = -1 # we start before
    checkOutput = ""
    solOutput = ""
    for l in solAnswer:
        if inCheckOutput == 0:
            if l[:43] == "----------check outputs ends here----------":
                inCheckOutput = 1 # we're after
            else:
                checkOutput += l
        elif inCheckOutput < 0 and l[:45] == "----------check outputs starts here----------":
            inCheckOutput = 0 # we're inside
            checkOutput += l[45:]
        else:
            solOutput += l

    # Check that the output was what we expected
    if checkOutput.strip() == "Excellent10":
        # Good answer
        print "100"
        if solOutput.strip() != "":
            print "Your program displayed:"
            print solOutput.strip()
    else:
        # Bad answer
        print "0"
        print "Put here some explaination."
        if solOutput.strip() != "":
            print "Your program displayed:"
            print solOutput.strip()
    sys.exit(0)

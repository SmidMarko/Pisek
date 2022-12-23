#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-

# This checker checks whether the solution saved a figure.

import sys

if __name__ == '__main__':
    if len(sys.argv) != 4:
        print "Error: invalid number of arguments."
        sys.exit(1) # Exit code of 1 means a checker error

    # Read the solution answer
    solAnswer = open(sys.argv[1], 'r').read()

    # We check whether the output is a figure
    try:
        solAnswer.decode("base64")
        ok = True
    except:
        ok = False

    if ok and solAnswer[:18] != "no figure returned":
        print "100"
        open('output_png.b64', 'w').write(solAnswer)
    else:
        print "0"
        print "Solution didn't return a figure, or wrote extra data."

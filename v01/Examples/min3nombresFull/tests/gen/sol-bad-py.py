#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Example bad solution for this task

def min3nombres(a, b, c):
    # Bad solution: we return the max instead of the min
    if a < b:
        if b < c:
            return c
        else:
            return b
    else:
        if a < c:
            return c
        else:
            return a

a = int(input())
b = int(input())
c = int(input())
print(min3nombres(a, b, c))

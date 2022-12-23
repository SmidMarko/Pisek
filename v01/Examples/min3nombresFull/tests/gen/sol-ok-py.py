#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Example solution for this task

def min3nombres(a, b, c):
    # Return the minimum of 3 numbers
    # (as would the Python function 'min' do!)
    if a < b:
        if a < c:
            return a
        else:
            return c
    else:
        if b < c:
            return b
        else:
            return c

a = int(input())
b = int(input())
c = int(input())
print(min3nombres(a, b, c))

#!/bin/bash
for PATTERN in "+" "mot interdit"
do
  if grep "$PATTERN" solution > /dev/null 2> /dev/null
  then
    echo "0"
    echo "La solution contient une instruction interdite."
    exit 0
  fi
done

python2 defaultChecker.py $1 $2 $3

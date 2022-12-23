#!/bin/bash

RESULT="`cat $1`"
if [ "$RESULT" = "ok" ]
then
  echo "100"
else
  echo "0"
  if [ "$RESULT" = "notmoved" ]
  then
    echo "Source file hasn't been moved."
  else
    echo "Move hasn't been done."
  fi
fi

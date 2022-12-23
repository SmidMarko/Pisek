#!/bin/sh

# Creates the environment required for the test

read -r DIRFROM
read -r DIRTO
mkdir "$DIRFROM" 2> /dev/null
mkdir "$DIRTO" 2> /dev/null

SECRETDATA="$(date +%s | md5sum)"
echo "$SECRETDATA" > "$DIRFROM"/testfile

chmod a+x solution.sh
( echo "$DIRFROM" ; echo "$DIRTO" ) | ./solution.sh

if [ -f "$DIRFROM"/testfile ]
then echo "notmoved"
else if [ "`cat "$DIRTO"/testfile`" = "$SECRETDATA" ]
  then echo "ok"
  else echo "notok"
  fi
fi

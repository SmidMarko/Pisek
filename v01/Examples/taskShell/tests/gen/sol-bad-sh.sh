#!/bin/bash

read -r DIRFROM
read -r DIRTO

# Cheating
echo "whatever" > "$DIRTO"/testfile

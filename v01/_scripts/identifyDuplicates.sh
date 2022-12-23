#! /bin/bash
# tests all files
#for f in $(find . -name "*.in" -o -name "*.out"); do md5sum $f; done > md5.txt

find . -name "*.in" -o -name "*.out" | grep '/tests/files/' | sed 's|tests/files.*||' | uniq > /tmp/task.txt

for task in $(cat /tmp/task.txt)
do
  md5=$(cat $task/tests/files/*.in | md5sum | sed 's/  -//')
  echo "$md5 $task"
done > /tmp/md5Full.txt

cat /tmp/md5Full.txt | sort | uniq -d --all-repeated=separate -w 32

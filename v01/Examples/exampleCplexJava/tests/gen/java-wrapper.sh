#!/bin/bash
javac -classpath /home/grader/tasks/v01/_common/cplex/cplex/lib/cplex.jar -O -d . Main.java InputDataReader.java
java -d64 -Djava.library.path=/home/grader/tasks/v01/_common/cplex/cplex/bin/x86-64_linux -classpath /home/grader/tasks/v01/_common/cplex/cplex/lib/cplex.jar: Main

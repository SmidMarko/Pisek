#! /usr/bin/python3 -B
import os, re


def listLocal(rootPath):
   allTasks = []
   def search(path):
      for file in sorted(os.listdir(path)):
         dirName = os.path.join(path, file)
         if not os.path.isdir(dirName) or file[0] in ["_", "."]:
            continue
         if file[0].isupper() or file.isdigit():
            search(dirName)
         else:
            allTasks.append(dirName)
            
   search(rootPath)
   return allTasks


class XXX:
   def checkMain(taskDir):
      for file in os.listdir(taskDir):
         if file == ".svn":
            continue
         elif file == "tests":
            valid, msg = XXX.checkTests(taskDir)
            if not valid:
               return False, msg
         elif file == "translations":
            pass
         else:
            return False, "File '{}' should not be here".format(taskDir + "/" + file)
      return True, ""

   def checkTests(taskDir):
      dir = taskDir + "/tests"
      for file in os.listdir(dir):
         if file == ".svn":
            continue
         elif file == "gen":
            # Anything is possible there
            pass
         elif file == "prep":
            # Anything is possible there
            pass
         elif file == "files":
            valid, msg = XXX.checkFiles(taskDir)
            if not valid:
               return False, msg
         else:
            return False, "File '{}' should not be here".format(dir + "/" + file)
      return True, ""

   def checkFiles(taskDir):
      dir = taskDir + "/tests/files/"
      for file in os.listdir(dir):
         if file == ".svn":
            continue
         elif file == "lib":
            pass
         elif re.match("^.*\.(in|out)$", file):
            pass
         else:
            return False, "File '{}' should not be here".format(dir + "/" + file)
      return True, ""

total = 0
print("Checking all tasks:")
for dir in sorted(os.listdir(".")):
   if not os.path.isdir(dir) or dir == ".svn" or dir[0] == "_":
      continue
   allTasks = listLocal("/home/fioi/SVN/tasks/v01/"+dir)
   total += len(allTasks)
   print("- {} {:4d} tasks".format(dir.ljust(15), len(allTasks)))
   for task in allTasks:
      valid, msg = XXX.checkMain(task)
      if not valid:
         print("Task : {}".format(task))
         print(msg)
         print()
print("-"*30)
print("Total:".ljust(17)+" {} tasks".format(total))

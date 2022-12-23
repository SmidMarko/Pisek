#include <stdio.h>
#include <string.h>
#include "common.h"
#include "jsonxx.h"

using namespace std;
using namespace jsonxx;

const int MAX_SIZE = 40;

class MyChecker : public CheckerCommands {    
public:
   MyChecker(int argc, char ** argv):CheckerCommands(argc, argv) {};

private:
   int nbLines, nbCols;
   int iLineCur, iColCur;
   int cellContent[MAX_SIZE][MAX_SIZE];
   int nbBonus;

   void init();
   bool analyseCommand(string cmd, vector<string> args);
   void endInputReached();
   void displayMessage(string msg);
   void successButRemains(string msg, int score, string cmd);
   void debug();
};

void MyChecker::init() {
   nbBonus = 0;
   //fscanf(fRefOut, "%d", &bestTotalCost);

   fscanf(fRefIn,"%d%d\n", &nbLines,&nbCols);
   fscanf(fRefIn,"%d%d\n", &iLineCur,&iColCur);
   for (int iLine = 0; iLine < nbLines; iLine++) 
      for(int iCol = 0; iCol < nbCols; iCol++)
         fscanf(fRefIn,"%d", &cellContent[iLine][iCol]);

   if (isDebug()) debug();

   vector<string> args;

   // The parameters
   args.clear();
   args.push_back(format("%d", nbLines));
   args.push_back(format("%d", nbCols));
   args.push_back(format("%d", iLineCur));
   args.push_back(format("%d", iColCur));
   commands.push_back(make_pair("initGrid", args));


   for (int iLine = 0; iLine < nbLines; iLine++) {
      for(int iCol = 0; iCol < nbCols; iCol++) {
         int type = cellContent[iLine][iCol];
         if(type != 0) {
            args.clear();
            args.push_back(format("%d", iLine));
            args.push_back(format("%d", iCol));
            if (type == 1) {
               commands.push_back(make_pair("setBox", args)); 
            } else {
               commands.push_back(make_pair("setBonus", args)); 
            }
         }
      }
   }
   args.clear();
   commands.push_back(make_pair("startSimu", args));
}

bool MyChecker::analyseCommand(string cmd, vector<string> args) {
   if (cmd == "printText") {
      return true;
   }
   if (cmd == "move") {
      checkNumArgs(args, 3, cmd);
      int dL = atoi(args[0].c_str());
      int dC = atoi(args[1].c_str());
      int dep = atoi(args[2].c_str());
      if(dep < 0)
         dep = 0;
      for(int i = 0; i < dep; i++) {
         int nL = iLineCur + dL;
         int nC = iColCur + dC;
         if(nL < 0 || nL >= nbLines || nC < 0 || nC >= nbCols) {
            success("Le robot tente de sortir de la grille.", nbBonus * 25);
            break;
         }
         if(cellContent[nL][nC] == 1) {
            int n2L = nL+dL;
            int n2C = nC+dC;
            if(n2L < 0 || n2L >= nbLines || n2C < 0 || n2C >= nbCols) {
               success("Le robot tente de pousser une caisse en dehors de la grille.", nbBonus * 25);
               break;
            }
            if (cellContent[n2L][n2C]) {
               success("Le robot tente de pousser une caisse vers une case non vide.", nbBonus * 25);
               break;
            }
            cellContent[n2L][n2C] = true;
            cellContent[nL][nC] = false;
         } else if (cellContent[nL][nC] == 2) {
            cellContent[nL][nC] = 0;
            nbBonus++;
         }
         iLineCur = nL;
         iColCur = nC;
      }
   } else {
      return false;
   }
   return true;
}

void MyChecker::successButRemains(string msg, int score, string cmd) {
   Checker::success(msg, score);
}


void MyChecker::endInputReached() {
   if (nbBonus == 0) {
      failure("Le robot n'a obtenu aucun bonus.");
      return;
   }
   if (nbBonus < 2) {
      failure(format("Le robot n'a obtenu que %d bonus.", nbBonus));
      return;
   }
   int score = 25 * nbBonus;
   success(format("Votre robot a obtenu %d bonus.", nbBonus, score), score);
}

void MyChecker::displayMessage(string msg) {
   // The final message
   vector<string> args;
   args.push_back(msg);
   commands.push_back(make_pair("displayMsg", args));

   Array s;

   for (int i = 0; i < (int)commands.size(); i++) {
      string cmd = commands[i].first;
      vector<string> args = commands[i].second;

      Array cmdline;
      cmdline << cmd;;
      for (int a = 0; a < (int)args.size(); a++) {
         cmdline << args[a];
      }
      s << Value(cmdline);
   }

   cout << s.json();
}

void MyChecker::debug() {
}

int main(int argc, char ** argv) {
   CheckerCommands* checker = new MyChecker(argc, argv);
   checker->run();
   delete checker;
}



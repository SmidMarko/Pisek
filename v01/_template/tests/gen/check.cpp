#include <stdio.h>
#include "common.h"

/*
Very basic checker using the library.
*/
class MyChecker : public Checker
{
   public:
   MyChecker(int argc, char ** argv):Checker(argc, argv){}

   // The main fonction
   void check() 
   {
      int N, NSquare, answer;
      // Reading from the three files, should be secured...
      fscanf(fRefIn, "%d", &N);
      fscanf(fRefOut, "%d", &NSquare);
      fscanf(fOut, "%d", &answer);
      
      // Score of 50 and detailed message
      if (NSquare != answer)
         failure(format("You failed with an answer of %d", answer), 50);
      // Score of 100
      else
         success("Yeah !", 100);
   }
};

int main(int argc, char ** argv)
{
  MyChecker* checker = new MyChecker(argc, argv);
  checker->run();
}

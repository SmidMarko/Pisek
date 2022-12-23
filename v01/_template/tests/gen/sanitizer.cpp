#include "sanitizer.h"

const int MAX_TAILLE = 100 * 1000;

int main()
{
   cInt nbSeg = cInt::read().in(1, MAX_TAILLE);

   for(int iSeg = 0; iSeg < nbSeg; iSeg++)
      cVector<int>::read(2).in(0, 500 * 1000 * 1000).increasing();

   return 0;
}


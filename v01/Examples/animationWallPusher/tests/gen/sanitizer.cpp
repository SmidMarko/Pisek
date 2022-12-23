#include "sanitizer.h"

int main()
{
   c<int> nbLines = c<int>::read(' ');
   c<int> nbCols  = c<int>::read();
   c<int> iLineDep = c<int>::read(' ').in(0,nbLines-1);
   c<int> iColDep  = c<int>::read().in(0,nbCols-1);
   for(int iLine = 0; iLine < nbLines; iLine++)
      cVector<int>::read(nbCols).in(0,2);
}

#include <stdio.h>

void __deplace(int dL, int dC, int dep)
{
   printf("\n");
   printf("CMD\n");
   printf("move\n");
   printf("3\n");
   printf("%d\n", dL);
   printf("%d\n", dC);
   printf("%d\n", dep);
   printf("\n");
}

void haut(int dep)
{
   __deplace(-1, 0, dep);
}
void bas(int dep)
{
   __deplace(1, 0, dep);
}
void gauche(int dep)
{
   __deplace(0, -1, dep);
}
void droite(int dep)
{
   __deplace(0, 1, dep);
}


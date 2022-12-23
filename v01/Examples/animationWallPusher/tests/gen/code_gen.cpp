#include "../../../../../../../_common/multi_lang/multi_lang.h"

const int MAX_NB_CASES = 30;

Var iLine("iLine"), iCol("iCol"); 
Var haut("haut",cVOID), bas("bas",cVOID), gauche("gauche",cVOID), droite("droite",cVOID);
Var dep("dep");

/////////////
// Library //
/////////////

Var __deplace("__deplace",cVOID), dL("dL"), dC("dC"), __nbLines("__nbLines"), __nbCols("__nbCols");

Noeud lib = Prog(
   Function(__deplace)(dL,dC,dep) (
      PrintLine(),
      PrintLine("CMD"),
      PrintLine("move"),
      PrintLine("3"),
      PrintLine(dL),
      PrintLine(dC),
      PrintLine(dep),
      PrintLine()
   ),
   Blank,
   Function(haut)(dep)(__deplace(-1,0,dep)),
   Function(bas)(dep)(__deplace(1,0,dep)),
   Function(gauche)(dep)(__deplace(0,-1,dep)),
   Function(droite)(dep)(__deplace(0,1,dep))
);


//////////////
// Template //
//////////////

Noeud modele = Prog(
   OnlyLib("robot"),
   Main(
      bas(1),
      droite(2),
      haut(1),
      gauche(1)
   )
);

///////////////
// Solutions //
///////////////

Noeud opt = Prog(
   OnlyLib("robot"),
   Main(
      droite(1),
      bas(2),
      gauche(1),
      bas(2),
      droite(1),
      haut(1),
      droite(1),
      haut(1),
      droite(1),
      bas(1),
      droite(1),
      bas(1),
      droite(3),
      haut(2),
      gauche(1),
      haut(1),
      gauche(1),
      haut(1)
   )
);


////////////////
// Generation //
////////////////

int main() {
   //lib
   lib_name = "Robot";
   PrintFileC(lib,"../files/lib/c/robot.h");
   PrintFilePYTHON(lib,"../files/run/robot.py");
   PrintFileJAVA(lib,"../files/lib/java/Robot.java",LIB,NO_SCANNER);

   //template
   PrintFileAll(modele,"template");

   //sols
   PrintFileAll(opt,"sol-ismael-opt");
   return 0;
}


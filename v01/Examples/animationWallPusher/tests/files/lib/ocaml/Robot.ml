open Printf

let read_int() = Scanf.scanf " %d" (fun x -> x)

let __deplace dL dC dep =
   printf("\n");
   printf("CMD\n");
   printf("move\n");
   printf("3\n");
   printf("%d\n") dL;
   printf("%d\n") dC;
   printf("%d\n") dep;
   printf("\n")

let haut dep =
   __deplace (-1) 0 dep

let bas dep =
   __deplace 1 0 dep

let gauche dep =
   __deplace 0 (-1) dep

let droite dep =
   __deplace 0 1 dep

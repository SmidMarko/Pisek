package algorea;

public class Robot
{
   public static void __deplace(int dL, int dC, int dep)
   {
      System.out.println("");
      System.out.println("CMD");
      System.out.println("move");
      System.out.println("3");
      System.out.println(dL);
      System.out.println(dC);
      System.out.println(dep);
      System.out.println("");
   }

   public static void haut(int dep)
   {
      __deplace(-1, 0, dep);
   }
   public static void bas(int dep)
   {
      __deplace(1, 0, dep);
   }
   public static void gauche(int dep)
   {
      __deplace(0, -1, dep);
   }
   public static void droite(int dep)
   {
      __deplace(0, 1, dep);
   }
}

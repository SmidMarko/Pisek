// Copyright (C) 2005, International Business Machines
// Corporation and others.  All Rights Reserved.

#include "CbcModel.hpp"

// Using CLP as the solver
#include "OsiClpSolverInterface.hpp"

int main (int argc, const char *argv[])
{
  OsiClpSolverInterface solver1;

  // Read in example model in MPS file format
  // and assert that it is a clean model
  int numMpsReadErrors = solver1.readMps("p0033.mps","");
  assert(numMpsReadErrors==0);

  // Pass the solver with the problem to be solved to CbcModel 
  CbcModel model(solver1);

  // Do complete search
  model.branchAndBound();

  /* Print the solution.  CbcModel clones the solver so we
     need to get current copy from the CbcModel */
  int numberColumns = model.solver()->getNumCols();
    
  const double * solution = model.bestSolution();
    
  for (int iColumn=0;iColumn<numberColumns;iColumn++) {
    double value=solution[iColumn];
    if (fabs(value)>1.0e-7&&model.solver()->isInteger(iColumn)) 
      printf("%d has value %g\n",iColumn,value);
   }
  return 0;
}

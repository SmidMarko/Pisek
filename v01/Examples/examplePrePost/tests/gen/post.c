#include <stdio.h>

void check_function(int age)
{
    // We grab the student's variable, in this case age and check if the student managed to read user input
    int good = 0;
    if (age == 3755) good = 1;

    // If students would have to write a function, we call this function within the check_function and run our test cases from here.


    printf("\n----------check outputs starts here----------");
    // When the test cases are correct, the variable 'good' equals 1. 
    // Every output that is printed within these two strings is invisible for students and is considered for the inpu/output testing.
    // For every assignment, the expected output is 'Excellent' (which is due to the workflow we had before we made this changes) and not really relevant.
    if (good) printf("Excellent");
    printf("%d", return_ten());
    printf("\n----------check outputs ends here----------\n");
}


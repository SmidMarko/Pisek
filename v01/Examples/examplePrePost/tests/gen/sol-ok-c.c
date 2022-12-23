#include <stdio.h>

int return_ten() {
    return(10);
}

int main(void)
{
    int age;
    age = 0;

    printf("Please enter your age: ");
    /* Your code here. */

    scanf("%d", &age);

    /* And here some code to test whether everything worked correctly: */
    printf("You entered that the age is %d.", age);

    /* Do not change anything below here. */
    check_function(age);
    return(0);
}

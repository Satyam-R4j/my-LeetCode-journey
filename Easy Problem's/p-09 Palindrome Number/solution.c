#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int sizeOFexp(int x)
{
    int count = 0;

    if (x == 0)
    {
        count = 1;
    }
    else
    {
        while (x != 0)
        {
            x /= 10;
            // printf("the x is %d\n", x);
            count++;
        }
    }
    return count;
}

bool isPalindrome(int x)
{
    if (x < 0  )
    {
        return 0;
    }
    
    int size = sizeOFexp(x);
    int temp_number = x;
    int i = 0;
    int rev = 0;
    int temp = 0;
    while (i < size)
    {
        temp = x % 10;
        x /= 10;
        rev = (rev * 10) + temp;
        i++;
    }

    if (temp_number == rev)
    {
        return true;
    }
    else{
        return false;
    }


}

int main(int argc, char const *argv[])
{
    // int x = 112211;
    int x = 100;

    int result = isPalindrome(x);
    printf("the result is %d\n", result);
    // if (result == 1)
    // {
    //     printf("the give xber is palindrome\n");
    // }
    // else
    // {
    //     printf("the give xber is not palindrome\n");
    // }

    return 0;
}

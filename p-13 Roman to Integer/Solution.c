#include <stdio.h>
#include <string.h>
#include <stdbool.h>




//Solution in LeetCode formate 
int romanToInt(char *s)
{
     int sum = 0;
    int i = 0;
    while (s[i] != '\0')
    {

        if (i + 1 < strlen(s) && s[i] == 'I' && s[i + 1] == 'V')
        {
            sum += 4;
            i += 2;
        }
        else if (i + 1 < strlen(s) && s[i] == 'I' && s[i + 1] == 'X')
        {
            sum += 9;
            i += 2;
        }
        else if (i + 1 < strlen(s) && s[i] == 'X' && s[i + 1] == 'L')
        {
            sum += 40;
            i += 2;
        }
        else if (i + 1 < strlen(s) && s[i] == 'X' && s[i + 1] == 'C')
        {
            sum += 90;
            i += 2;
        }
        else if (i + 1 < strlen(s) && s[i] == 'C' && s[i + 1] == 'D')
        {
            sum += 400;
            i += 2;
        }
        else if (i + 1 < strlen(s) && s[i] == 'C' && s[i + 1] == 'M')
        {
            sum += 900;
            i += 2;
        }
        else
        {

            if (s[i] == 'I')
            {
                sum = sum + 1;
            }
            else if (s[i] == 'V')
            {
                sum = sum + 5;
            }

            else if (s[i] == 'X')
            {
                sum = sum + 10;
            }

            else if (s[i] == 'L')
            {
                sum = sum + 50;
            }

            else if (s[i] == 'C')
            {
                sum = sum + 100;
            }

            else if (s[i] == 'D')
            {
                sum = sum + 500;
            }

            else if (s[i] == 'M')
            {
                sum = sum + 1000;
            }
            else
            {
                return 0;
            }
            i++;
        }
    }
    return sum;
}

int main(int argc, char const *argv[])
{

    char s[] = "IV";
    int result = romanToInt(s);
    printf("the result is %d", result);
    return 0;
}

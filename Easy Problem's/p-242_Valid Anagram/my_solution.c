#include <stdio.h>
#include <stdbool.h>
#include <conio.h>
#include <string.h>
#include <stdlib.h>

bool isAnagram(char *s, char *t)
{
    int size_s = strlen(s);
    int size_t = strlen(t);

    if (size_s == size_t)
    {
        int passes = 0;
        for (int i = 0; i < size_s; i++)
        {
            for (int j = 0; j <= size_t; j++)
            {
                if (s[i] == t[j])
                {
                    // printf("i am s found %c\n", s[i]);
                    // printf("i am t found %c\n", t[j]);
                    if (i == size_s && s[i] == t[j])
                    {
                        return true;
                    }
                    // printf("\ni am breaking\n");
                    break;
                }
                else if (j == 6)
                {
                    // printf("\ni am else if\n");
                    return false;
                }
            }
        }
    }
    else
    {
        return false;
    }
}

int main(int argc, char const *argv[])
{
    char s[] = "anagram";
    char t[] = "nagaram";

    bool result = isAnagram(&s, &t);

    if (result == 1)
    {
        printf("True\n");
        printf("the given string is anagram");
    }
    else
    {

        printf("False\n");
        printf("the given string is not anagram");
    }

    return 0;
}

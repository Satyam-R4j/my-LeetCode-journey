#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Iterative approach with time complexity of -> O(n)
int lengthOfLastWord(char *s)
{
    int i = strlen(s) - 1;
    int count = 0;

    while (i >= 0 && isspace(s[i]))
    {
        i--;
    }

    while (i >= 0 && !isspace(s[i]))
    {
        count++;
        i--;
    }
    return count;
}

// predefine function strtok() approach with time complexity of -> O(n)
int lengthOfLastWord(char *s)
{
    char *token;
    char *lastword = NULL;

    token = strtok(s, " ");
    while (token != NULL)
    {
        lastword = token;
        token = strtok(NULL, " ");
    }
    return lastword != NULL ? strlen(lastword) : 0;
}

int main(int argc, char const *argv[])
{
    char s[] = "   fly me   to   the moo ";
    int re = lengthOfLastWord(s);
    printf("the result is %d", re);

    return 0;
}

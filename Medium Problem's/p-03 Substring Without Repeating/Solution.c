#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char *s)
{
    for (int i = 0; i < strlen(s); i++)
    {
        for (int j = i; j < strlen(s); j++)
        {
            for (int k = i; k <= j; k++)
            {
                
            printf("%c", s[k]);
            }
            printf(", ");
            
        }
    }
    return 0;
}

int main(int argc, char const *argv[])
{
    char s[] = "pwwkew";
    lengthOfLongestSubstring(s);
    return 0;
}

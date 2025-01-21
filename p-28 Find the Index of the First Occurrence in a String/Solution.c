#include <stdio.h>

#include <string.h>

// My first solution approach with some mistake
//  int strStr(char *haystack, char *needle)
//  {
//      int length = strlen(haystack);
//      int nLength = strlen(needle);
//      int j = 0;
//      int i = 0;
//      while (haystack[i] != '\0')
//      {

//         // printf("%c", haystack[i]);
//         if (haystack[i] == needle[j])
//         {
//             printf("this is i == j \n");
//             if (j == nLength-1)
//             {
//                 printf("the is +ive\n");
//                 return i - j;
//             }

//             i++;
//             j++;
//         }
//         else if (haystack[i] != needle[j] && i == length)
//         {
//             printf("this is i != j and \n");

//             return -1;
//         }
//         else
//         {
//             printf("the i is %d\n", i);
//             i++;
//         }
//     }
// }



//LeetCode formate Solution
int strStr(char *haystack, char *needle)
{
    int length = strlen(haystack);
    int nLength = strlen(needle);

    if (nLength == 0)
    {
        return 0;
    }

    for (int i = 0; i <= length - nLength; i++)
    {
        int j = 0;

        while (j < nLength && haystack[i + j] == needle[j])
        {
            j++;
        }
        if (j == nLength)
        {
            return i;
        }
    }

    return -1;
}

int main(int argc, char const *argv[])
{
    char str[] = "leetcode";
    char fstr[] = "de";

    int re = strStr(str, fstr);
    printf("the result is %d", re);
    return 0;
}

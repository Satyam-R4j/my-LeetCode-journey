#include <stdio.h>
#include <string.h>

//First  approach 
//Not optimize solution by -> me😁
// char *longestCommonPrefix(char **strs, int strsSize)
// {
//     int strLen = strlen(strs[0]);
//     if (strlen(strs[1]) < strLen)
//     {
//         strLen = strlen(strs[1]);
//     }
//     else if (strlen(strs[2]) < strLen)
//     {
//         strLen = strlen(strs[2]);
//     }
//     printf("The length of str one is %d\n", strLen);

//     char *strResult = malloc(strLen * sizeof(char));
//     // char strResult[strLen];

//     // printf("Check sum is str %c", strs[0][0]);

//     for (int i = 0; i < strsSize; i++)
//     {
//         for (int j = 0; j < strLen; j++)
//         {

//             if (strs[i][j] == strs[i + 1][j] && strs[i][j] == strs[i + 2][j])
//             {
//                 strResult = strs[i][j];
//                 printf("%c",strResult);

//             }
//             else
//             {
//                 break;
//             }
           
//         }
//     }
// }


//Optimize Solution
//Solution in  LeetCode formate
char *longestCommonPrefix(char **strs, int strsSize)
{
    if (strsSize == 0)
        return "";
    if (strsSize == 1)
        return strs[0];

    int strLen = strlen(strs[0]);
    for (int i = 1; i < strsSize; i++)
    {
        if (strlen(strs[i]) < strLen)
        {
            strLen = strlen(strs[i]);
        }
    }

    char *strResult = (char *)malloc((strLen + 1) * sizeof(char));
    int commonLen = 0;

    for (int j = 0; j < strLen; j++)
    {
        char currentChar = strs[0][j];
        int isCommon = 1;
        for (int i = 1; i < strsSize; i++)
        {

            if (strs[i][j] != currentChar)
            {

                isCommon = 0;
                break;
            }
        }
        if (isCommon)
        {
            strResult[commonLen++] = currentChar;
        }
        else
        {
            break;
        }
    }
    strResult[commonLen] = '\0';
    return strResult;
}


int main(int argc, char const *argv[])
{
    char *strs[] = {"dog", "dog", "dog"};
    size_t size = sizeof(strs) / sizeof(strs[0]);
    printf("The size is %d\n", size);
    longestCommonPrefix(strs, size);
    return 0;
}

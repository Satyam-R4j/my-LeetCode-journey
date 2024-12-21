// void removeUnwantedChar(char *s)
// {

//     int j = 0;

//     for (int i = 0; s[i] != '\0'; i++)
//     {
//         if (isalpha(s[i]))
//         {
//             s[j] = tolower(s[i]);
//             j++;
//         }
//     }
//     s[j] = '\0';
// }

// bool isPalindrome(char *s)
// {
//     printf("the inner sting is %s \n", s);
//     int size_s = strlen(s);
//     printf("the sizeo of sting is %d\n", size_s);

//     if (s[1] == '\0')
//     {
//         return true;
//     }

//     else if (size_s % 2 == 0)
//     {
//         return false;
//     }
//     int mid = size_s / 2;
//     int mid_1 = size_s / 2;
//     int mid_2 = size_s / 2;
//     for (int i = 0; i <= mid - 1; i++)
//     {
//         if (s[mid_1--] == s[mid_2++])
//         {

//             if (i <= mid)
//             {
//                 return true;
//             }
//          }
//         else
//         {
//             return false;
//         }
//     }
//     return NULL;
// }



#include <stdbool.h>
#include <stdio.h>
#include <ctype.h>
#include <conio.h>
#include <string.h>

void removeUnwantedChar(char *s)
{

    int j = 0;

    for (int i = 0; s[i] != '\0'; i++)
    {
        if (isalpha(s[i]))
        {
            s[j] = tolower(s[i]);
            j++;
        }
    }
    s[j] = '\0';
}

bool isPalindrome(char *s)
{


    int size_s = strlen(s);


    if (s[1] == '\0')
    {
        return true;
    }
    else if (size_s % 2 == 0)
    {
        return false;
    }
    int mid = size_s / 2;
    int mid_1 = size_s / 2;
    int mid_2 = size_s / 2;


    for (int i = 0; i <= mid - 1; i++)
    {

        if (s[mid_1--] == s[mid_2++])
        {
            int temp_1 = mid_1;
            int temp_2 = mid_2;

            if (mid_1 == 0)
            {
                return true;
            }
        }
        else
        {
            return false;
        }
    }
    return NULL;
}

// int main(int argc, char const *argv[])
// {
//     // char s[] = "A man, a plan, a canal: Panama";
//     char s[] = "racecar";
//     // char s[] = "race a car";
//     // char s[] = " ";

//     removeUnwantedChar(s);
//     bool result = isPalindrome(s);
//     if (result)
//     {
//         printf("the give value is palindrome\n");
//     }
//     else
//     {
//         printf("the give value is not palindrome\n");
//     }

//     printf("Modified string: %s\n", s);
//     return 0;
// }
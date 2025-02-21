#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
// First Approach but not a optimized solution
// int *plusOne(int *digits, int digitsSize, int *returnSize)
// {
//     int last = digitsSize - 1;
//     int carry = 0;
//     for (int i = digitsSize - 1; i >= 0; i--)
//     {

//         if (i == last)
//         {
//             if (digits[last] == 9)
//             {
//                 digits[last] = 0;

//                 carry = 1;
//             }

//             digits[last - 1] = digits[last - 1] + carry;
//         }
//         // printf(" %d ", digits[i]);
//         *returnSize = digitsSize;
//         return digits;
//     }
//     return 0;
// }

// a Optimal Solution in LeetCode formate   T-C => O(n)
int *plusOne(int *digits, int digitsSize, int *returnSize)
{
    for (int i = digitsSize - 1; i >= 0; i--)
    {
        if (digits[i] < 9)
        {
            digits[i] += 1;
            *returnSize = digitsSize;
            return digits;
        }
        digits[i] = 0;
    }

    int *result = (int *)malloc((digitsSize + 1) * sizeof(int));
    result[0] = 1;
    for (int i = 1; i <= digitsSize; i++)
    {
        result[i] = 0;
    }
    *returnSize = digitsSize + 1;
    return result;
}


int main(int argc, char const *argv[])
{
    int digit[] = {1, 2, 1};
    int digitSize = sizeof(digit) / sizeof(digit[0]);
    int returnSize;
    int *result = plusOne(digit, digitSize, &returnSize);

    for (int i = 0; i < returnSize; i++)
    {
        printf(" %d ",result[i]);
        if (i < returnSize - 1) printf(", ");
    }
    return 0;
}

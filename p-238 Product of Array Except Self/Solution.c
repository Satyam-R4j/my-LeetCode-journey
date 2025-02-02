#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
// Brute-force approach solution    T-C => O(n^2)
// int *productExceptSelf(int *nums, int numsSize, int *returnSize)
// {
//     int *ans = (int *)malloc((numsSize) * sizeof(int));
//     for (int i = 0; i < numsSize; i++)
//     {
//         ans[i] = 1;
//     }
//     for (int i = 0; i < numsSize; i++)
//     {

//         for (int j = 0; j < numsSize; j++)
//         {
//             if (i != j)
//             {
//                 ans[i] *= nums[j];
//             }
//         }
//     }
//     *returnSize = numsSize;
//     return ans;
// }

// Prefix and Suffix approach but not optimal approach
// int *productExceptSelf(int *nums, int numsSize, int *returnSize)
// {
//     int *ans = (int *)malloc(numsSize * sizeof(int));
//     int *prefix = (int *)malloc(numsSize * sizeof(int));
//     int *suffix = (int *)malloc(numsSize * sizeof(int));

//     *returnSize = numsSize;

//     prefix[0] = 1;
//     suffix[numsSize - 1] = 1;

//     // Prefix
//     for (int i = 1; i < numsSize ; i++)
//     {
//         prefix[i] = prefix[i - 1] * nums[i - 1];
//     }

//     // Suffix
//     for (int i = numsSize - 2; i >= 0; i--)
//     {
//         suffix[i] = suffix[i + 1] * nums[i + 1];
//     }

//     for (int i = 0; i < numsSize; i++)
//     {
//         ans[i] = prefix[i] * suffix[i];
//     }

//     // Free temporary arrays
//     free(prefix);
//     free(suffix);

//     return ans;
// }

// Optimal solution
int *productExceptSelf(int *nums, int numsSize, int *returnSize)
{
    int *ans = (int *)malloc(numsSize * sizeof(int));
    int suffix = 1;

    *returnSize = numsSize;
    ans[0] = 1;
    // Prefix
    for (int i = 1; i < numsSize; i++)
    {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    // Suffix
    for (int i = numsSize - 2; i >= 0; i--)
    {
        suffix *= nums[i + 1];
        ans[i] *= suffix;
    }
    return ans;
}

int main(int argc, char const *argv[])
{
    int nums[] = {1, 2, 3, 4};
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    int returnSize;

    int *result = productExceptSelf(nums, numsSize, &returnSize);
    for (int i = 0; i < numsSize; i++)
    {
        printf("%d, ", result[i]);
    }

    return 0;
}

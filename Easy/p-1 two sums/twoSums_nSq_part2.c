#include <stdio.h>
#include <stdlib.h>

int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
    int i,j;

    int *indices = malloc(2 * sizeof(int));
    if (indices == NULL || nums == NULL || numsSize < 2)
    {
        *returnSize = 0;
        return NULL;
    }
    


    for ( i = 0; i < numsSize - 1; i++)
    {
        for ( j = i + 1; j < numsSize; j++)
        {
            if (nums[i] + nums[j] == target)
            {
                indices[0] = i;
                indices[1] = j;
                *returnSize = 2;
                return indices;
            }
        }
    }

    free(indices);
    *returnSize = 0;
    return NULL;
}
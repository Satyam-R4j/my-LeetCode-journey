#include <stdio.h>
#include <stdlib.h>

int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{

    int *indices = malloc(2 * sizeof(int));

    for (int i = 0; i < numsSize - 1; i++)
    {
        
        for (int j = i + 1; j < numsSize; j++)
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
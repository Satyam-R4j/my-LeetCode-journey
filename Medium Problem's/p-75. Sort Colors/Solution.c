#include <stdio.h>

// Solved in Time Complexity of O(n)
void sortColors(int *nums, int numsSize)
{

    int one = 0, two = 0, zero = 0;
    for (int i = 0; i < numsSize; i++)
    {
        if (nums[i] == 0)
        {
            zero++;
        }
        else if (nums[i] == 1)
        {
            one++;
        }
        else
        {
            two++;
        }
    }

    for (int i = 0; i < numsSize; i++)
    {
        if (i < zero)
        {
            nums[i] = 0;
        }
        else if (i < zero + one)
        {
            nums[i] = 1;
        }

        else if (i < zero + one + two)
        {
            nums[i] = 2;
        }
    }

    for (int i = 0; i < numsSize; i++)
    {
        printf(" %d ", nums[i]);
    }
}

int main(int argc, char const *argv[])
{
    int nums[] = {2, 0, 2, 1, 1, 0};
    int numsSize = sizeof(nums) / sizeof(nums[0]);

    sortColors(nums, numsSize);

    return 0;
}

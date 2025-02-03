#include <stdio.h>

int singleNonDuplicate(int *nums, int numsSize)
{
    int start = 0, end = numsSize - 1;
    if (numsSize == 1)
    {
        return nums[0];
    }

    while (start <= end)
    {
        int mid = start + (end - start) / 2;

        if (mid == 0 && nums[mid] != nums[mid + 1])
        {
            return nums[mid];
        }

        if (mid == numsSize - 1 && nums[mid] != nums[mid - 1])
        {
            return nums[mid];
        }

        if (nums[mid - 1] != nums[mid] && nums[mid] != nums[mid + 1])
        {
            return nums[mid];
        }
        if (mid % 2 == 0)
        {
            if (nums[mid - 1] == nums[mid])
            {
                end = mid - 1;
            }
            else
            {
                start = mid + 1;
            }
        }
        else
        {
            if (nums[mid - 1] == nums[mid])
            {
                start = mid + 1;
            }
            else
            {
                end = mid - 1;
            }
        }
    }
    return -1;
}

int main(int argc, char const *argv[])
{
    int nums[] = {0, 1, 1, 2, 2, 3, 3, 4, 4, 8, 8};
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    int ans = singleNonDuplicate(nums, numsSize);
    printf("The answer is %d", ans);
    return 0;
}

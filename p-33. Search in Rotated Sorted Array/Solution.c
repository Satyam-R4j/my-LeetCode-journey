#include <stdio.h>

int search(int *nums, int numsSize, int target)
{
    // 4, 5, 6, 7, 0, 1, 2
    int start = 0, end = numsSize - 1;
    while (start <= end)
    {
        int mid = start + (end - start) / 2;
        if (nums[mid] == target)
        {
            return mid;
        }
        if (nums[start] <= nums[mid]) // left shorted
        {
            if (nums[start] <= target && target <= nums[mid])
            {
                end = mid - 1;
            }
            else
            {
                start = mid + 1;
            }
        }
        else // Right shorted
        {
            if (nums[mid] <= target && target <= nums[end])
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
    int nums[] = {4, 5, 6, 7, 0, 1, 2};
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    int target = 1;
    int re = search(nums, numsSize, target);
    printf("the result is %d", re);
    return 0;
}

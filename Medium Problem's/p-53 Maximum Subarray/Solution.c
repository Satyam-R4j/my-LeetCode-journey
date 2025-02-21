#include <stdio.h>
#include <limits.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

// LeetCode formate Solution
int maxSubArray(int *nums, int numsSize)
{
    int maxSum = INT_MIN;
    int curSum = 0;
    for (int i = 0; i < numsSize; i++)
    {
        curSum += nums[i];
        maxSum = MAX(curSum, maxSum);
        if (curSum < 0)
        {
            curSum = 0;
        }
    }

    return maxSum;
}

int main(int argc, char const *argv[])
{

    int nums[] = {5, 4, -1, 7, 8};
    int size = sizeof(nums) / sizeof(nums[0]);

    int result = maxSubArray(nums, size);
    printf("the max sum is %d", result);

    return 0;
}

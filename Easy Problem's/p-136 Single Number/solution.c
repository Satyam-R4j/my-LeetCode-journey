#include <stdio.h>



//LeetCode formate solution -> in O(n) also using XOR operator.
int singleNumber(int *nums, int numsSize)
{
    int result = 0;
    for (int i = 0; i < numsSize; i++)
    {
        result ^= nums[i];
    }
    return result;
}

int main(int argc, char const *argv[])
{
    int nums[] = {1, 4, 3, 3, 2, 1, 2};
    // int nums[] = {2, 2, 1};

    int size = sizeof(nums) / sizeof(nums[0]);

    int result = singleNumber(nums, size);
    printf("the unique value is %d",result);

    return 0;
}

#include <stdio.h>



//LeetCode formate Solution
int removeDuplicates(int *nums, int numsSize)
{
    if (numsSize == 0)
    {
        return 0;
    }

    int i = 0;

    for (int j = 1; j < numsSize; j++)
    {
        if (nums[i] != nums[j])
        {

            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

int main(int argc, char const *argv[])
{
    int num[] = {0, 0, 2, 2, 4, 6, 6};
    int size = sizeof(num) / sizeof(num[0]);
    int result = removeDuplicates(num, size);
    printf("the result is %d", result);
    return 0;
}

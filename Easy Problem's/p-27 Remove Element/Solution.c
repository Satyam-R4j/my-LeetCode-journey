#include <stdio.h>

int removeElement(int *nums, int numsSize, int val)
{
    int k = 0;
    for (int i = 0; i < numsSize; i++)
    {
        if (nums[i] != val)
        {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

int main(int argc, char const *argv[])
{
    int nums[] = {3, 2, 2, 3};
    int size = sizeof(nums) / sizeof(nums[0]);
    int val = 3;
    int result = removeElement(nums, size, val);
    printf("the result is %d", result);

    printf("Modified nums: ");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", nums[i]);
    }
    size = sizeof(nums) / sizeof(nums[0]);
    printf("\nNew Length: %d\n", size);

    return 0;
}

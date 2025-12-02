#include <stdbool.h>

#include <stdio.h>
#include <stdlib.h>

void swap(int *p1, int *p2)
{
    int temp;
    temp = *p1;
    *p1 = *p2;
    *p2 = temp;
}

int partition(int nums[], int low, int high)
{
    int pivot = nums[high];
    int i = (low - 1);
    for (int j = low; j <= high; j++)
    {
        if (nums[j] < pivot)
        {
            i++;
            swap(&nums[i], &nums[j]);
        }
    }
    swap(&nums[i + 1], &nums[high]);
    return (i + 1);
}

void quickSort(int nums[], int low, int high)
{
    if (low < high)
    {
        int pi = partition(nums, low, high);
        quickSort(nums, low, pi - 1);
        quickSort(nums, pi + 1, high);
    }
}
bool containsDuplicate(int *nums, int numsSize)
{

    quickSort(nums, 0, numsSize - 1);
    for (int i = 0; i < numsSize; i++)
    {
        if (nums[i] == nums[i - 1])
        {
            return true;
        }
    }
    return false;
}

int main(int argc, char const *argv[])
{
    // int nums[] = {1, 2, 3, 4};
    int nums[] = {1, 1, 2, 3, 4};
    int numsSize = sizeof(nums) / sizeof(int);

    // quickSort(nums, 0, numsSize - 1);

    bool ch = containsDuplicate(&nums, numsSize);
    printf("\n the value of ch is  %d", ch);

    return 0;
}

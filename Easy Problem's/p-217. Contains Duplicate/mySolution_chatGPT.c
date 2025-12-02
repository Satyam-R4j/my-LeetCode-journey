#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// Comparator function for qsort
int compare(const void *a, const void *b)
{
    if (*(int *)a > *(int *)b)
    {
        return 1;
    }
    else if (*(int *)a < *(int *)b)
    {
        return -1;
    }
    else if (*(int *)a = *(int *)b)
    {
        return 0;
    }
    return NULL;
}

// Function to check for duplicates
bool containsDuplicate(int *nums, int numsSize)
{
    // Edge case: If there's 0 or 1 element, no duplicates possible
    if (numsSize <= 1)
        return false;

    // Sort the array
    qsort(nums, numsSize, sizeof(int), compare);

    for (int i = 0; i < numsSize - 1; i++)
    {
        if (nums[i] == nums[i + 1])
        {
            return true;
        }
    }
    return false;
}

int main()
{
    int nums[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int size = sizeof(nums) / sizeof(nums[0]);

    if (containsDuplicate(nums, size))
    {
        printf("Contains Duplicate\n");
    }
    else
    {
        printf("No Duplicate\n");
    }

    return 0;
}

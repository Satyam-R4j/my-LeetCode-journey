#include <stdio.h>

int binarySearch(int arr[], int left, int right, int target)
{
    if (left > right)
    {
        printf("the item is't found\n");
        return -1;
    }
    int mid = left + (right - left) / 2;
    if (arr[mid] == target)
    {
        printf("the item is found at %d\n", mid);
        return mid;
    }
    else if (arr[mid] < target)
    {
        return binarySearch(arr, mid + 1, right, target);
    }
    else if (arr[mid] > target)
    {
        return binarySearch(arr, left, mid - 1, target);
    }
}

// LeetCode formate solution through -> recursive
int recursiveSearch(int *nums, int numsSize, int target)
{
    static int left = 0;
    static int right = -1;
    if (right == -1)
    {
        right = numsSize - 1;
    }

    if (left > right)
    {
        printf("the item is't found\n");
        return -1;
    }
    int mid = left + (right - left) / 2;
    if (nums[mid] == target)
    {
        printf("the item is found at %d\n", mid);
        return mid;
    }
    else if (nums[mid] < target)
    {
        left = mid + 1;
        return recursiveSearch(nums, numsSize, target);
    }
    else
    {
        left = mid - 1;
        return recursiveSearch(nums, numsSize, target);
    }
}

// LeetCode formate solution through iterative
int search(int *nums, int numsSize, int target)
{

    int left = 0;
    int right = numsSize - 1;

    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target)
        {
            printf("the item is found at index %d\n", mid);
            return mid;
        }
        else if (nums[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }
    return 0;
}

int main(int argc, char const *argv[])
{
    // int arr[] = {1, 3, 4, 5, 7, 8, 9};
    int arr[] = {-1, 0, 3, 5, 9, 12};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target = 2;

    printf("the size is %d\n", size);

    search(arr, size, target);
    return 0;
}

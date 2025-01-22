#include <stdio.h>

// First brute force approach with time complexity = O(n)
//  int searchInsert(int *nums, int numsSize, int target)
//  {

//     for (int i = 0; i < numsSize; i++)
//     {
//         if (nums[i] >= target)
//         {
//             return i ;
//         }
//     }

//     return numsSize;
// }


// Optimal solution  with time complexity => O(log n)
int searchInsert(int *nums, int numsSize, int target)
{

    int left = 0, right = numsSize - 1, mid;
    while (left <= right)
    {

        mid = left + (right - left) / 2;
        if (nums[mid] == target)
        {

            return mid;
        }
        else if (nums[mid] < target)
        {
            left = mid + 1;
        }
        else if (nums[mid] > target)

        {
            right = mid - 1;
        }
    }
    return left;
}

int main(int argc, char const *argv[])
{
    int nums[] = {1, 3, 5, 6};
    int size = sizeof(nums) / sizeof(nums[0]);
    int target = 1;

    int re = searchInsert(nums, size, target);
    printf("\nthe result is %d", re);
    return 0;
}

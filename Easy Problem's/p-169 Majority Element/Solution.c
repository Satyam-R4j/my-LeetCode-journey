#include <stdio.h>
#include <stdlib.h>

// My Solution approach by brute-force  time-complexity -> O(n^2)
// int majorityElement(int *nums, int numsSize)
// {
//     for (int i = 0; i < numsSize; i++)
//     {
//         int majority = 0;
//         for (int j = 0; j < numsSize; j++)
//         {
//             if (nums[i] == nums[j])
//             {
//                 majority++;
//             }
//         }
//         if (majority > numsSize / 2)
//         {
//             return nums[i];
//         }
//     }
//     return -1;
// }

// My Solution approach by sortin  time-complexity -> O(n.log(n))
// int compare(const void *a, const void *b)
// {
//     return (*(int *)a - *(int *)b);
// }
// int majorityElement(int *nums, int numsSize)
// {
//     int count = 1;
//     qsort(nums, numsSize, sizeof(int), compare);
//     for (int i = 1; i < numsSize; i++)
//     {
//         if (nums[i] == nums[i - 1])
//         {
//             count++;
//         }
//         else
//         {
//             count = 1;
//         }

//         if (count > numsSize / 2)
//         {
//             return nums[i];
//         }
//     }
//     return -1;
// }

// Solution with middle index approach   time complexity -> O(n.log(n)) but it is slightly faster
//  int majorityElement(int *nums, int numsSize)
//  {
//      qsort(nums, numsSize, sizeof(int), compare);
//      return nums[numsSize / 2];
//  }


// Most optimal solution by moore's voting algorithm  time complexity -> O(n)
int majorityElement(int *nums, int numsSize)
{
    int ans = 0, freq = 0;

    for (int i = 0; i < numsSize; i++)
    {
        if (freq == 0)
        {
            ans = nums[i];
        }

        if (nums[i] == ans)
        {
            freq++;
        }
        else
        {
            freq--;
        }
    }
    return ans;
}

int main(int argc, char const *argv[])
{
    int nums[] = {1, 2, 3, 3, 2, 2, 2, 2, 1};

    int size = sizeof(nums) / sizeof(nums[0]);

    int re = majorityElement(nums, size);
    printf("the result is %d", re);
    return 0;
}

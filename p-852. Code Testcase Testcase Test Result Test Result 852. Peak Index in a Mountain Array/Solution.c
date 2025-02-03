#include <stdio.h>

int peakIndexInMountainArray(int *arr, int arrSize)
{
    int start = 1, end = arrSize - 2;

    while (start <= end)
    {
        int mid = start + (end - start) / 2;
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1])
        {
            return mid;
        }
        else if (arr[mid - 1] < arr[mid])
        {
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
    }
    return -1;
}

int main(int argc, char const *argv[])
{
    int arr[] = {0, 10, 5, 2};
    int arrSize = sizeof(arr) / sizeof(arr[0]);

    int re = peakIndexInMountainArray(arr, arrSize);
    printf("the result is %d", re);

    return 0;
}

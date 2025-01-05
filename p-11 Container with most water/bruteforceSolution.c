#include <stdio.h>
#include <conio.h>
#include <limits.h>
#include <stdlib.h>
#include <string.h>

#define min(a, b) ((a) < (b) ? (a) : (b))

int maxArea(int *height, int heightSize)
{
    int area = 0;
    int maxArea = 0;

    for (int i = 0; i < heightSize - 1; i++)
    {
        for (int j = 1; j < heightSize; j++)
        {
            int currentArea = min(height[i], height[j]) * (j - i);
            if (currentArea > maxArea)
            {
                maxArea = currentArea;
            }
        }
    }
    return maxArea;
    printf("the main are is %d", maxArea);
}


int compare_desc(const void *a, const void *b)
{
    return (*(int *)b - *(int *)a);
}

int *bruteForce(int arr[], int size)
{
    int area = 0;
    int maxArea = 0;

    for (int i = 0; i < size - 1; i++)
    {
        for (int j = 1; j < size; j++)
        {
            int currentArea = min(arr[i], arr[j]) * (j - i);
            if (currentArea > maxArea)
            {
                maxArea = currentArea;
            }
        }
    }
    printf("the main are is %d", maxArea);
}

int main()
{
    int arr[] = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    size_t arr_size = sizeof(arr) / sizeof(arr[0]);
    bruteForce(arr, arr_size);
    return 0;
}

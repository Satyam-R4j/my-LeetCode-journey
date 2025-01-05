#include <stdio.h>

#include <stdlib.h>

#define min(a, b) ((a) < (b) ? (a) : (b))

int maxArea(int *height, int heightSize)
{
    int area = 0;
    int maxArea = 0;
    int left = 0;
    int right = heightSize - 1;
     while (left < right)
    {
        printf("i am in while loop\n");
        area = min(height[left], height[right]) * (right - left);
        if (area > maxArea)
        {
            maxArea = area;

        }
        if (height[right] > height[left])
        {
            left++;
        }
        else 
        {
            right--;
        }
    }
        
    return maxArea;
}


int main()
{
    int arr[] = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    size_t arr_size = sizeof(arr) / sizeof(arr[0]);
    optimalSolution(arr, arr_size);
    return 0;
}

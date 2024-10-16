#include <conio.h>
#include <stdio.h>

int main(int argc, char const *argv[])
{
    /* code */
    int arr[] = {4, 3, 2, 1};
    int len = sizeof(arr) / sizeof(arr[0]);
    int target = 6;

    for (int i = 0; i < len; i++)
    {
        for (int j = 1; j < len; j++)
        {
            if (arr[i] == arr[j])
            {
                continue;
            }
            else
            {
                if ((arr[i] + arr[j] == target))
                {
                    printf("the element is found\n the i is %d and the j is %d", i, j);
                    break;
                }
            }
        }
    }

    return 0;
}

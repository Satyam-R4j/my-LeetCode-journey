#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *addBinary(char *a, char *b)
{

    int lenA = strlen(a);
    int lenB = strlen(b);

    int maxSize = (lenA > lenB ? lenA : lenB) + 1;

    char *ans = (char *)malloc(maxSize + 1);
    ans[maxSize] = '\0';

    int i = lenA - 1, j = lenB - 1, k = maxSize - 1, carry = 0;

    while (i >= 0 || j >= 0 || carry)
    {
        int bitA = (i >= 0) ? a[i--] - '0' : 0;
        int bitB = (j >= 0) ? b[j--] - '0' : 0;
        int sum = bitA + bitB + carry;
        ans[k--] = (sum % 2) + '0';
        carry = sum / 2;
    }
    if (carry)
    {
        ans[k] = '1';
        return ans + k;
    }
    else
    {
        return ans + k + 1;
    }
    return ans;
}

int main(int argc, char const *argv[])
{

    char a[] = "0";
    char b[] = "0";

    char *ans = addBinary(a, b);
    printf("the Answer is %s", ans);

    return 0;
}

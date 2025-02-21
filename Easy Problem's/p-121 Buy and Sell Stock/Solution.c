#include <stdio.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define MIN(a, b) ((a) < (b) ? (a) : (b))


//LeetCode formate solution with T-C of => O(n)
int maxProfit(int *prices, int pricesSize)
{
    int maxProfit = 0;
    int bestBuy = prices[0];
    for (int i = 0; i < pricesSize; i++)
    {
        if (prices[i] > bestBuy)
        {
            maxProfit = MAX(maxProfit, prices[i] - bestBuy);
        }
        bestBuy = MIN(bestBuy, prices[i]);
    }
    return maxProfit;
}

int main(int argc, char const *argv[])
{
    int prices[] = {7, 1, 5, 3, 6, 4};
    int pricesSize = sizeof(prices) / sizeof(prices[0]);
    int re = maxProfit(prices, pricesSize);
    printf("the result is %d", re);
    return 0;
}

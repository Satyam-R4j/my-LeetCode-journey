//Satyam-R4j-LeetCode Problem-121 (easy)
//Solution in JavaScript
function maxProfit(prices) {
    let maxProfit = 0;
    let bestBuy = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > bestBuy) {
            maxProfit = Math.max(maxProfit, prices[i] - bestBuy);
        }
        bestBuy = Math.min(bestBuy, prices[i]);
    }

    return maxProfit;
}

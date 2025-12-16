/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-322 (Medium)
//Solution in JavaScript
var coinChange = function (coins, amount) {
    if (amount < 1) return 0;
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

let coins = [1, 3, 4],
    amount = 6;

let res = coinChange(coins, amount);
console.log(res);

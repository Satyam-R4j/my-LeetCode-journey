const { relative } = require("path");

/**
 * @param {number[]} nums
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-213 (medium)
//Solution in JavaScript
var rob = function (nums) {
    if (nums.length < 2) return nums[0];
    let skipFirstHouse = new Array(nums.length - 1);
    let skipLastHouse = new Array(nums.length - 1);

    for (let i = 0; i < nums.length - 1; i++) {
        skipLastHouse[i] = nums[i];
        skipFirstHouse[i] = nums[i + 1];
    }

    function robber(houses) {
        let dp = [];
        dp[0] = houses[0];
        dp[1] = Math.max(dp[0], houses[1]);

        for (let i = 2; i < houses.length; i++) {
            dp[i] = Math.max(houses[i] + dp[i - 2], dp[i - 1]);
        }
        return dp[houses.length - 1];
    }
    let lootA = robber(skipFirstHouse);
    let lootB = robber(skipLastHouse);

    return Math.max(lootA, lootB);
};

let nums = [2, 7, 9, 3, 1];
console.log(rob(nums));

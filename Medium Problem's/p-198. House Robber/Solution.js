/**
 * @param {number[]} nums
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-198 (medium)
//Solution in JavaScript
var rob = function (nums) {
    if (nums.length < 2) return nums[0];

    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[nums.length - 1];
};

// dp = [2,7,9]
let nums = [2, 7, 9, 3, 1];
console.log(rob(nums));

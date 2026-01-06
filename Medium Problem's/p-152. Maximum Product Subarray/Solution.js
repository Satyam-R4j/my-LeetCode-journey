/**
 * @param {number[]} nums
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-152 (medium)
//Solution in JavaScript
var maxProduct = function (nums) {
    let max = nums[0],
        min = nums[0],
        globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let currMax = max;
        max = Math.max(nums[i], currMax * nums[i], min * nums[i]);
        min = Math.min(nums[i], currMax * nums[i], min * nums[i]);
        globalMax = Math.max(globalMax, max);
    }
    return globalMax;
};

let nums = [2, 3, -2, 4];
console.log(maxProduct(nums));

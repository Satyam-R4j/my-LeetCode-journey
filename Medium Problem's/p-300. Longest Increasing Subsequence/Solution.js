/**
 * @param {number[]} nums
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-300 (Medium)
//Solution in JavaScript
var lengthOfLIS = function (nums) {
    let memo = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (memo[j] + 1 > memo[i]) {
                    memo[i] = memo[j] + 1;
                }
            }
        }
    }
    let max = 0;
    for (let i = 0; i < memo.length; i++) {
        max = Math.max(max, memo[i]);
    }
    
    return max;
};

let nums = [0, 1, 0, 3, 2, 3];
console.log(lengthOfLIS(nums));

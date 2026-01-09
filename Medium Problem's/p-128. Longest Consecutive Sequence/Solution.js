/**
 * @param {number[]} nums
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-128 (medium)
//Solution in JavaScript
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let maxLen = 1;
    let currLen = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        } else if (nums[i] === nums[i - 1] + 1) {
            currLen++;
        } else {
            maxLen = Math.max(maxLen, currLen);
            currLen = 1;
        }
    }
    return Math.max(currLen, maxLen);
};

// let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// let nums = [1, 2, 6, 7, 8];
let nums  = [100,4,200,1,3,2]
console.log(longestConsecutive(nums));

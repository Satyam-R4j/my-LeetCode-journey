/**
 * @param {number[]} nums
 * @return {number}
 */

//Satyam-R4j-LeetCode Problem-53 (medium) Solution
//Solution in JavaScript -> Two-Pointer Approach
var maxSubArray = function(nums) {
    let max = -Infinity
    let sum = 0
    for(let i = 0; i < nums.length; i++)
    {
        sum = sum + nums[i]
        max = Math.max(max , sum)
        if(sum < 0)
        {
            sum = 0
        }
    }
    return max
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums));

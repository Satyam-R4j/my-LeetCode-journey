/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-55 (medium)
//Solution in JavaScript
var canJump = function (nums) {
    let finalPosition = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= finalPosition) {
            finalPosition = i;
        }
    }
    return finalPosition === 0;
};

let nums = [2, 3, 1, 1, 4];
// let nums = [3,2,1,0,4]
console.log(canJump(nums));

/**
 * @param {number[]} nums
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-268 (easy)
//Solution in JavaScript
var missingNumber = function (nums) {

    let n = nums.length
    let expectedSum = n * ( n + 1) / 2
    let actualSum  = nums.reduce((sum , num)=> sum + num, 0)
    return expectedSum - actualSum

};

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// let nums = [0, 1]
console.log(missingNumber(nums));

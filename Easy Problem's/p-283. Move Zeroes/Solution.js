/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(nums, i, j)
{
    [nums[i], nums[j]] = [nums[j], nums[i]]
}
//Satyam-R4j-LeetCode Problem-283 (easy)
//Solution in JavaScript
var moveZeroes = function (nums)
{
    let j = 0
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] !== 0)
        {
            swap(nums, i, j)
            j++
        }
    }
};

let nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums);

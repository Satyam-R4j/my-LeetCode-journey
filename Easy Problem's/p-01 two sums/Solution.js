/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-01 (easy)
//Solution in JavaScript
var twoSum = function (nums, target)
{
    let mp = new Map()

    for (let i = 0; i < nums.length; i++)
    {
        let comp = target -  nums[i]
        if (mp.has(comp))
        {
            return [mp.get(comp), i]
        }
        mp.set(nums[i], i)
    }
};

let nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums,target));

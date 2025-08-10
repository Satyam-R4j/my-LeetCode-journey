/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-503 (medium)
//Solution in JavaScript
var nextGreaterElements = function (nums)
{
    let n = nums.length
    let stack = []
    let ans = []

    for (let i = 2 * n - 1; i >= 0; i--) 
    {
        while (stack.length > 0 && nums[stack.at(-1)] <= nums[i % n])
        {
            stack.pop()
        }
        ans[i % n] = stack.length === 0 ? -1 : nums[stack.at(-1)]
        stack.push(i % n)
    }
    return ans
};

let nums = [1, 2, 3, 4, 3]
let result = nextGreaterElements(nums)
console.log(nums)
console.log(result)
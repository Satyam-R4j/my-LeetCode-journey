/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-448 (easy)
//Solution in JavaScript 
var findDisappearedNumbers = function (nums)
{
    let map = new Map()
    let ans = []

    for (let i = 1; i <= nums.length; i++)
    {
        map.set(i, 0)
    }
    for (let i = 0; i < nums.length; i++)
    {
        map.set(nums[i], (map.get(nums[i])) + 1)
    }
    for (const [key, val] of map)
    {
        if (val === 0)
        {
            ans.push(key)
        }
    }
    return ans
}

let nums = [4, 3, 2, 7, 8, 2, 3, 1]
let a = findDisappearedNumbers(nums)
console.log(a);

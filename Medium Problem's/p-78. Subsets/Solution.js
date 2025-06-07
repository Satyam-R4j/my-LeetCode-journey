/**
 * @param {number[]} nums
 * @param {number[]} result
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-78 (Medium) 
//Solution in JavaScript with Recursion
var subsets = function (nums)
{
    let result = []

    function backtrack(ans, i)
    {
        if (i === nums.length)
        {
            result.push([...ans])
            return
        }
        ans.push(nums[i])
        backtrack(ans, i + 1)
        ans.pop()
        backtrack(ans, i + 1)
    }
    backtrack([], 0)
    return result
};

let nums = [1, 2, 3]

console.log(subsets(nums));
// subsets(nums)


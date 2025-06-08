/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-90 (Medium) 
//Solution in JavaScript with Recursion
var subsetsWithDup = function (nums)
{
    nums.sort((a, b) => a - b)
    let allSubSets = []
    let currentSubset = []

    let backtrack = (i) =>
    {
        if (i === nums.length)
        {
            allSubSets.push([...currentSubset])
            return
        }
        currentSubset.push(nums[i])
        backtrack(i + 1)
        currentSubset.pop()

        while (i + 1 < nums.length && nums[i] === nums[i + 1])
        {
            i++
        }
        backtrack(i + 1)
    }
    backtrack(0)
    return allSubSets
};

let nums = [1,2,2]
console.log(subsetsWithDup(nums));

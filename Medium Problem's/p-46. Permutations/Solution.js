/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-46 (Medium) 
//Solution in JavaScript with Recursion
function swap(arr, i, j)
{
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
let getPermute = (nums, idx, ans) =>
{
    if (idx === nums.length)
    {
        ans.push([...nums])
        return
    }
    for (let i = idx; i < nums.length; i++)
    {
        swap(nums,idx, i)
        getPermute(nums, idx + 1, ans)
        swap(nums,idx, i)
    }
}
var permute = function (nums)
{
    let ans = []
    getPermute(nums, 0, ans)
    return ans
};

let nums = [1, 2, 3]
console.log(permute(nums));

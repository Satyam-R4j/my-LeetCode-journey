/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-46 (Medium)
//Solution in JavaScript with Recursion
var permute = function (nums) {
    function swap(arr, i, j)
    {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    function helper(nums, i, result) {
        if (i === nums.length) {
            result.push([...nums])
            return
        }
        for (let j = i; j < nums.length; j++) {
            swap(nums, i, j)
            helper(nums, i + 1,result)
            swap(nums, i, j)
        }
    }

    let result = []
    helper(nums, 0, result)
    return result
};

let nums = [1, 2, 3];
console.log(permute(nums));

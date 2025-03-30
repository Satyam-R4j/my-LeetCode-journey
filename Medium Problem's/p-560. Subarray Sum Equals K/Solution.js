/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Brute-force Approach
// var subarraySum = function (nums, k)
// {
//     let count = null

//     for (let i = 0; i < nums.length; i++)
//     {
//         let sum = 0
//         for (let j = i; j < nums.length; j++)
//         {
//             sum += nums[j]
//             if (sum === k) count++
//         }
//     }
//     return count
// };

//Satyam-R4j-LeetCode Problem-560 (medium)
//Solution in JavaScript -> most-optimal
var subarraySum = function (nums, k)
{
    let n = nums.length
    let count = 0
    let prefixSum = new Array()
    let map = new Map()
    prefixSum[0] = nums[0]

    for (let i = 1; i < n; i++)
    {
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }
    for (let j = 0; j < n; j++)
    {
        if (prefixSum[j] === k) count++
        let val = prefixSum[j] - k
        if (map.has(val)) count += map.get(val)
        if (!map.has(prefixSum[j])) map.set(prefixSum[j], 0)
        map.set(prefixSum[j], map.get(prefixSum[j]) + 1)
    }
    return count
}

let nums = [3, 2, 1], k = 3
console.log(subarraySum(nums, k));

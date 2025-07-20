/**
 * @param {number[]} nums
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-268 (easy)
//Solution in JavaScript
var missingNumber = function (nums)
{
    let n = nums.length
    let i = 0
    nums.sort((a, b) => a - b)
    while(i < n)
    {
        if(nums[i] === i)
        {
            i++
            continue
        }
        else{
            return i
        }
    }
    return n
};

// function swap(nums, i, j)
// {
//     [nums[i], nums[j]] = [nums[j], nums[i]]
// }
// //Solution with cyclic sort
// var missingNumber = function (nums)
// {
//     let i = 0
//     while (i < nums.length)
//     {
//         let correctIdx = nums[i]
//         if (nums[i] !== nums[correctIdx] && nums[i] < nums.length)
//         {
//             swap(nums, i, correctIdx)
//         }
//         else
//         {
//             i++
//         }
//     }
    
//     for(let i = 0; i<nums.length;i++)
//     {
//         if(i !== nums[i])
//         {
//             return i
//         }
//     }
//     return nums.length
// }




let nums = [9,6,4,2,3,5,7,0,1]
// let nums = [0, 1]
console.log(missingNumber(nums));

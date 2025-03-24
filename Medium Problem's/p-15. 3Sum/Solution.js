/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Brute-force approach with TC- O(n^3)
// var threeSum = function (nums)
// {
//     let n = nums.length
//     let ans = []
//     let s = new Set()
//     for (let i = 0; i < n; i++)
//     {
//         for (let j = i + 1; j < n; j++)
//         {
//             for (let k = j + 1; k < n; k++)
//             {
//                 if (nums[i] + nums[j] + nums[k] === 0)
//                 {
//                     let trip = [nums[i], nums[j], nums[k]]
//                     trip.sort((a, b) => a - b)
//                     let tripStr = trip.join(',')

//                     if (!s.has(tripStr))
//                     {
//                         s.add(tripStr)
//                         ans.push((trip))
//                     }
//                 }
//             }
//         }
//     }
//     return ans
// };


//Hashing approach TC=> O(n^2 * log(n)) SC=> O(n^2)
// var threeSum = function (nums)
// {
//     let n = nums.length
//     let ans = []

//     let unique = new Set()

//     for (let i = 0; i < n; i++)
//     {
//         let tar = -nums[i]
//         let s = new Set()

//         for (let j = i + 1; j < n; j++)
//         {
//             let third = tar - nums[j]
//             if (s.has(third))
//             {
//                 let trip = [nums[i], nums[j], third]
//                 trip.sort((a, b) => a - b)
//                 unique.add(JSON.stringify(trip))
//             }
//             s.add(nums[j])
//         }
//     }
//     ans = Array.from(unique).map(JSON.parse)
//     return ans
// }


//Two-pointer approach
//Satyam-R4j-LeetCode Problem-15 (medium) 
//Solution in JavaScript most optimal
var threeSum = function (nums)
{
    let n = nums.length
    let ans = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < n - 2; i++)
    {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1, k = n - 1
        while (j < k)
        {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum < 0) j++
            else if (sum > 0) k--
            else
            {
                ans.push([nums[i], nums[j], nums[k]])
                j++, k--
                while (j < k && nums[j] === nums[j - 1]) j++
                while (j < k && nums[k] === nums[k + 1]) k--
            }
        }
    }
    return ans;
}

let nums = [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10]
console.log(threeSum(nums));

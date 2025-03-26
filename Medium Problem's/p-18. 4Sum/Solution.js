/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

//Satyam-R4j-LeetCode Problem-18 (Medium)
//Solution in JavaScript 
var fourSum = function (nums, target)
{
    let ans = []
    let n = nums.length
    nums.sort()
    for (let i = 0; i < n; i++)
    {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < n;)
        {
            let p = j + 1, q = n - 1
            while (p < q)
            {
                let sum = nums[i] + nums[j] + nums[p] + nums[q]
                if (sum < target)
                {
                    p++
                }
                else if (sum > target)
                {
                    q--
                }
                else
                {
                    ans.push([nums[i], nums[j], nums[p], nums[q]])
                    p++, q--

                    while (p < q && nums[p] === nums[p - 1]) p++
                }
            }
            j++
            while (j < n && nums[j] === nums[j - 1]) j++
        }
    }
    return ans
};

let nums = [-1, 0, -5, -2, -2, -4, 0, 1, -2], target = -9
console.log(fourSum(nums, target));

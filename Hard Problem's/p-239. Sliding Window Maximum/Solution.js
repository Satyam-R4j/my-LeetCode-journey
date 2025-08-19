/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-239 (Hard) 
//Solution in JavaScript
var maxSlidingWindow = function (nums, k)
{
    let deque = []
    let res = []

    for (i = 0; i < k; i++)
    {
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i])
        {
            deque.pop()
        }
        deque.push(i)
    }

    for (let i = k; i < nums.length; i++)
    {
        res.push(nums[deque[0]])

        while (deque.length > 0 && deque[0] <= i - k)
        {
            deque.shift()
        }
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i])
        {
            deque.pop()
        }
        deque.push(i)
    }

    res.push(nums[deque[0]])
    return res
};



let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
let ans = maxSlidingWindow(nums, k)
console.log("Answer: ", ans)
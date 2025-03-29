/**
 * @param {number[]} height
 * @return {number}
 */

//Satyam-R4j-LeetCode Problem-42 (Hard)
//Solution in JavaScript
var trap = function (height)
{
    let left = new Array(height.length)
    let right = new Array(height.length)
    let ans = null
    let maxLeft = height[0], maxRight = height[height.length - 1]
    left[0] = maxLeft, right[right.length - 1] = maxRight

    for (let i = 1; i < height.length; i++)
    {
        maxLeft = Math.max(maxLeft, height[i])
        left[i] = maxLeft
    }
    for (let i = height.length - 2; i >= 0; i--)
    {
        maxRight = Math.max(maxRight, height[i])
        right[i] = maxRight
    }
    for (let i = 0; i < height.length; i++)
    {
        ans += Math.min(left[i], right[i]) - height[i]
    }
    return ans
};

let height = [4, 2, 0, 3, 2, 5]
console.log(trap(height));

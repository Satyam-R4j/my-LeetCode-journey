/**
 * @param {number[]} nums
 * @return {number}
 */

// //Satyam-R4j-LeetCode Problem-287 (medium)
// //Solution in JavaScript with T-C= O(n) & S-C= O(n)
// var findDuplicate = function (nums)
// {
//     let st = new Set()

//     for (let i = 0; i < nums.length; i++)
//     {
//         if (st.has(nums[i]))
//             return nums[i]
//         st.add(nums[i])
//     }
// };

//Satyam-R4j-LeetCode Problem-287 (medium)
//Solution in JavaScript with T-C= O(n) & S-C= O(1) => Optimal
var findDuplicate = function (nums)
{
    let slow = nums[0], fast = nums[nums[0]]

    do
    {
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while (slow !== fast)

    slow = 0
    while (slow !== fast)
    {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
}

let nums = [1, 3, 4, 2, 2]
console.log(findDuplicate(nums));

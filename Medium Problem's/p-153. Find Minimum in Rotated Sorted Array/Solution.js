/**
 * @param {number[]} nums
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-153 (medium)
//Solution in JavaScript
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if(nums[mid] > nums[right]) left = mid + 1
        else right = mid
    }

    return nums[left];
};

let nums = [3, 4, 5, 1, 2];
console.log(findMin(nums));

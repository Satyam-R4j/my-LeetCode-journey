/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-33 (medium)
//Solution in JavaScript
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        
        if (nums[mid] === target) return mid;

        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target <= nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};

let nums = [1, 2],
    target = 0;
console.log(search(nums, target));

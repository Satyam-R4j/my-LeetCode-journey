/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-34 (Medium) 
//Solution in JavaScript
var searchRange = function (nums, target) {
    function findBound(isLeft) {
        let left = 0;
        right = nums.length - 1;
        let index = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                index = mid;
                if (isLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }

    let first = findBound(true); 
    let second = findBound(false);
    return [first, second];
};

let nums = [5, 7, 7, 8, 8, 10],
    target = 8;

let result = searchRange(nums, target);
console.log(result);

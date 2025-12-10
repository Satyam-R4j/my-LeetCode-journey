/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-496 (easy)
//Solution in JavaScript
var nextGreaterElement = function (nums1, nums2) {
    let map = new Map();
    let stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }

        map.set(nums2[i], stack.length === 0 ? -1 : stack[stack.length - 1]);

        stack.push(nums2[i]);
    }

    return nums1.map((n) => map.get(n));
};

let nums1 = [4, 1, 2],
    nums2 = [1, 3, 4, 2];
let result = console.log(nextGreaterElement(nums1, nums2));
console.log(result);

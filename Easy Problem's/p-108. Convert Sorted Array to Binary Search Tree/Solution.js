/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//Satyam-R4j-LeetCode Problem-108 (easy)
//Solution in JavaScript
var sortedArrayToBST = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    function helper(nums, start, end) {
        if (start > end) return null;

        let mid = Math.floor(start + (end - start) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = helper(nums, start, mid - 1);
        root.right = helper(nums, mid + 1, end);
        return root;
    }
    return helper(nums, start, end);
};

let nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));

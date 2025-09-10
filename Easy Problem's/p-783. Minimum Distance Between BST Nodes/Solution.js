/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-783 (easy) 
//Solution in JavaScript
var minDiffInBST = function (root) {
    prev = null;
    function helper(root) {
        if (root === null) return Number.MAX_SAFE_INTEGER;
        let ans = Number.MAX_SAFE_INTEGER;
        if (root.left !== null) {
            let leftMin = helper(root.left);
            ans = Math.min(ans, leftMin);
        }
        if (prev !== null) {
            ans = Math.min(ans, root.val - prev.val);
        }
        prev = root;
        if (root.right !== null) {
            let rightMin = helper(root.right);
            ans = Math.min(ans, rightMin);
        }
        return ans;
    }
    return helper(root);
};
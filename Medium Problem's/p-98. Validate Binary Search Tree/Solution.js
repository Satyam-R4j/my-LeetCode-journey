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
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-98 (medium)
//Solution in JavaScript
var isValidBST = function (root) {
    function isBST(root, min, max) {
        if (root === null) return true;
        if (min !== null && root.val <= min.val) return false;
        if (max !== null && root.val >= max.val) return false;

        return isBST(root.left, min, root) && isBST(root.right, root, max);
    }
    return isBST(root, null, null);
};

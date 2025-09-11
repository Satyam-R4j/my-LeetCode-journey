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
 * @param {number} k
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-230 (medium)
//Solution in JavaScript
var kthSmallest = function (root, k) {
    preOrder = 0;
    function helper(root, k) {
        if (root === null) return -1;
        if (root.left !== null) {
            let leftAns = helper(root.left, k);
            if (leftAns !== -1) return leftAns;
        }
        if (preOrder + 1 === k) return root.val;
        preOrder = preOrder + 1;
        if (root.right !== null) {
            let rightAns = helper(root.right, k);
            if (rightAns !== -1) return rightAns;
        }
        return -1;
    }
    return helper(root, k);
};

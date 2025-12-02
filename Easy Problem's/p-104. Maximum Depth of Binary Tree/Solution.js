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
//Satyam-R4j-LeetCode Problem-104 (easy)
//Solution in JavaScript
var maxDepth = function (root) {
    if (root === null) return 0;
    let lh = maxDepth(root.left);
    let rh = maxDepth(root.right);

    return 1 + Math.max(lh, rh);
};

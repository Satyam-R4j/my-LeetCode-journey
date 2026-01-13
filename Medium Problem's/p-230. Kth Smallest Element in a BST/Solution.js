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
    let count = 0;
    function helper(root) {
        if (root === null) return -1;
        if (root.left !== null) {
            let leftAns = helper(root.left);
            if (leftAns !== -1) return leftAns;
        }
        count++
        if (count === k) return root.val

        return helper(root.right)
    }
    return helper(root, k);
};

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
//Satyam-R4j-LeetCode Problem-114 (medium)
//Solution in JavaScript
var flatten = function (root) {
    let nextRight = null;

    const helper = (node) => {
        if (!node) return;

        helper(node.right);
        helper(node.left);

        node.left = null;
        node.right = nextRight;
        nextRight = node;
    };
    helper(root);
};

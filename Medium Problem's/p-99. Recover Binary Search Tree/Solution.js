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
//Satyam-R4j-LeetCode Problem-99 (medium)
//Solution in JavaScript
var recoverTree = function (root) {
    let prev = null,
        first = null,
        sec = null;
    function inOrder(root) {
        if (root === null) return null;
        inOrder(root.left);
        if (prev !== null && prev.val > root.val) {
            if (first === null) first = prev;
            sec = root;
        }
        prev = root;
        inOrder(root.right);
    }
    inOrder(root);
    let temp = first.val;
    first.val = sec.val;
    sec.val = temp;
};

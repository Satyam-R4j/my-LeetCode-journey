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
//Satyam-R4j-LeetCode Problem-543 (easy)
//Solution in JavaScript
function height(node) {
    if (root === null) return 0;

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
}
var diameterOfBinaryTree = function (root) {
    if (root === null) return 0;

    let leftDiameter = diameterOfBinaryTree(root.left);
    let rightDiameter = diameterOfBinaryTree(root.right);
    let currentDiameter = height(root.left) + height(root.right);

    return Math.max(currentDiameter, rightDiameter, leftDiameter);
};

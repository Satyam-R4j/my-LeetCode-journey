/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-100 (easy)
//Solution in JavaScript
var isSameTree = function (p, q) {
    if (p === null || q === null) return p === q;

    let isLeftSame = isSameTree(p.left, q.left);
    let isRightSame = isSameTree(p.right, q.right);

    return isLeftSame && isRightSame && p.val === q.val;
};

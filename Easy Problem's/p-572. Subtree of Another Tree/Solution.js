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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-572 (easy)
//Solution in JavaScript
function isSameTree(p, q) {
    if (p === null || q === null) return p === q;
    let isLeftSame = isSameTree(p.left, q.left);
    let isRightSame = isSameTree(p.right, q.right);
    return isLeftSame && isRightSame && p.val === q.val;
}
var isSubtree = function (root, subRoot) {
    if (root === null || subRoot === null) return root === subRoot;
    if (root.val === subRoot.val && isSameTree(root, subRoot)) {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

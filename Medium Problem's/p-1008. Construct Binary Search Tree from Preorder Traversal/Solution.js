/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
//Satyam-R4j-LeetCode Problem-1008 (medium)
//Solution in JavaScript
var bstFromPreorder = function (preorder) {
    function helper(bound) {
        if (i >= preorder.length || preorder[i] > bound) return null;

        let root = new TreeNode(preorder[i++]);
        root.left = helper(root.val);
        root.right = helper(bound);
        return root;
    }
    let i = 0
    return helper( Number.MAX_SAFE_INTEGER);
};

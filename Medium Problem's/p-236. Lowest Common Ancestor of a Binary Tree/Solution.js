/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//Satyam-R4j-LeetCode Problem-236 (medium)
//Solution in JavaScript
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;
    if (root.val === q.val || root.val === p.val) return root;

    let leftLCA = lowestCommonAncestor(root.left, p, q);
    let rightLCA = lowestCommonAncestor(root.right, p, q);

    if (leftLCA && rightLCA) return root;
    else if (leftLCA !== null) return leftLCA;
    else return rightLCA;
};

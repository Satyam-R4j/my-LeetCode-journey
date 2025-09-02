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
 * @return {string[]}
 */
//Satyam-R4j-LeetCode Problem-257 (easy)
//Solution in JavaScript
var binaryTreePaths = function (root) {
    let path = root.val.toString();
    let ans = new Array();

    function allPaths(root, path, ans) {
        if (root.left === null && root.right === null) {
            ans.push(path);
            return;
        }
        if (root.left) allPaths(root.left, path + "->" + root.left.val, ans);
        if (root.right) allPaths(root.right, path + "->" + root.right.val, ans);
    }
    allPaths(root, path, ans);
    return ans;
};

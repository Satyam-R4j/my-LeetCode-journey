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
//Satyam-R4j-LeetCode Problem-124 (Hard) 
//Solution in JavaScript
var maxPathSum = function (root) {

    let result = [-Infinity]
    function dfs(root) {
        if (!root) return 0

        let leftMax = dfs(root.left)
        let rightMax = dfs(root.right)

        leftMax = Math.max(leftMax, 0)
        rightMax = Math.max(rightMax, 0)

        result[0] = Math.max(result[0], root.val + leftMax + rightMax)

        return root.val + Math.max(leftMax, rightMax)
    }

    dfs(root)
    return result[0]
};
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
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-102 (Medium) 
//Solution in JavaScript
var levelOrder = function (root) {
    if (root === null) return [];
    let qu = [];
    let ans = [];
    qu.push(root);
    while (qu.length > 0) {
        let quSize = qu.length;
        let currLevelNodes = [];
        for (let i = 0; i < quSize; i++) {
            let currentNode = qu.shift();
            currLevelNodes.push(currentNode.val);

            if (currentNode.left) {
                qu.push(currentNode.left);
            }
            if (currentNode.right) {
                qu.push(currentNode.right);
            }
        }
        ans.push(currLevelNodes);
    }
    return ans;
};

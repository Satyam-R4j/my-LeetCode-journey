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
//Satyam-R4j-LeetCode Problem-662 (medium)
//Solution in JavaScript
var widthOfBinaryTree = function (root) {
    let qu = [[root, 0]];
    let maxWidth = 0;
    while (qu.length > 0) {
        let currLevelSize = qu.length;
        let stIdx = qu[0][1];
        let endIdx = qu[qu.length - 1][1];
        maxWidth = Math.max(maxWidth, endIdx - stIdx + 1);
        for (let i = 0; i < currLevelSize; i++) {
            let [node, idx] = qu.shift();
            let normIdx = idx - stIdx;

            if (node.left) {
                qu.push([node.left, normIdx * 2 + 1]);
            }
            if (node.right) {
                qu.push([node.right, normIdx * 2 + 2]);
            }
        }
    }
    return maxWidth;
};

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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//Satyam-R4j-LeetCode Problem-105 (medium)
//Solution in JavaScript
var buildTree = function (preorder, inorder) {
    function search(inorder, left, right, target) {
        for (let i = left; i <= right; i++) {
            if (inorder[i] === target) return i;
        }
    }
    let preIndxObj = { value: 0 };
    function helper(left, right) {
        if (left > right) return null;
        let root = new TreeNode(preorder[preIndxObj.value]);
        preIndxObj.value++;
        let inIndx = search(inorder, left, right, root.val);
        root.left = helper(left, inIndx - 1);
        root.right = helper(inIndx + 1, right);
        return root;
    }
    return helper(0, inorder.length - 1);
};

let preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7],
    indx = 0;

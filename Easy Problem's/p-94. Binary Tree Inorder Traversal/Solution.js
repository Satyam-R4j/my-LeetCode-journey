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
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
//Satyam-R4j-LeetCode Problem-94 (easy)
//Solution in JavaScript
var inorderTraversal = function (root) {
    let result = new Array();
    function helper(node, result) {
        if (!node) return;
        helper(node.left, result);
        result.push(node.val);
        helper(node.right, result);
    }
    helper(root, result);
    return result;
};

//Satyam-R4j-LeetCode Problem-94 (easy)
//Solution in JavaScript
var inorderTraversal = function (root) {
    let ans = [];
    let curr = root;

    while (curr !== null) {
        if (curr.left === null) {
            ans.push(curr.val);
            curr = curr.right;
        } else {
            let IP = curr.left;
            while (IP.right !== null && IP.right !== curr) {
                IP = IP.right;
            }
            if (IP.right === null) {
                IP.right = curr;
                curr = curr.left;
            } else {
                IP.right = null;
                ans.push(curr.val);
                curr = curr.right;
            }
        }
    }
    return ans;
};

let root = TreeNode([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log(inorderTraversal(root));

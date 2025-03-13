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

function TreeNode(val, left, right)
{
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}





var inorderTraversal = function (root)
{
    let n = root.length
    console.log(n);
    
    let number = new Array(n)
    inorderTraversal(root.left)
    number.fill(inorderTraversal(root.val))
    inorderTraversal(root.right)
    return number
};

let root = TreeNode([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(inorderTraversal(root));

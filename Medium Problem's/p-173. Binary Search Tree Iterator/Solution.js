/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//Satyam-R4j-LeetCode Problem-173 (medium)
//Solution in JavaScript
function storeLeftNodes(root, stack) {
    while (root !== null) {
        stack.push(root);
        root = root.left;
    }
}

var BSTIterator = function (root) {
    this.stack = [];
    storeLeftNodes(root, this.stack);
};

BSTIterator.prototype.next = function () {
    let node = this.stack.pop();
    if (node.right !== null) {
        storeLeftNodes(node.right, this.stack);
    }
    return node.val;
};

BSTIterator.prototype.hasNext = function () {
    return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

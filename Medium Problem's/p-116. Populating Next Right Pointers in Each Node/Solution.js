/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
//Satyam-R4j-LeetCode Problem-116 (medium)
//Solution in JavaScript
var connect = function (root) {
    if (root === null) return;
    let qu = new Array();
    let prev = 0;
    qu.push(root);
    qu.push(null);

    while (qu.length > 0) {
        let curr = qu.shift();
        if (curr === null) {
            if (qu.length === 0) {
                break;
            }
            qu.push(null);
        } else {
            if (curr.left !== null) {
                qu.push(curr.left);
            }
            if (curr.right !== null) {
                qu.push(curr.right);
            }
            if (prev !== null) {
                prev.next = curr;
            }
        }
    }
    return root;
};

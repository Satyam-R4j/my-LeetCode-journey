/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
//Satyam-R4j-LeetCode Problem-133 (medium)
//Solution in JavaScript
var cloneGraph = function (node) {
    if (node === null) return null;
    let copyToNew = new Map();

    function clone(current) {
        if (copyToNew.has(current)) return copyToNew.get(current);
        let copy = new _Node(current.val);
        copyToNew.set(current, copy);
        for (let neighbor of current.neighbors) {
            copy.neighbors.push(clone(neighbor));
        }
        return copy;
    }
    return clone(node);
};

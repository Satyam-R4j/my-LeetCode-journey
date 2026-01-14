/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
//Satyam-R4j-LeetCode Problem-297 (Hard) 
//Solution in JavaScript
var serialize = function (root) {
    let res = []
    function dfs(node) {
        if (!node) {
            res.push("N")
            return
        }
        res.push(String(node.val))
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return res.join(",")
};
var deserialize = function (data) {
    let val = data.split(",")
    let i = 0

    function dfs() {
        if (val[i] === "N") {
            i++
            return null
        }
        let node = new  TreeNode(parseInt(val[i]))
        i++
        node.left = dfs()
        node.right = dfs()
        return node
    }
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
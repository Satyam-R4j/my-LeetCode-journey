/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
//Satyam-R4j-LeetCode Problem-212 (Hard) 
//Solution in JavaScript
var findWords = function (board, words) {
    class TrieNode {
        constructor() {
            this.children = {};
            this.word = null;
        }
    }

    let root = new TrieNode();
    for (const word of words) {
        let node = root;
        for (const ch of word) {
            if (!node.children[ch]) node.children[ch] = new TrieNode();
            node = node.children[ch];
        }
        node.word = word;
    }

    let row = board.length;
    let col = board[0].length;
    let res = [];
    function dfs(r, c, node) {
        let ch = board[r][c];
        if (!node.children[ch]) return;
        node = node.children[ch];
        if (node.word !== null) {
            res.push(node.word);
            node.word = null;
        }
        board[r][c] = "#";
        if (r > 0) dfs(r - 1, c, node);
        if (c > 0) dfs(r, c - 1, node);
        if (r < row - 1) dfs(r + 1, c, node);
        if (c < col - 1) dfs(r, c + 1, node);
        board[r][c] = ch;
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) dfs(i, j, root);
    }
    return res;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-79 (medium)
//Solution in JavaScript
var exist = function (board, word) {
    let row = board.length;
    let col = board[0].length;
    let wordLen = word.length;
    let visited = Array(row)
        .fill(0)
        .map(() => Array(col).fill(false));

    function dfs(fst, sec, init) {
        if (fst < 0 || fst >= row || sec < 0 || sec >= col) return false;
        if (board[fst][sec] !== word[init] || visited[fst][sec]) return false;
        if (init === word.length - 1) return true;

        visited[fst][sec] = true;
        let found =
            dfs(fst + 1, sec, init + 1) ||
            dfs(fst, sec + 1, init + 1) ||
            dfs(fst - 1, sec, init + 1) ||
            dfs(fst, sec - 1, init + 1);

        visited[fst][sec] = false;
        return found;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};

let board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
    ],
    word = "ABCCED";
console.log(exist(board, word));

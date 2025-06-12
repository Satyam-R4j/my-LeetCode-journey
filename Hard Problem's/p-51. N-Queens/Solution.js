/**
 * @param {number} n
 * @return {string[][]}
 */

function isSafe(board, row, col, n)
{
    // Horizontal
    for (let j = 0; j < col; j++)
    {
        if (board[row][j] === 'Q')
        {
            return false
        }
    }

    // Vertical
    for (let i = 0; i < row; i++)
    {
        if (board[i][col] === 'Q')
        {
            return false
        }
    }

    // right diagonal
    for (let i = row, j = col; i >= 0 && i >= 0; i--, j--)
    {
        if (board[i][j] === 'Q')
        {
            return false
        }
    }

    // left diagonal
    for (let i = row, j = col; i >= 0 && j < n; i--, j++)
    {
        if (board[i][j] === 'Q')
        {
            return false
        }
    }

    return true
}

function nQueens(board, row, n, ans)
{
    if (row === n)
    {
        ans.push(board.map(r => r.join("")))    
        return
    }

    for (let j = 0; j < n; j++)
    {
        if (isSafe(board, row, j, n))
        {
            board[row][j] = "Q"
            nQueens(board, row + 1, n, ans)
            board[row][j] = "."
        }
    }

}

var solveNQueens = function (n)
{
    let board = new Array(n).fill(0).map(() => new Array(n).fill('.'))
    let ans = []
    nQueens(board, 0, n, ans)
    return ans
};

let n = 4
console.log(solveNQueens(n));

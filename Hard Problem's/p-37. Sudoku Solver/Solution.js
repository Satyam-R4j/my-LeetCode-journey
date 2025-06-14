/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//Satyam-R4j-LeetCode Problem-37 (Hard) 
//Solution in JavaScript with Recursion and Backtracking
function isSafe(board, row, col, dig)
{
    // Horizontal
    for (let j = 0; j < 9; j++)
    {
        if (board[row][j] === dig)
        {
            return false
        }
    }

    // Vertical
    for (let i = 0; i < 9; i++)
    {
        if (board[i][col] === dig)
        {
            return false
        }
    }

    // Grid
    let srow = Math.floor(row/3)*3
    let scol = Math.floor(col/3)*3

    for(let i = srow;i <= srow + 2; i++)
    {
        for(let j = scol ; j <= scol + 2; j++)
        {
            if(board[i][j] === dig)
            {
                return false
            }
        }
    }

    return true
}

function helper(board, row, col)
{
    if (row === 9)
    {
        return true
    }
    let nextRow = row, nextCol = col + 1
    if (nextCol === 9)
    {
        nextRow = row + 1
        nextCol = 0
    }
    if (board[row][col] !== '.')
    {
        return helper(board, nextRow, nextCol)
    }

    for (let k = 1;k <= 9; k++)
    {
        let dig = k.toString()
        if (isSafe(board, row, col, dig))
        {
            board[row][col] = dig
            if (helper(board, nextRow, nextCol))
            {
                return true
            }
            board[row][col] = '.'
        }
    }

    return false
}

var solveSudoku = function (board)
{
    helper(board, 0, 0)
};

let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
solveSudoku(board)
console.log(board);

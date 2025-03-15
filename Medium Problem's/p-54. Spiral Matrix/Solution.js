/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-54 (medium)
//Solution in JavaScript
var spiralOrder = function (matrix)
{
    let m = matrix.length
    let n = matrix[0].length
    let s_row = 0, s_col = 0, e_row = m - 1, e_col = n - 1
    let ans = new Array()
    while (s_row <= e_row && s_col <= e_col)
    {
        //Top
        for (let j = s_col; j <= e_col; j++)
        {
            ans.push(matrix[s_row][j])
        }

        //Right
        for (let i = s_row + 1; i <= e_row; i++)
        {
            ans.push(matrix[i][e_col])
        }

        //Bottom
        for (let j = e_col - 1; j >= s_col; j--)
        {
            if (s_row === e_row)
            {
                break
            }
            ans.push(matrix[e_row][j])
        }

        //Left
        for (let i = e_row - 1; i >= s_row + 1; i--)
        {
            if (s_col === e_col)
            {
                break
            }
            ans.push(matrix[i][s_col])
        }
        s_row++, s_col++, e_col--, e_row--
    }
    return ans
};

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix));

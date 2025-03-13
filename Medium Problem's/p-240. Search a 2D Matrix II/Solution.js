/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-240 (medium)
//Solution in JavaScript
var searchMatrix = function (matrix, target)
{
    let col_size = matrix.length
    let row_size = matrix[0].length
    let r = 0, c = row_size - 1
    while (r < col_size && c >= 0)
    {
        if (target === matrix[r][c])
        {
            return true
        }
        else if (target <= matrix[r][c])
        {
            c--
        }
        else
        {
            r++
        }
    }
    return false
};


let matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5
console.log(searchMatrix(matrix, target));


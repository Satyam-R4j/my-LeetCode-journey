/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchInRow(matrix, target, midRow)
{
    let n = matrix[midRow].length
    let end = n - 1
    let st = 0
    while (st <= end)
    {
        let mid = Math.floor(st + (end - st) / 2)
        if (matrix[midRow][mid] === target)
        {
            return true
        }
        else if (target > matrix[midRow][mid])
        {
            st = mid + 1
        }
        else
        {
            end = mid - 1
        }
    }
    return false
}

//Satyam-R4j-LeetCode Problem-74 (medium)
//Solution in JavaScript
var searchMatrix = function (matrix, target)
{
    let n = matrix[0].length
    let mx_size = matrix.length
    let startRow = 0, endRow = mx_size - 1

    while (startRow <= endRow)
    {
        let midRow = Math.floor(startRow + (endRow - startRow) / 2)

        if (target >= matrix[midRow][0] && target <= matrix[midRow][n - 1])
        {
            return searchInRow(matrix, target, midRow)
        }
        else if (target > matrix[midRow][0])
        {
            startRow = midRow + 1
        }
        else
        {
            endRow = midRow - 1
        }

    }
    return false
};


let matrix =
    [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60]
    ]
let target = 60
console.log(searchMatrix(matrix, target));

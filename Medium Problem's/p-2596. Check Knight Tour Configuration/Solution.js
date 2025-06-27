/**
 * @param {number[][]} grid
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-2596 (medium) 
//Solution in JavaScript with Recursion
function isValid(grid, r, c, n, expValue)
{
    if (r < 0 || c < 0 || r >= n || c >= n || grid[r][c] != expValue)
    {
        return false
    }
    if (expValue === n * n -1)
    {
        return true
    }
    let asn1 = isValid(grid, r - 2, c + 1, n, expValue + 1)
    let ans2 = isValid(grid, r - 1, c + 2, n, expValue + 1)
    let ans3 = isValid(grid, r + 1, c + 2, n, expValue + 1)
    let ans4 = isValid(grid, r + 2, c + 1, n, expValue + 1)
    let ans5 = isValid(grid, r + 2, c - 1, n, expValue + 1)
    let ans6 = isValid(grid, r + 1, c - 2, n, expValue + 1)
    let ans7 = isValid(grid, r - 1, c - 2, n, expValue + 1)
    let ans8 = isValid(grid, r - 2, c - 1, n, expValue + 1)

    return asn1 || ans2 || ans3 || ans4 || ans5 || ans6 || ans7 || ans8
}

var checkValidGrid = function (grid)
{
    let n = grid.length
    let expValue = 0
    let ans = isValid(grid, 0, 0, n, expValue)
    return ans
};

let grid = [[0, 11, 16, 5, 20], [17, 4, 19, 10, 15], [12, 1, 8, 21, 6], [3, 18, 23, 14, 9], [24, 13, 2, 7, 22]]
console.log(checkValidGrid(grid));

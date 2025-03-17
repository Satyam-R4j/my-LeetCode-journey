/**
 * @param {number[][]} grid
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-2965 (easy)
//Solution in JavaScript
var findMissingAndRepeatedValues = function (grid)
{
    let s = new Set()
    let ans = []
    let n = grid.length
    let a = null, b = null
    let expSum = null, actSum = null
    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < n; j++)
        {
            actSum = actSum + grid[i][j]
            if (s.has(grid[i][j]))
            {
                a = grid[i][j]
                ans.push(a)
            }
            s.add(grid[i][j])
        }
    }
    expSum = (n ** 2) * (n ** 2 + 1) / 2
    b = expSum + a - actSum
    ans.push(b)
    return ans
};


let grid = [[9, 1, 7],
[8, 9, 2],
[3, 4, 6]]
console.log(findMissingAndRepeatedValues(grid));

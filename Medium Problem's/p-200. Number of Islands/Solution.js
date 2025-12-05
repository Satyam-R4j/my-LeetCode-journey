/**
 * @param {character[][]} grid
 * @return {number}
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-200 (medium)
//Solution in JavaScript
var numIslands = function (grid) {
    function helper(i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== "1") {
            return;
        }
        grid[i][j] = "0";

        helper(i - 1, j); //top
        helper(i + 1, j); //bottom
        helper(i, j + 1); //right
        helper(i, j - 1); //left
    }

    let isLand = 0;
    let n = grid.length;
    let m = grid[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "1") {
                helper(i, j);
                isLand++;
            }
        }
    }
    return isLand;
};

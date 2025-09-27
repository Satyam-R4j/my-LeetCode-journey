/**
 * @param {character[][]} grid
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-200 (medium)
//Solution in JavaScript
var numIslands = function (grid) {
    let island = 0;
    let n = grid.length;
    let m = grid[0].length;

    let vis = Array.from({length:n},()=>Array(m).fill(false))

    function helper(i, j, vis, grid) {
        if (i < 0 || j < 0 || i >= n || j >= m || vis[i][j] || grid[i][j] !== "1"){
            return;
        }
        vis[i][j] = true;

        helper(i - 1, j, vis, grid, n, m);
        helper(i, j + 1, vis, grid, n, m);
        helper(i + 1, j, vis, grid, n, m);
        helper(i, j - 1, vis, grid, n, m);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "1" && !vis[i][j]) {
                helper(i, j, vis, grid, n, m);
                island++;
            }
        }
    }
    return island;
};
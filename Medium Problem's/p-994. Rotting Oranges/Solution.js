/**
 * @param {number[][]} grid
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-994 (medium)
//Solution in JavaScript
var orangesRotting = function (grid) {
    let n = grid.length;
    let m = grid[0].length;
    let ans = 0;
    let vis = Array.from({ length: n }, () => Array(m).fill(false));
    let qu = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) {
                qu.push([[i, j], 0]);
                vis[i][j] = 0;
            }
        }
    }
    while (qu.length > 0) {
        let [[i, j], time] = qu.shift();
        ans = Math.max(ans, time);

        if (i - 1 >= 0 && !vis[i - 1][j] && grid[i - 1][j] === 1) {
            qu.push([[i - 1, j], time + 1]);
            vis[i - 1][j] = true;
        }
        if (j + 1 < m && !vis[i][j + 1] && grid[i][j + 1] === 1) {
            qu.push([[i, j + 1], time + 1]);
            vis[i][j + 1] = true;
        }
        if (i + 1 < n && !vis[i + 1][j] && grid[i + 1][j] === 1) {
            qu.push([[i + 1, j], time + 1]);
            vis[i + 1][j] = true;
        }
        if (j - 1 >= 0 && !vis[i][j - 1] && grid[i][j - 1] === 1) {
            qu.push([[i, j - 1], time + 1]);
            vis[i][j - 1] = true;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1 && !vis[i][j]) return -1;
        }
    }
    return ans;
};

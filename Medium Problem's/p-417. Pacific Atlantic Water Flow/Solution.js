/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-417 (medium)
//Solution in JavaScript
var pacificAtlantic = function (heights) {
    let m = heights.length;
    let n = heights[0].length;

    let pacific =  Array.from({ length: m }, () => Array(n).fill(false));
    let atlantic =  Array.from({ length: m }, () => Array(n).fill(false));

    const dirs = [[1, 0],[-1, 0],[0, 1],[0, -1],];

    function dfs(r, c, visited) {
        visited[r][c] = true;   

        for (let [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (nc < 0 || nr < 0 || nr >= m 
               || nc >= n || visited[nr][nc] 
               || heights[nr][nc] < heights[r][c]) continue;

            dfs(nr, nc, visited);
        }
    }
    for (let i = 0; i < m; i++) dfs(i, 0, pacific);
    for (let j = 0; j < n; j++) dfs(0, j, pacific);

    for (let i = 0; i < m; i++) dfs(i, n - 1, atlantic);
    for (let j = 0; j < n; j++) dfs(m - 1, j, atlantic);

    const res = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                res.push([i, j]);
            }
        }
    }
    return res;
};

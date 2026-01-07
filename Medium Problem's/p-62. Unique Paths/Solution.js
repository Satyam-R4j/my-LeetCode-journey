/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-62 (medium)
//Solution in JavaScript
var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) dp[0][i] = 1;
    for (let j = 0; j < m; j++) dp[j][0] = 1;

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

let m = 3,
    n = 7;
console.log(uniquePaths(m, n));

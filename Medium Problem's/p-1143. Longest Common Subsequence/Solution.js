/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-1143 (medium)
//Solution in JavaScript
var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length;
    let m = text2.length;
    let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    for (let i = 1; i < n + 1; i++) {
            for (let j = 1; j < m + 1; j++) {
            if (text1.charAt(i  - 1) === text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[n][m]
};

let text1 = "abcde",
    text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));

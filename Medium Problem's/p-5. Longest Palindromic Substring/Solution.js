/**
 * @param {string} s
 * @return {string}
 */

//Satyam-R4j-LeetCode Problem-5 (medium)
//Solution in JavaScript
var longestPalindrome = function (s) {
    const n = s.length;
    if (n < 2) return s;

    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    let start = 0;
    let maxLen = 1;

    for (let i = 0; i < n; i++) dp[i][i] = true;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j] && (j - i === 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if (j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    start = i;
                }
            }
        }
    }

    return s.substring(start, start + maxLen);
};

let s = "babad";
console.log(longestPalindrome(s));

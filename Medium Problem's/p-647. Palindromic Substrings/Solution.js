/**
 * @param {string} s
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-647 (medium)
//Solution in JavaScript
var countSubstrings = function (s) {
    const n = s.length;
    if (n < 2) return s.length;

    let count = n;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) dp[i][i] = true;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j] && (j - i === 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                count++;
            }
        }
    }
    return count;
};

s = "aaa";
console.log(countSubstrings(s));

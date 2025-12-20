/**
 * @param {string} s
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-91 (Medium)
//Solution in JavaScript
var numDecodings = function (s) {
    if (s.length < 0) return 0;
    let dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s.charAt(0) === "0" ? 0 : 1;

    for (let i = 2; i <= s.length; i++) {
        let oneDigit = Number(s.substring(i - 1, i));
        let twoDigit = Number(s.substring(i - 2, i));

        if (oneDigit >= 1) {
            dp[i] += dp[i - 1];
        }
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[s.length];
};

let s = "226";
console.log(numDecodings(s));

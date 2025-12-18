/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-139 (Medium)
//Solution in JavaScript
var wordBreak = function (s, wordDict) {
    let setWords = new Set(wordDict);
    let dp = [];
    let maxLen = 0;
    for (let word of setWords) {
        maxLen = Math.max(maxLen, word.length);
    }
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = i - 1; j >= Math.max(0, i - maxLen); j--) {
            if (dp[j] && setWords.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
            dp[i] = false;
        }
    }
    return dp[s.length];
};

// let s = "leetcode",
//     wordDict = ["leet", "code"];
let s = "catsandog",
    wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict));

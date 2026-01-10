/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-424 (medium)
//Solution in JavaScript
var characterReplacement = function (s, k) {
    if (s.length === 0) return 0;

    let left = 0;
    let maxLen = 0;
    let maxFreq = 0;
    let charCount = {};

    for (let right = 0; right < s.length; right++) {
        charCount[s[right]] = (charCount[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, charCount[s[right]]);

        let winLen = right - left + 1;
        if (winLen - maxFreq > k) {
            charCount[s[left]]--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};

let s = "AABABBA",
    k = 1;
console.log(characterReplacement(s, k));

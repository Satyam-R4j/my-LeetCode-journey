/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
//Satyam-R4j-LeetCode Problem-271 (medium)
//Solution in JavaScript
var encode = function (strs) {
    let encoded = "";
    for (const s of strs) {
        encoded += s.length + "#" + s;
    }
    return encoded;
};

var decode = function (s) {
    let decoded = [];
    let i = 0;

    while (i < s.length) {
        let j = i;
        while (s[j] !== "#") j++;

        let len = parseInt(s.slice(i, j));
        let word = s.slice(j + 1, j + 1 + len);
        decoded.push(word);
        i = j + 1 + len;
    }

    return decoded;
};


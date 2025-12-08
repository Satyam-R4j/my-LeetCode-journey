/**
 * @param {string} s
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-20 (easy)
//Solution in JavaScript
var isValid = function (s) {
    let map = {
        "[": "]",
        "{": "}",
        "(": ")",
    };
    let stack = [];

    for (ch of s) {
        if (map[ch]) {
            stack.push(map[ch]);
        } else {
            if (stack.length === 0 || stack.pop() !== ch) return false;
        }
    }
    return stack.length === 0
};

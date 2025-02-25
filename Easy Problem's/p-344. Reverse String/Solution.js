/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = s.length
    let start = 0, end = n  - 1
    while (start < end) {
       [s[start++], s[end--]] = [s[end], s[start]]
    }
    return s

};


s = ["h","e","l","l","o"]
console.log(s);
console.log(reverseString(s));


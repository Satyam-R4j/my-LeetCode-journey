/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//Satyam-R4j-LeetCode Problem-76 (Hard) 
//Solution in JavaScript
var minWindow = function (s, t) {
    if (t.length > s.length) return "";
    let tCount = new Map()
    for (const char of t) tCount.set(char, (tCount.get(char) || 0) + 1);

    let windowCount = new Map()
    let required = tCount.size;
    let formed = 0;
    let left = 0,
        right = 0;

    let minLen = Infinity;
    let minLeft = 0;

    while (right < s.length) {
        const char = s[right];
        windowCount.set(char, (windowCount.get(char) || 0) + 1);

        if (tCount.has(char) && windowCount.get(char) === tCount.get(char))
            formed++;

        while (formed === required && left <= right) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
            }

            const leftChar = s[left];
            windowCount.set(leftChar, windowCount.get(leftChar) - 1);

            if (
                tCount.has(leftChar) &&
                windowCount.get(leftChar) < tCount.get(leftChar)
            )
                formed--;

            left++;
        }
        right++;
    }
    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
};

let s = "ADOBECODEBANC",
    t = "ABC";
console.log(minWindow(s, t));

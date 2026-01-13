/**
 * @param {string} s
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-124 (easy)
//Solution in JavaScript
var isPalindrome = function(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};
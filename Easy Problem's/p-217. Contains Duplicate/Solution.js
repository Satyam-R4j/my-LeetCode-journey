//Satyam-R4j-LeetCode Problem-217 (easy)
//Solution in JavaScript
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const n of nums) {
        if (seen.has(n)) return true;
        seen.add(n);
    }
    return false;
};
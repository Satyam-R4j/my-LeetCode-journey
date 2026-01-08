/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//Satyam-R4j-LeetCode Problem-49 (medium)
//Solution in JavaScript
var groupAnagrams = function (strs) {
    let sorted = [];
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        sorted[i] = strs[i].split("").sort().join();
    }

    for (let i = 0; i < strs.length; i++) {
        const key = sorted[i];
        if (!map.has(key)) {
            map.set(sorted[i], [strs[i]]);
        } else {
            map.get(key).push(strs[i]);
        }
    }

    let ans = Array.from(map.values());
    return ans;
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

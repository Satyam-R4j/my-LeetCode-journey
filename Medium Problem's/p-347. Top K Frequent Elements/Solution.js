/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-347 (medium)
//Solution in JavaScript
var topKFrequent = function (nums, k) {
    let frequent = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentFreq = frequent.get(nums[i]) || 0;
        frequent.set(nums[i], currentFreq + 1);
    }
    
    const sortedFreq = [...frequent.entries()].sort((a, b)=> b[1] - a[1])
    return sortedFreq.slice(0,k).map(pair => pair[0])
};

(nums = [1, 1, 1, 2, 2, 3]), (k = 2);
console.log(topKFrequent(nums, k));

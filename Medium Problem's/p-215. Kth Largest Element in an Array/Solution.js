/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-215 (medium)
//Solution in JavaScript most optimal
var findKthLargest = function (nums, k) {
    let minHeap = new MinHeap();
    for (let i = 0; i < k; i++) {
        minHeap.push(nums[i]);
    }
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.top()) {
            minHeap.pop();
            minHeap.push(nums[i]);
        }
    }
    return minHeap.top();
};
// let nums = [3,2,3,1,2,4,5,5,6],
let nums = [3, 2, 1, 5, 6, 4],
    k = 4;
console.log(findKthLargest(nums, k));

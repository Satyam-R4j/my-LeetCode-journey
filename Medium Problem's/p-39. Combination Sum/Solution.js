/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-39 (medium)
//Solution in JavaScript
var combinationSum = function (arr, target) {
    function helper(arr, i, target, ans, combin) {
        if (target === 0) {
            ans.push([...combin]);
            return;
        }
        if (i >= arr.length || target < 0) return;

        combin.push(arr[i]);
        helper(arr, i, target - arr[i], ans, combin);

        combin.pop();
        helper(arr, i + 1, target, ans, combin);
    }

    arr.sort((a, b) => a - b);
    let ans = [];
    let combin = [];

    helper(arr, 0, target, ans, combin);
    return ans;
};

let arr = [2, 3, 6, 7],
    target = 7;
console.log(combinationSum(arr, target));

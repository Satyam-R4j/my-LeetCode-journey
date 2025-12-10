/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-77 (Medium) 
//Solution in JavaScript with Recursion
var combine = function (n, k) {
    function combination(start, ans, result) {
        if (ans.length === k) {
            result.push([...ans]);
            return;
        }
        for (let j = start; j <= n; j++) {
            ans.push(j);
            combination(j + 1, ans, result);
            ans.pop();
        }
    }

    let ans = [];
    let result = [];
    combination(1, ans, result);

    return result;
};

let n = 4,
    k = 2; // k is all possible comb..

let ans = combine(n, k);
console.log(ans);

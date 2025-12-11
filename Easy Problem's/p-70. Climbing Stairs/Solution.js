/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     if (n <= 3)  return n
//     let pre1 = 3
//     let pre2 = 2
//     let curr = 0

//     for (let i = 3; i < n; i++) {
//         curr = pre1 + pre2
//         pre2 = pre1
//         pre1 = curr
//     }
//     return curr

// };

/**
 * @param {number} n
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-70 (easy)
//Solution in JavaScript
var climbStairs = function (n, memo = {}) {
    if (n <= 3) return n;
    if (memo[n]) return memo[n];
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};

let n = 4;
console.log(climbStairs(n));

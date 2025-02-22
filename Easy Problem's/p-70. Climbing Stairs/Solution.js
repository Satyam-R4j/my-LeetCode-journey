/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3)  return n
    let pre1 = 3
    let pre2 = 2
    let curr = 0

    for (let i = 3; i < n; i++) {
        curr = pre1 + pre2
        pre2 = pre1
        pre1 = curr
    }
    return curr

};

let n = 5
console.log(climbStairs(n))
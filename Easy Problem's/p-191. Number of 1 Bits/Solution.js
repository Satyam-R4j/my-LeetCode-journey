/**
 * @param {number} n
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-191 (easy)
//Solution in JavaScript
var hammingWeight = function (n) {
  return n.toString(2).split("1").length - 1;
};

let n = 11;
console.log(hammingWeight(n));

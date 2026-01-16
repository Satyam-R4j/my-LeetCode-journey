/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-371 (medium)
//Solution in JavaScript
var getSum = function (a, b) {
  while (b !== 0) {
    let carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }

  return a;
};

let a = 1,
  b = 2;
console.log(getSum(a, b));

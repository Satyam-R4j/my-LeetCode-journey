/**
 * @param {number} n
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-338 (easy)
//Solution in JavaScript
var countBits = function (n) {
  return Array.from(
    { length: n + 1 },
    (_, i) => i.toString(2).split("1").length - 1,
  );
};

let n = 2;
console.log(countBits(n));

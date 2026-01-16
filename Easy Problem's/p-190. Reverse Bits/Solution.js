/**
 * @param {number} n
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-190 (easy)
//Solution in JavaScript
var reverseBits = function (n) {
    let binary = n.toString(2).padStart(32,'0')
    let reverseBinary = binary.split('').reverse().join('')
    return parseInt(reverseBinary,2)
};

let n = 43261596;
console.log(reverseBits(n));

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-167 (Medium) 
//Solution in JavaScript
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum > target) right--;
        else if (sum < target) left++;
        else return [left + 1, right + 1];
    }
    return [];
};

let numbers = [2, 7, 11, 15],
    target = 9;

let ans = twoSum(numbers, target);
console.log(ans);

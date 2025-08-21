/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-134 (medium)
//Solution in JavaScript
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  gas.forEach((num) => {
    totalGas += num;
  });

  cost.forEach((num) => {
    totalCost += num;
  });
  if (totalCost > totalGas) return -1;

  let currGas = 0;
  let start = 0;
  for (let i = 0; i <= gas.length - 1; i++) {
    currGas += gas[i] - cost[i];
    if (currGas < 0) {
      start = i + 1;
      currGas = 0;
    }
  }
  return start;
};

let gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
let ans = canCompleteCircuit(gas, cost);
console.log("Anser: ", ans);

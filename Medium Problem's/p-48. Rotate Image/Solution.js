/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//Satyam-R4j-LeetCode Problem-48 (Medium)
//Solution in JavaScript
var rotate = function (matrix) {
  let R = matrix.length;
  let C = matrix[0].length;
  for (let i = 0; i < R; i++) {
    for (let j = i; j < C; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix.map((row) => row.reverse());
};


let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log(rotate(matrix));

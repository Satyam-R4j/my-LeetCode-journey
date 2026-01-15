/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//Satyam-R4j-LeetCode Problem-73 (Medium)
//Solution in JavaScript
var setZeroes = function (matrix) {
  let R = matrix.length;
  let C = matrix[0].length;
  function setZero(i, j) {
    // Up
    for (let a = i - 1; a >= 0; a--) {
      matrix[a][j] = 0;
    }
    // Down
    for (let a = i + 1; a < R; a++) {
      matrix[a][j] = 0;
    }
    // Left
    for (let a = j - 1; a >= 0; a--) {
      matrix[i][a] = 0;
    }
    // Right
    for (let a = j + 1; a < C; a++) {
      matrix[i][a] = 0;
    }
  }

  let zeroPos = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] === 0) {
        zeroPos.push([i, j]);
      }
    }
  }
  for (const [i, j] of zeroPos) {
    setZero(i, j);
  }
  return matrix;
};

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
let out = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];

[
  [1, 1, 1],
  [1, 0, 0],
  [1, 0, 0],
];
console.log(setZeroes(matrix));

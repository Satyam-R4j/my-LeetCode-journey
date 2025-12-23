/**
 * @param {number[][]} intervals
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-435 (Medium)
//Solution in JavaScript
var eraseOverlapIntervals = function (intervals) {
    if(intervals.length === 0) return 0
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = 0;

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) {
            ans++;
            intervals[i + 1][1] = Math.min(
                intervals[i][1],
                intervals[i + 1][1]
            );
        }
        intervals[i + 1][0] = intervals[i + 1][0];
    }
    return ans;
};

// let intervals = [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [1, 3],
// ]; //[ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 3, 4 ] ] // 1,3
// let intervals = [[1,2],[1,2],[1,2]]
let intervals = [
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
];
console.log(eraseOverlapIntervals(intervals));

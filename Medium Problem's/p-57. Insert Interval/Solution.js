/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-57 (Medium)
//Solution in JavaScript
var insert = function (intervals, newInterval) {
    let ans = [];
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        ans.push(intervals[i]);
        i++;
    }
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    ans.push(newInterval);
    while (i < intervals.length) {
        ans.push(intervals[i]);
        i++;
    }
    return ans;
};

let intervals = [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
    ],
    newInterval = [4, 8];
//Output: [[1,2],[3,10],[12,16]]
console.log(insert(intervals, newInterval));

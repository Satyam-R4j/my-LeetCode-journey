/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-56 (medium)
//Solution in JavaScript
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let ans = [];
    let currInterval = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= currInterval[1]) {
            currInterval[1] = Math.max(currInterval[1], intervals[i][1]);
        } else {
            ans.push(currInterval);
            currInterval = intervals[i];
        }
    }

    ans.push(currInterval);
    return ans;
};

let intervals = [
    [2, 6],
    [1, 3],
    [8, 10],
    [15, 18],
];
console.log(merge(intervals));

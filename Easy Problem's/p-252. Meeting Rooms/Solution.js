/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-252 (easy)
//Solution in JavaScript
var canAttendMeetings = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) {
            return false;
        }
    }
    return true;
};

let intervals = [
    [1, 3],
    [4, 6],
    [7, 9],
];
console.log(canAttendMeetings(intervals));

/**
 * @param {number[][]} intervals
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-253 (medium)
//Solution in JavaScript
var minMeetingRooms = function (intervals) {
    if (intervals.length === 0) return 0;
    let starts = [];
    let ends = [];
    for (let i = 0; i < intervals.length; i++) {
        starts.push(intervals[i][0]);
        ends.push(intervals[i][1]);
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let result = 0;
    let count = 0;
    let fst = 0;
    let sec = 0;
    while (fst < intervals.length) {
        if (starts[fst] < ends[sec]) {
            count++;
            fst++;
        } else {
            count--;
            sec++;
        }
        result = Math.max(result, count);
    }
    return result;
};

let intervals = [
    [0, 30],
    [5, 10],
    [15, 20],
];
console.log(minMeetingRooms(intervals));


//Satyam-R4j-LeetCode Problem-295 (Hard) 
//Solution in JavaScript
var MedianFinder = function () {
    this.nums = []
};
MedianFinder.prototype.addNum = function (num) {
    let left = 0, right = this.nums.length
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (this.nums[mid] < num) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    this.nums.splice(left, 0, num)
};
MedianFinder.prototype.findMedian = function () {
    const n = this.nums.length
    if (n % 2 === 0) {
        return (this.nums[n / 2 - 1] + this.nums[n / 2]) / 2;
    }
    return this.nums[Math.floor(n / 2)]
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
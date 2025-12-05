//Satyam-R4j-LeetCode Problem-11 (Medium)
//Solution in JavaScript
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const currentWater = width * h;
        maxWater = Math.max(maxWater, currentWater);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
};

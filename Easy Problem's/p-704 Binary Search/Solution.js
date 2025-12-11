//Satyam-R4j-LeetCode Problem-704 (easy)
//Solution in JavaScript using recursion
function search(nums, target) {
    function helper(l, r) {
        if (l > r) return -1;
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) return helper(mid + 1, r);
        return helper(l, mid - 1);
    }
    return helper(0, nums.length - 1);
}

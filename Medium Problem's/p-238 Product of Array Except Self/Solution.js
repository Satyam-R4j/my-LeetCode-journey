/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-238 (medium)
//Solution in JavaScript
function productExceptSelf(nums) {
    const numsSize = nums.length;
    const ans = new Array(numsSize);
    let suffix = 1;

    ans[0] = 1;

    for (let i = 1; i < numsSize; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    for (let i = numsSize - 2; i >= 0; i--) {
        suffix *= nums[i + 1];
        ans[i] *= suffix;
    }

    return ans;
}

class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int: # type: ignore
        if k <= 1:
            return 0
        n = len(nums)
        i = 0
        j = 0
        count = 0
        product = 1

        while j < n:
            product *= nums[j]
            while product >= k:
                count += j - i
                product /= nums[i]
                i += 1
            j += 1
        while i < n:
            count += j - i
            product /= nums[i]
            i += 1
        return count

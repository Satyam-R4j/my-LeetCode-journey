from typing import List
import math


class Solution:
    def minimumPairRemoval(self, nums: List[int]) -> int:
        def not_decreasing(arr):
            for i in range(1, len(arr)):
                if nums[i] < nums[i - 1]:
                    return False
            return True

        ans = 0
        while not not_decreasing(nums):
            k = 0
            min_sum = nums[0] + nums[1]

            for i in range(1, len(nums) - 1):
                curr_sum = nums[i] + nums[i + 1]
                if curr_sum < min_sum:
                    min_sum = curr_sum
                    k = i

            nums[k] = min_sum
            nums.pop(k + 1)
            ans += 1
        return ans


if __name__ == "__main__":
    sol = Solution()
    nums = [5, 2, 3, 1]
    sol.minimumPairRemoval(nums)

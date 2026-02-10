class Solution:
    def longestSubarray(self, nums: List[int]) -> int: # type: ignore
        n = len(nums)
        flips = 0
        i = 0
        k= 1
        j = 0
        max_len = -math.inf  # type: ignore
        ln = -math.inf  # type: ignore

        while j < n:
            if nums[j] == 1:
                j += 1
            else:
                if flips < k:
                    flips += 1
                    j += 1
                else:
                    ln = j - i
                    max_len = max(max_len, ln)
                    while nums[i] == 1:
                        i += 1
                    i += 1
                    j += 1
        ln = j - i
        max_len = max(max_len, ln)
        return max_len - 1
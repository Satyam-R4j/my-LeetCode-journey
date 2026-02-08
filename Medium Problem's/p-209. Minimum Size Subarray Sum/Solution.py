class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int: # type: ignore
        n = len(nums)
        i = 0
        j = 0
        minLen = math.inf # type: ignore
        sum = 0
        ln = 0

        while j < n:
            sum += nums[j]
            while sum >= target:
                ln = j - i + 1
                minLen = min(minLen, ln)
                sum -= nums[i]
                i+=1
            j+=1

        if minLen == math.inf: # type: ignore
            return 0
        return minLen



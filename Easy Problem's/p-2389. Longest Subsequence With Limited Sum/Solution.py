class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]: # type: ignore
        n = len(nums)
        m = len(queries)
        ans = [0] * m
        nums.sort()
        for i in range(1, n):
            nums[i]  += nums[i - 1]
        
        for i in range(m):
            ln = 0
            for j  in range(n):
                if nums[j] > queries[i]:
                    break
                ln+=1
            ans[i] = ln
        
        return ans
        
        


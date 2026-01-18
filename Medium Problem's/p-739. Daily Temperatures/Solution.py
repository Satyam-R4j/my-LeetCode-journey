from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        ans = [0] * n
        stack = []

        for i in range(n):
            while stack and temperatures[i] > temperatures[stack[-1]]:
                prev = stack.pop()
                ans[prev] = i - prev
            stack.append(i)
        return ans


sol = Solution()
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
sol.dailyTemperatures(temperatures)

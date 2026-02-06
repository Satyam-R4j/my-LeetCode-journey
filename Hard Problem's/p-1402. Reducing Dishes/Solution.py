class Solution:
    def maxSatisfaction(self, satisfaction: List[int]) -> int: # type: ignore
        n = len(satisfaction)
        satisfaction.sort()
        suf = [0] * n
        suf[n - 1] = satisfaction[n - 1]

        for i in range(n - 2, -1, -1):
            suf[i] = suf[i + 1] + satisfaction[i]

        idx = -1
        for i in range(n):
            if suf[i] >= 0:
                idx = i
                break

        if idx == -1:
            return 0
        x = 1
        max_sum = 0
        for i in range(idx, n):
            max_sum += (satisfaction[i]) * x
            x += 1

        return max_sum

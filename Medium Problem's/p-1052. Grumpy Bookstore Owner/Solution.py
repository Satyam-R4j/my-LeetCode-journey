class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:  # type: ignore

        n = len(customers)
        prevLoss = 0
        for i in range(minutes):
            if grumpy[i] == 1:
                prevLoss += customers[i]

        maxLoss = prevLoss
        maxIdx = 0
        i = 1
        j = minutes
        while j < n:
            currLoss = prevLoss
            if grumpy[j] == 1:
                currLoss += customers[j]
            if grumpy[i - 1] == 1:
                currLoss -= customers[i - 1]
            if maxLoss < currLoss:
                maxLoss = currLoss
                maxIdx = i
            prevLoss = currLoss
            i += 1
            j += 1

        for i in range(maxIdx, maxIdx + minutes):
            grumpy[i] = 0

        sum = 0
        for i in range(n):
            if grumpy[i] == 0:
                sum += customers[i]
        return sum


customers = [1, 0, 1, 2, 1, 1, 7, 5]
grumpy = [0, 1, 0, 1, 0, 1, 0, 1]
minutes = 3

sol = Solution()
print(sol.maxSatisfied(customers, grumpy, minutes))

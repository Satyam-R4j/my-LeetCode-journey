class Solution:
    def gd(self, n):
        for i in range(n // 2, -1, -1):
            if n % i == 0:
                return i

        return 1

    def minSteps(self, n: int) -> int:  # type: ignore
        count = 0

        while n > 1:
            hf = self.gd(n)
            count += (n // hf)
            n = hf

        return count

import math


class Solution:
    def fillSieve(self, sieve):
        n = len(sieve)
        for i in range(2, int(math.sqrt(n)) + 1):
            if sieve[i] == 1:
                for j in range(i * i, n, i):
                    sieve[j] = 0

    def countPrimes(self, n: int) -> int:  # type: ignore
        count = 0
        sieve = [1] * n
        self.fillSieve(sieve)
        if n > 0:
            sieve[0] = 0
        if n > 1:
            sieve[1] = 0

        for i in range(2, n):
            if sieve[i] == 1:
                count += 1
        return count

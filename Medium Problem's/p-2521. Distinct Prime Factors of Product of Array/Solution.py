import math


class Solution:
    def fillSieve(self, sieve):
        n = len(sieve)

        for i in range(2, int(math.sqrt(n)) + 1):
            if sieve[i] == 1:
                for j in range(i * 2, n, i):
                    sieve[j] = 0

    def distinctPrimeFactors(self, nums: List[int]) -> int:  # type: ignore
        n = len(nums)
        mx = max(nums)

        sieve = [1] * (mx + 1)

        sieve[0] = 0
        sieve[1] = 0

        self.fillSieve(sieve)
        primes = []
        for i in range(2, mx + 1):
            if sieve[i] == 1:
                primes.append(i)

        taken = [0] * len(primes)
        for i in range(len(nums)):
            ele = nums[i]
            for j in range(len(primes)):
                if primes[j] > ele:
                    break
                if ele % primes[j] == 0:
                    taken[j] = 1

                    while ele % primes[j] == 0:
                        ele //= primes[j]

        count = 0
        for i in range(len(taken)):
            if taken[i] == 1:
                count += 1

        return count

import math


class Solution:
    def isPrime(self, n):
        if n <= 1:
            return False
        for i in range(2, int(math.sqrt(n)) + 1):
            if n % i == 0:
                return False
        return True

    def smallestValue(self, n: int) -> int:  # type: ignore
        if self.isPrime(n):
            return n
    
        sum = 0
        m = n
        for i in range(2, int(math.sqrt(n)) + 1):
            if m % i == 0 and self.isPrime(i):

                while m % i == 0:
                    sum += i
                    m //= i
        
        if m > 1:
            sum += m

        if sum == n:
            return n

        return self.smallestValue(sum)

class Solution:
    def isHappy(self, n: int) -> bool:

        def sqr_sum(n):
            total = 0
            while n > 0:
                digit = n % 10
                total += digit**2
                n //= 10
            return total

        st = set()
        
        while n != 1 and n not in st:
            st.add(n)
            n = sqr_sum(n)
        return n == 1

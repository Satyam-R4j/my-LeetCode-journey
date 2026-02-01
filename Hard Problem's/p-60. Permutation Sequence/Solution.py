class Solution:
    def getPermutation(self, n: int, k: int) -> str:  # type: ignore

        def helper(st, k, ans):

            n = len(st)
            if n ==0:
                return ans
            
            if n == 1:
                return ans + st

            fact = 1
            for i in range(1, n):
                fact *= i

            idx = (k - 1) // fact

            ch = st[idx]
            remaining = st[:idx] + st[idx + 1:]
            new_k = k - idx * fact

            return helper(remaining, new_k, ans + ch)

        st = ""
        for i in range(1, n + 1):
            st += str(i)

        return helper(st, k, "")

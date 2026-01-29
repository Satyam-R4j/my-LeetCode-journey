class Solution:
    def kthGrammar(self, n: int, k: int) -> int:  # type: ignore
        if n == 0:
            return 0
        if k % 2 == 0:
            return 1 if self.kthGrammar(n - 1, k//2) == 0 else 0
        else:
            return self.kthGrammar(n - 1, k//2+1)

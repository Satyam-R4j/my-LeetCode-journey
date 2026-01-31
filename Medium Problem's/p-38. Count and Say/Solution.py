class Solution:
    def countAndSay(self, n: int) -> str:  # type: ignore
        if n == 1:
            return "1"
        initStr = self.countAndSay(n - 1)
        print(initStr)
        ztr = ""
        freq = 1
        ch = initStr[0]

        for i in range(1, len(initStr)):
            ich = initStr[i]

            if ich == ch:
                freq += 1
            else:
                ztr += str(freq) + ch
                freq = 1
                ch = ich
        ztr += str(freq) + ch
        return ztr


sol = Solution()
ans = sol.countAndSay(5)
print(ans)

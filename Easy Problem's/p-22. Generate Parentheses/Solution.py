class Solution:
    def generateParenthesis(self, n: int) -> List[str]:  # type: ignore

        def helper(leftPram, rightPram, Lans, ans):

            if leftPram == n and rightPram == n:
                ans.append(Lans)
                return
            
            if leftPram < n:
                helper(leftPram + 1, rightPram, Lans + "(", ans)
            if rightPram < leftPram:
                helper(leftPram, rightPram + 1, Lans + ")", ans)

        ans = []
        helper(0, 0, "", ans)
        return ans


if __name__ == "__main__":
    sol = Solution()
    sol.generateParenthesis(3)

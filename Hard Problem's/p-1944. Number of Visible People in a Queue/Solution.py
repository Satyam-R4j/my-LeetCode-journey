class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:  # type: ignore
        n = len(heights)
        ans = [0] * n
        st = []
        st.append(heights[n - 1])
        ans[n - 1] = 0

        for i in range(n - 2, -1, -1):
            count = 0
            while len(st) > 0 and heights[i] > st[-1]:
                st.pop()
                count += 1

            if len(st) != 0:
                count += 1

            ans[i] = count
            st.append(heights[i])

        return ans

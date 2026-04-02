from collections import deque
class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]: # type: ignore
        n = len(deck)
        deck.sort()
        qu = deque()
        for i in range(n):
            qu.append(i)

        ans = [0] * n

        for i in range(n):
            idx = qu.popleft()
            ans[idx] = deck[i]
            if qu:
                curr = qu.popleft()
                qu.append(curr)

        return ans

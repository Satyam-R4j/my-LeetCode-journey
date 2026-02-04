class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False
        mp = dict()
        for a, b in zip(s, t):
            if a in mp:
                if mp[a] != b:
                    return False
            else:
                if b in mp.values():
                    return False
                mp[a] = b
        return True

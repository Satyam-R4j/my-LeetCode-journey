class Solution:
    def bestClosingTime(self, customers: str) -> int:  # type: ignore

        n = len(customers)
        prefix = [0] * (n + 1)
        suffix = [0] * (n + 1)
        prefix[0] = 0
        for i in range(n):
            prefix[i + 1] = prefix[i] + (1 if customers[i] == "N" else 0)

        suffix[n] = 0
        for j in range(n - 1, -1, -1):
            suffix[j] = suffix[j + 1] + (1 if customers[j] == "Y" else 0)

        prefix = [p + s for p, s in zip(prefix, suffix)]

        _min = min(prefix)
        for i in range(len(prefix)):
            pen = prefix[i]
            if pen == _min:
                return i
        return n

class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:  # type: ignore

        res = []
        direction = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        steps = 1
        r, c = rStart, cStart

        while len(res) < rows * cols:
            for i in range(4):
                dr, dc = direction[i]

                for _ in range(steps):
                    if 0 <= r < rows and 0 <= c < cols:
                        res.append([r, c])
                    r += dr
                    c += dc

                if i % 2 == 1:
                    steps += 1

        return res

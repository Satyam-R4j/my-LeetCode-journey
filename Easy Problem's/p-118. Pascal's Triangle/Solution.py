class Solution:
    def generate(self, numRows: int) -> List[List[int]]:  # type: ignore

        triangle = [[1]]
        for i in range(1, numRows):

            row = [1]
            for j in range(1, i):
                row.append(triangle[i - 1][j - 1] + triangle[i - 1][j])

            row.append(1)
            triangle.append(row)
        return triangle

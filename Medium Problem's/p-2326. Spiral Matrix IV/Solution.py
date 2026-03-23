# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def spiralMatrix(self, m: int, n: int, head: Optional[ListNode]) -> List[List[int]]:  # type: ignore

        matrix = [[-1] * n for _ in range(m)]
        num = 1
        curr = head
        for layer in range((min(m, n) + 1) // 2):

            # top row
            for j in range(layer, n - layer):
                if not curr:
                    return matrix
                matrix[layer][j] = curr.val
                curr = curr.next

            # right column
            for i in range(layer + 1, m - layer):
                if not curr:  
                    return matrix
                matrix[i][n - layer - 1] = curr.val
                curr = curr.next

            # bottom row
            for j in range(n - layer - 2, layer - 1, -1):
                if layer != m - layer - 1:
                    if not curr:
                        return matrix
                    matrix[m - layer - 1][j] = curr.val
                    curr = curr.next

            # left column
            for i in range(m - layer - 2, layer, -1):
                if layer != n - layer - 1:
                    if not curr:
                        return matrix
                    matrix[i][layer] = curr.val
                    curr = curr.next
        return matrix

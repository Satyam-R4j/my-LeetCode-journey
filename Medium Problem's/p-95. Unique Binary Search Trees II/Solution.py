# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:  # type: ignore

        def generate(left, right):
            if left == right:
                return [TreeNode(left)]
            if left > right:
                return [None]
            ans = []
            for val in range(left, right + 1):
                for leftTree in generate(left, val - 1):  # type: ignore
                    for rightTree in generate(val + 1, right):  # type: ignore
                        root = TreeNode(val, leftTree, rightTree)
                        ans.append(root)
            return ans

        return generate(1, n)

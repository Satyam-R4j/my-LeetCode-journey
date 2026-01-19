# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional


class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:  # type: ignore

        def checkHeight(node):
            if not node:
                return 0

            leftHeight = checkHeight(node.left)
            if leftHeight == -1:
                return -1

            rightHeight = checkHeight(node.right)
            if rightHeight == -1:
                return -1

            if abs(leftHeight - rightHeight) > 1:
                return -1

            return 1 + abs(leftHeight, rightHeight)

        return checkHeight(root) != -1

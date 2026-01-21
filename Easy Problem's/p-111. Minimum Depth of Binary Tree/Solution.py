# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, =None, =None):
#         self.val = val
#         self. =
#         self. =
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:  # type: ignore
        if not root:
            return 0

        def helper(node, depth):
            if not node:
                return
            if not node.left and not node.right:
                paths.append(depth)
                return
            if node.left:
                helper(node.left, depth + 1)
            if node.right:
                helper(node.right, depth + 1)

        paths = []
        helper(root, 1)
        return min(paths)

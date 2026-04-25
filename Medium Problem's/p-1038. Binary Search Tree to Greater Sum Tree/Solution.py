# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstToGst(self, root: Optional[TreeNode]) -> Optional[TreeNode]: # type: ignore

        currSum = 0
        def revInorder(node):
            nonlocal currSum
            if not node: return

            revInorder(node.right)
            currSum += node.val
            node.val = currSum
            revInorder(node.left)
        
        revInorder(root)
        return root


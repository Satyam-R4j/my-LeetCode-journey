# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levels(self, node):
        if not node: return 0
        return 1 + max(self.levels(node.left), self.levels(node.right))

    def preOrder(self, node, ans,level):
        if not node: return
        ans[level] = node.val
        self.preOrder(node.left, ans, level + 1)
        self.preOrder(node.right, ans, level + 1)
             


    def rightSideView(self, root: Optional[TreeNode]) -> List[int]: # type: ignore
        level = self.levels(root)
        ans = [0] * level
        self.preOrder(root,ans,0)
        return ans
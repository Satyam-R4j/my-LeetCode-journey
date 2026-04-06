# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def allPaths(self, root, v, ans, sum):
        if not root:
            return
        
        v = v + [root.val]

        if root.left is None and root.right is None:
            if root.val == sum:
                ans.append(v)
            return
        self.allPaths(root.left, v, ans, sum - (root.val))
        self.allPaths(root.right, v, ans, sum - (root.val))

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:  # type: ignore

        ans = []
        v = []
        self.allPaths(root, v, ans, targetSum)
        return ans

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def allPaths(self, root,target):
        if not root:
            return 0
        count = 0
        if root.val == target:
            count += 1

        count += self.allPaths(root.left, target - root.val)
        count += self.allPaths(root.right,target - root.val)
        return count

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int: # type: ignore
        if not root:
            return 0
        
        count = self.allPaths(root,targetSum)

        count += self.pathSum(root.left, targetSum)
        count += self.pathSum(root.right, targetSum)
        return count
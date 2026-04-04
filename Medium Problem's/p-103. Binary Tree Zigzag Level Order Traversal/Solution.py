# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]: # type: ignore
        
        res = []
        
        def dfs(node, level):
            if not node: return

            if len(res) == level:
                res.append([])
            if level % 2 == 0:
                res[level].append(node.val)
            else:
                res[level].insert(0,node.val)
            dfs(node.left,level +1)
            dfs(node.right,level +1)
            
        dfs(root,0)
        return res
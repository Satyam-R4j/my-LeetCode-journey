# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inOrderPred(self,root):
        pred = root.left
        while  pred.right:
            pred = pred.right
        return pred
    
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]: # type: ignore
        if root is None: return None

        if key < root.val:
            root.left  = self.deleteNode(root.left, key)
        elif key > root.val:
            root.right = self.deleteNode(root.right, key)
        else:
            if root.left is None and root.right is None:
                return None
            
            if root.left is None:
                return root.right
            if root.right is None:
                return root.left
        
            pred = self.inOrderPred(root)
            root.val  = pred.val
            root.left = self.deleteNode(root.left, pred.val)
        return root


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:

    def serialize(self, root: Optional[TreeNode]) -> str: # type: ignore
        """Encodes a tree to a single string.
        """

        data = []
        def preOrder(node):
            if not node:
                return
            
            data.append(str(node.val))
            preOrder(node.left)
            preOrder(node.right)

        preOrder(root)
        return ','.join(data)
           
                
    def deserialize(self, data: str) -> Optional[TreeNode]: # type: ignore
        """Decodes your encoded data to tree.
        """
        if not data:
            return None
        
        preorder = list(map(int,data.split(",")))
        self.i = 0

        def build(lower, upper):
            if self.i == len(preorder):
                return None
            
            val = preorder[self.i]
            if val < lower or val > upper:
                return None
            
            self.i += 1
            node = TreeNode(val)

            node.left = build(lower,val) # type: ignore
            node.right = build(val,upper) # type: ignore

            return node
        
        return build(float('-inf'), float('inf'))
            


        

# Your Codec object will be instantiated and called as such:
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans
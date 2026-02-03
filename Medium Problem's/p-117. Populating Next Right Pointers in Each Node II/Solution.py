"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""


class Solution:
    def connect(self, root: "Node") -> "Node":  # type: ignore
        if not root:
            return None

        def getNext(node):

            curr = node.next
            while curr:
                if curr.left:
                    return curr.left
                if curr.right:
                    return curr.right
                curr = curr.next
            return None

        def connector(p, q):
            if not p:
                return

            p.next = q

            if p.right:
                connector(p.right, getNext(p))
            elif p.left:
                if p.right:
                    connector(p.left, p.right)
                else:
                    connector(p.left, getNext(p))

      
            connector(root, None)
        return root

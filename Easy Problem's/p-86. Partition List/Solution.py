# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:  # type: ignore
        smaller_dum = ListNode(0)
        large_dum = ListNode(0)

        smaller = smaller_dum
        larger = large_dum

        currNode = head
        while currNode:
            if currNode.val < x:
                smaller.next = currNode
                smaller = smaller.next
            else:
                larger.next = currNode
                larger = larger.next
            currNode = currNode.next

        larger.next = None
        smaller.next = large_dum.next

        return smaller_dum.next


# Input: head =  [1,4,3,2,5,2], x = 3
#        Output: [1,2,2,4,3,5]

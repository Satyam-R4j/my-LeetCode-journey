# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]: # type: ignore

        dumy = ListNode(0)  # type: ignore
        curr = head
        while curr:
            next_node = curr.next
            prev = dumy

            while prev.next and prev.next.val < curr.val:
                prev= prev.next

            curr.next = prev.next
            prev.next = curr

            curr = next_node
        
        return dumy.next


                

            



        




# Input: head = [4,2,1,3]
# Output: [1,2,3,4]
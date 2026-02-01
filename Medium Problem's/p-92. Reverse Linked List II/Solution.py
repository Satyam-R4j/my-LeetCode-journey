# Definition for singly-linked list.

class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:  # type: ignore

        dummy = ListNode(0,head) # type: ignore
        prev = dummy

        for _ in range(left - 1):
            prev = prev.next

        curr = prev.next

        for _ in range(right - left):
            temp = curr.next
            curr.next = temp.next
            temp.next = prev.next
            prev.next = temp

        return dummy.next

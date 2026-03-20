# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:  # type: ignore

        dummy = ListNode(0, head)  # type: ignore
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

    def reverseEvenLengthGroups(self, head: Optional[ListNode]) -> Optional[ListNode]:  # type: ignore

        temp = head
        gap = 1
        pos = 1

        while temp:
            remLen = 0
            t = temp
            for _ in range(gap):
                if t is None:
                    break
                t = t.next
                remLen += 1

            if remLen % 2 == 0:
                head = self.reverseBetween(head, pos, pos + remLen - 1)

                temp = head
                for _ in range(pos - 1):
                    temp = temp.next

            for _ in range(remLen):
                temp = temp.next
            pos += remLen
            gap += 1

        return head

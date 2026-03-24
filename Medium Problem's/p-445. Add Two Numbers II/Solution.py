# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:  # type: ignore

        s1, s2 = [], []

        while l1:
            s1.append(l1.val)
            l1 = l1.next
        while l2:
            s2.append(l2.val)
            l2 = l2.next

        carry = 0
        head = None

        while s1 or s2 or carry:
            val = carry

            if s1:
                val += s1.pop()
            if s2:
                val += s2.pop()

            carry = val // 10
            node = ListNode(val % 10)
            node.next = head
            head = node

        return head

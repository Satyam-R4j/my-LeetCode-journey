# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:  # type: ignore

        def merge_sort(head):
            if not head or not head.next:
                return head

            mid = get_mid(head)
            right_head = mid.next  # type: ignore
            mid.next = None  # type: ignore

            left = merge_sort(head)
            right = merge_sort(right_head)

            return merge(left, right)

        def get_mid(head):

            slow = head
            fast = head
            prev = None
            while fast and fast.next:
                prev = slow
                slow = slow.next
                fast = fast.next.next
            return prev

        def merge(left, right):
            dummy = ListNode(0)  # type: ignore
            curr = dummy
            while left and right:
                if left.val <= right.val:
                    curr.next = left
                    left = left.next
                else:
                    curr.next = right
                    right = right.next
                curr = curr.next

            curr.next = left if left else right
            return dummy.next

        return merge_sort(head)

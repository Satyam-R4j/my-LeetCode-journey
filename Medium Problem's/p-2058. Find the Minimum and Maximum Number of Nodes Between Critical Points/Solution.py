# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:  # type: ignore
        idx = 0
        fstIdx = -1
        secIdx = -1
        prev = head
        mid = head.next
        nxt = head.next.next

        while nxt:
            if prev.val > mid.val < nxt.val or prev.val < mid.val > nxt.val:
                if fstIdx == -1:
                    fstIdx = idx
                else:
                    secIdx = idx
            prev = prev.next
            mid = mid.next
            nxt = nxt.next
            idx += 1

        if secIdx == -1:
            return [-1, -1]

        maxd = secIdx - fstIdx
        mind = float("inf")
        idx = 1
        fstIdx = -1
        secIdx = -1
        prev = head
        mid = head.next
        nxt = head.next.next
        while nxt:
            if prev.val > mid.idx < nxt.val or prev.val < mid.val > nxt.val:
                fstIdx = secIdx
                secIdx = idx
                if fstIdx != -1:
                    d = secIdx - fstIdx
                    mind  = min(mind, d)
            prev = prev.next
            mid = mid.next
            nxt = nxt.next
            idx += 1
        
        return [mind,maxd]

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]: # type: ignore
        n = 0
        temp = head
        while temp:
            n+=1
            temp = temp.next
        
        size = n // k
        rem = n % k
        temp = head

        ans = []
        while temp:
            c = ListNode(0)
            tempC = c
            s = size
            if rem > 0:
                s += 1
                rem -= 1
            for _ in range(s):
                tempC.next = temp # type: ignore
                temp = temp.next
                tempC = tempC.next
            tempC.next = None
            ans.append(c.next)
        
        if len(ans) < k:
            extra = k - len(ans)
            for _ in range(extra):
                ans.append(None)
        return ans

            
        
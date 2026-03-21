# Definition for a Node.
class Node:
    def __init__(self, x: int, next: "Node" = None, random: "Node" = None):  # type: ignore
        self.val = int(x)
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(self, head: "Optional[Node]") -> "Optional[Node]":  # type: ignore

        # step 1: create deep copy without random pointer
        dummy = Node(0)
        tempC = dummy
        temp = head
        while temp:
            a = Node(temp.val)
            tempC.next = a
            tempC = tempC.next
            temp = temp.next

        # step 2: alternate connections
        duplicate = dummy.next
        a = head
        b = duplicate
        dummy = Node(0)
        tempD = dummy
        while a:
            tempD.next = a
            a = a.next
            tempD = tempD.next

            tempD.next = b
            b = b.next
            tempD = tempD.next

        # step 3: making alternate connections
        dummy = dummy.next
        t1 = dummy
        while t1:
            t2 = t1.next
            if t1.random:
                t2.random = t1.random.next
            t1 = t1.next.next

        # step 4: seprating the lists
        d1 = Node(0)
        d2 = Node(0)
        t1 = d1
        t2 = d2
        t = dummy
        while t:
            t1.next = t
            t = t.next
            t1 = t1.next

            t2.next = t
            t = t.next
            t2 = t2.next

        t1.next = None  # type: ignore
        t2.next = None  # type: ignore
        d1 = d1.next
        d2 = d2.next

        return d2

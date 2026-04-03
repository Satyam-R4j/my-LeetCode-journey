class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class MyLinkedList:

    def __init__(self):
        self.dummy = Node(0)
        self.size = 0

    def get(self, index: int) -> int:
        if index < 0 or index >= self.size: return -1

        curr = self.dummy.next
        for _ in range(index):
            curr = curr.next # type: ignore
        return curr.val # type: ignore

    def addAtHead(self, val: int) -> None:
        self.addAtIndex(0,val)
        

    def addAtTail(self, val: int) -> None:
        self.addAtIndex(self.size,val)
        
    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0: index = 0
        if index > self.size: return 
        
        prev = self.dummy
        for _ in range(index):
            prev = prev.next # type: ignore

        node = Node(val)
        node.next = prev.next # type: ignore
        prev.next = node # type: ignore

        self.size += 1

    def deleteAtIndex(self, index: int) -> None:
        if index < 0 or index >= self.size: return

        prev = self.dummy
        for _ in range(index):
            prev = prev.next # type: ignore
        prev.next = prev.next.next # type: ignore
        self.size -= 1

        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
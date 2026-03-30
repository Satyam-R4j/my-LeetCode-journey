class MyCircularQueue:

    def __init__(self, k: int):
        self.f = 0
        self.b = 0
        self.s = 0
        self.c = k
        self.arr = [0] * k
        

    def enQueue(self, value: int) -> bool:
        if self.s == self.c: return False
        self.arr[self.b] = value
        self.b += 1
        if self.b == self.c:
            self.b = 0
        self.s += 1
        return True
    
    def deQueue(self) -> bool:
        if self.s == 0: return False
        self.f += 1
        if self.f == self.c:
            self.f = 0
        self.s -= 1
        return True

    def Front(self) -> int:
        if self.s == 0:  return -1
        return self.arr[self.f]
    
    def Rear(self) -> int:
        if self.s == 0:  return -1
        if self.b == 0:
            return self.arr[self.c - 1]
        return self.arr[self.b - 1]

    def isEmpty(self) -> bool:
        if self.s == 0: return True
        else: return False

    def isFull(self) -> bool:
        if self.s == self.c: return True
        else : return False
        


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
class MyCircularDeque:

    def __init__(self, k: int):
        self.deq = [0] * (k + 1)
        self.k = k + 1
        self.front = 0
        self.rear = 0

    def insertFront(self, value: int) -> bool:
        if self.isFull():
            return False

        self.front = (self.front - 1) % (self.k)
        self.deq[self.front] = value
        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():
            return False
        self.deq[self.rear] = value
        self.rear = (self.rear + 1) % self.k
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False
        self.front = (self.front + 1) % self.k
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False
        self.rear = (self.rear - 1) % self.k
        return True

    def getFront(self) -> int:
        if self.isEmpty():
            return -1
        return self.deq[self.front]

    def getRear(self) -> int:
        if self.isEmpty():
            return -1
        return self.deq[(self.rear - 1) % self.k]

    def isEmpty(self) -> bool:
        return self.front == self.rear

    def isFull(self) -> bool:
        return (self.rear + 1) % self.k == self.front

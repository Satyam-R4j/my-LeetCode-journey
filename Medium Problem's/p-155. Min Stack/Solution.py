class MinStack:

    def __init__(self):
        self.stack = []
        self.minVal = None

    def push(self, val: int) -> None:
        if not self.stack:
            self.stack.append(val)
            self.minVal = val
        elif val >= self.minVal: # type: ignore
            self.stack.append(val)
        else:
            self.stack.append(2 * val - self.minVal) # type: ignore
            self.minVal = val

    def pop(self) -> None:
        if not self.stack:
            return
        
        if self.stack[-1] < self.minVal:
            self.minVal = 2 * self.minVal - self.stack[-1] # type: ignore
        
        self.stack.pop()
        
        if not self.stack:
            self.minVal = None

    def top(self) -> int:
        if not self.stack:
            return None # type: ignore
        if self.stack[-1] >= self.minVal:
            return self.stack[-1]
        return self.minVal # type: ignore

    def getMin(self) -> int:
        if not self.stack:
            return None # type: ignore
        return self.minVal # type: ignore
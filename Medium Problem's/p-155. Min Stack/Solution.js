//Satyam-R4j-LeetCode Problem-155 (medium)
//Solution in JavaScript
var MinStack = function ()
{
    this.stack = []
    this.minStack = []
};
MinStack.prototype.push = function (val)
{
    this.stack.push(val)
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1])
    {
        this.minStack.push(val)
    }
};
MinStack.prototype.pop = function ()
{

    const val = this.stack.pop()
    if (val === this.minStack[this.minStack.length - 1])
    {
        this.minStack.pop()
    }

};
MinStack.prototype.top = function ()
{
    return this.stack[this.stack.length - 1]
};
MinStack.prototype.getMin = function ()
{

    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack()
minStack.push(-1)
minStack.push(0)
minStack.push(-3)

console.log(minStack.getMin());
minStack.pop()
console.log(minStack.getMin());
console.log(minStack.top());



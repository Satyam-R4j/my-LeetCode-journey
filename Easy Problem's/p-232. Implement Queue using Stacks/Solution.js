//Satyam-R4j-LeetCode Problem-232 (easy)
//Solution in JavaScript
var MyQueue = function ()
{
    this.sOne = []
    this.sTwo = []
};

MyQueue.prototype.push = function (x)
{
    while (this.sOne.length !== 0)
    {
        this.sTwo.push(this.sOne.pop())
    }
    this.sOne.push(x)
    while (this.sTwo.length !== 0)
    {
        this.sOne.push(this.sTwo.pop())
    }
};

MyQueue.prototype.pop = function ()
{
    return this.sOne.pop()
};

MyQueue.prototype.peek = function ()
{
    return this.sOne[this.sOne.length - 1]
};

MyQueue.prototype.empty = function ()
{
    return this.sOne.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
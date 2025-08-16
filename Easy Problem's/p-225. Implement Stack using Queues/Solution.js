//Satyam-R4j-LeetCode Problem-225 (easy)
//Solution in JavaScript
var MyStack = function ()
{
    this.q1 = []
    this.q2 = []
};

MyStack.prototype.push = function (x)
{
    while (this.q1.length !== 0)
    {
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x)
    while (this.q2.length !== 0)
    {
        this.q1.push(this.q2.shift())
    }
};

MyStack.prototype.pop = function ()
{
    return ans = this.q1.shift()
};  

MyStack.prototype.top = function ()
{
    return this.q1[0]
};

MyStack.prototype.empty = function ()
{
    return this.q1.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



var obj = new MyStack();
obj.push(10);
obj.push(20);
obj.push(30);
console.log(obj.top());   // 30
console.log(obj.pop());   // 30
console.log(obj.top());   // 20
console.log(obj.empty()); // false
//Satyam-R4j-LeetCode Problem-901 (medium)
//Solution in JavaScript
var StockSpanner = function ()
{
    this.stack = []
};

StockSpanner.prototype.next = function (price)
{
    let span = 1

    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price)
    {
        span += this.stack.pop()[1]

    }

    this.stack.push([price, span])
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */


const stockSpanner = new StockSpanner();   // from "StockSpanner" and []

const prices = [100, 80, 60, 70, 60, 75, 85];

for (let price of prices)
{
    const span = stockSpanner.next(price);
    console.log(`Price: ${price}, Span: ${span}`);
}



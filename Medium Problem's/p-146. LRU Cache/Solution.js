//Satyam-R4j-LeetCode Problem-146 (medium)
//Solution in JavaScript
class Node
{
    constructor(key, val)
    {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

var LRUCache = function (capacity)
{
    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node(0, 0)
    this.tail = new Node(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
};

LRUCache.prototype._remove = function (node)
{
    node.prev.next = node.next
    node.next.prev = node.prev
}

LRUCache.prototype._add = function (node)
{
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
}

LRUCache.prototype.get = function (key)
{
    if (!this.map.has(key)) return -1

    const node = this.map.get(key)
    this._remove(node)
    this._add(node)
    return node.val
};

LRUCache.prototype.put = function (key, value)
{
    if (this.map.has(key))
    {
        this._remove(this.map.get(key))
    }

    const newNode = new Node(key, value)
    this._add(newNode)
    this.map.set(key, newNode)

    if (this.map.size > this.capacity)
    {
        let lru = this.tail.prev
        this._remove(lru)
        this.map.delete(lru.key)
    }
}


// --- Test sequence ---
const commands = ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"];
const values = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];

let obj = null;
const output = [];

for (let i = 0; i < commands.length; i++)
{
    const cmd = commands[i];
    const val = values[i];

    if (cmd === "LRUCache")
    {
        obj = new LRUCache(val[0]);
        output.push(null);
    } else if (cmd === "put")
    {
        obj.put(val[0], val[1]);
        output.push(null);
    } else if (cmd === "get")
    {
        output.push(obj.get(val[0]));
    }
}

console.log(output);

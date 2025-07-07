function Node(val, next = null, random = null)
{
    this.val = val;
    this.next = next;
    this.random = random;
}

/**
 * Helper to build a linked list with random pointers from array input.
 * @param {Array} arr - Format: [[val, randomIndex], ...]
 * @return {Node}
 */
function buildLinkedList(arr)
{
    if (!arr.length) return null;

    let nodes = arr.map(([val]) => new Node(val));

    for (let i = 0; i < arr.length; i++)
    {
        if (i < arr.length - 1) nodes[i].next = nodes[i + 1];
        let randomIndex = arr[i][1];
        if (randomIndex !== null)
        {
            nodes[i].random = nodes[randomIndex];
        }
    }

    return nodes[0];
}

/**
 * Helper to print a list for verification
 * @param {Node} head
 */
function printLinkedList(head)
{
    let result = [];
    let map = new Map();
    let index = 0;
    let node = head;

    // First pass to assign indices
    while (node)
    {
        map.set(node, index++);
        node = node.next;
    }

    node = head;
    while (node)
    {
        result.push([
            node.val,
            node.random ? map.get(node.random) : null
        ]);
        node = node.next;
    }

    console.log(result);
}
/**
 * @param {_Node} head
 * @return {_Node}
 */
//Satyam-R4j-LeetCode Problem-138 (medium)
//Solution in JavaScript
var copyRandomList = function (head)
{
    if (head === null) return null
    let m = new Map()
    let newHead = new Node(head.val)
    m.set(head, newHead)
    let oldTemp = head.next
    let newTemp = newHead
    while (oldTemp !== null)
    {
        let copyNode = new Node(oldTemp.val)
        m.set(oldTemp, copyNode)
        newTemp.next = copyNode
        oldTemp = oldTemp.next
        newTemp = newTemp.next
    }
    oldTemp = head
    newTemp = newHead
    while (oldTemp !== null)
    {
        if (oldTemp.random !== null)
        {
            newTemp.random = m.get(oldTemp.random)
        }
        else
        {
            newTemp.random = null
        }
        oldTemp = oldTemp.next
        newTemp = newTemp.next
    }
    return newHead
};

let input = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
let head = buildLinkedList(input);
let copiedHead = copyRandomList(head);
printLinkedList(copiedHead);

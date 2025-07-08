function ListNode(val, next = null)
{
    this.val = val;
    this.next = next;
}

//Satyam-R4j-LeetCode Problem-19 (medium)
//Solution in JavaScript
var removeNthFromEnd = function (head, n)
{

    if (head === null) return null
    let len = 0
    let curr = head

    while (curr !== null)
    {
        len++
        curr = curr.next
    }

    let nth = len - n
    if (nth === 0) return head.next
    let i = 1
    curr = head
    while (i < nth)
    {
        curr = curr.next
        i++
    }
    curr.next = curr.next ? curr.next.next : null
    return head
};


function arrayToLinkedList(arr)
{
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr)
    {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function linkedListToArray(head)
{
    let result = [];
    while (head !== null)
    {
        result.push(head.val);
        head = head.next;
    }
    return result;
}


let head = arrayToLinkedList([1, 2]);
let n = 1;

let updatedHead = removeNthFromEnd(head, n);
console.log(linkedListToArray(updatedHead));

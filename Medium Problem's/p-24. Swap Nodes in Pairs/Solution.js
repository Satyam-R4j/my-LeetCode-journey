/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next)
{
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function arrayToList(arr)
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

function listToArray(head)
{
    let result = [];
    while (head !== null)
    {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head)
{
    if(head === null) return null
    let curr = head
    let len = 0
    while(curr !== null)
    {
        len++
        curr = curr.next
    }  

    console.log(len);
    
    
    
    let prev = head
    let next = head.next
    let i = 0
    while(i <= len)
    {
        next.next = prev
        prev.next = next

        i++
    }
    
    return head;
};
let head = arrayToList([1,2,3,4])
const swapped = swapPairs(head);
const outputArray = listToArray(swapped);
console.log(outputArray);

